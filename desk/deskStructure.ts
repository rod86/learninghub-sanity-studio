import {StructureBuilder} from 'sanity/desk';
import {CogIcon, DocumentIcon} from '@sanity/icons';
import {Template} from 'sanity';
import { DocumentPluginOptions } from 'sanity';
import { singletonActions, singletonTypes } from '../schemas/singletons';

const isSingletonType = (type: string): boolean => {
    for (const index in singletonTypes) {
        if (singletonTypes[index].schemaType === type) {
            return true;
        }
    }

    return false;
};

const buildSettingsItem = (S: StructureBuilder) => {
    return S.listItem()
        .id('settings')
        .title('Settings')
        .icon(CogIcon)
        .child(
            S.list()
                .title('Settings')
                .items(singletonTypes.map(({ schemaType, title}) => {
                    return S.listItem()
                        .title(title)
                        .icon(DocumentIcon)
                        .child(
                            S.document()
                                .title(title)
                                .schemaType(schemaType)
                                .documentId(schemaType)
                        );
                }))
        );
};

const deskStructure = (S: StructureBuilder) => {
    return S.list()
        .title('Content')
        .items([
            ...S.documentTypeListItems().filter(listItem => {
                const id = listItem.getId();
                if (id === undefined) return false;
                return !isSingletonType(id);
            }),
            buildSettingsItem(S),
        ]);
};

// Filter out singleton types from the global “New document” menu options
const templates = (templates: Template<any, any>[]) => {
    return templates.filter(
        ({ schemaType }) => !isSingletonType(schemaType)
    );
};

// Filter document actions
const document: DocumentPluginOptions = {
    actions: (input, context) => {
        return isSingletonType(context.schemaType)
            ? input.filter(({ action }) => action && singletonActions.has(action))
            : input;
    }
}; 

export { deskStructure, templates, document };

