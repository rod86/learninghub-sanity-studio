// npx sanity exec migrations/remove-field.ts --with-user-token

import { getCliClient } from 'sanity/cli'
import { Transaction } from '@sanity/client'
import { SanityDocument } from 'sanity';
import { DocumentPatch, RenameFieldsPatch } from './types';

const type = 'tag';
const fieldOldName = 'isHomeTag';
const fieldNewName = 'isHome';

type Patch = DocumentPatch<RenameFieldsPatch>;

const client = getCliClient();

const fetchDocuments = () => client.fetch(`*[_type == "${type}" && defined(${fieldOldName})] { _id, _rev, ${fieldOldName} }`);

const buildDocumentPatch = (doc: SanityDocument): Patch => {
    return {
        id: doc._id,
        patch: {
            set: {
                [fieldNewName]: doc[`${fieldOldName}`]
            },
            unset: [`${fieldOldName}`],
            ifRevisionID: doc._rev
        }
    };
};

const createTransaction = (patches: Patch[]): Transaction => {
    return patches.reduce(
        (tx: Transaction, patch: Patch) => tx.patch(patch.id, patch.patch),
        client.transaction()
    );
};


const main = async(): Promise<void> => {
    const documents = await fetchDocuments();
    const patches = documents.map(buildDocumentPatch);

    if (patches.length === 0) {
        console.log('No documents to migrate');
        process.exit(1);
    }

    console.log(
        `Migrating batch:\n %s`,
        patches.map((patch: Patch) => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n')
    );

    const transaction = createTransaction(patches);
    transaction.commit();
};

main()
    .catch((error: any) => {
        console.error(error);
        process.exit(1);
    });