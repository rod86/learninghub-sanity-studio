import {parseArgs} from 'node:util'
import { getCliClient } from 'sanity/cli'
import { Transaction } from '@sanity/client'
import { SanityDocument } from 'sanity';
import { DocumentPatch, RemoveFieldsPatch } from './types';

const args = process.argv.slice(2);

const result = parseArgs({
    args,
    options: {
        type: { type: 'string' },
        field: { type: 'string' },
    }
});

if (result.values.type == null || result.values.field == null) {
    throw new Error('Missing required arguments');
}

const { type, field } = result.values;

type Patch = DocumentPatch<RemoveFieldsPatch>;

const client = getCliClient();

const fetchDocuments = () => client.fetch(`*[_type == "${type}" && defined(${field})] { _id, _rev }`);

const buildDocumentPatch = (doc: SanityDocument): Patch => {
    return {
        id: doc._id,
        patch: {
            unset: [field],
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