import { defineField, defineType } from 'sanity';
import {DocumentIcon} from '@sanity/icons';

export default defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    icon: DocumentIcon,
    fieldsets: [{name: 'position', options: {columns: 2}}],
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
