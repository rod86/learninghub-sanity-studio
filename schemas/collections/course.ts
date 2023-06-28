import { defineField, defineType } from 'sanity';
import {DocumentIcon} from '@sanity/icons';

export default defineType({
    name: 'course',
    title: 'Course',
    type: 'document',
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'tagType',
            validation: (Rule) => Rule.max(5),
        }),
        defineField({
            name: 'format',
            title: 'Format',
            type: 'string',
            options: {
                list: [
                    {title: 'Web\\Blog', value: 'web'},
                    {title: 'Video', value: 'video'},
                    {title: 'Pdf', value: 'pdf'}
                ]
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'level',
            title: 'Level',
            type: 'level',
            validation: (Rule) => Rule.required()
        }),
	  	defineField({
            name: 'durationMinutes',
            title: 'Duration Time (minutes)',
            type: 'number',
            validation: (Rule) => Rule.integer().greaterThan(0),
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isFree',
            title: 'Is Free',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'date',
            options: {
                dateFormat: 'DD/MM/YYYY'
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'content',
        }),
    ],
    orderings: [
        { 
            title: 'Published At',
            name: 'publishedAt',
            by: [
                {field: 'publishedAt', direction: 'desc'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            tag1: 'tags.0.name',
            tag2: 'tags.1.name',
            tag3: 'tags.2.name',
            tag4: 'tags.3.name',
            tag5: 'tags.4.name',
            publishedAt: 'publishedAt'
        },
        prepare: function(value: Record<string, any>) {
            const {tag1, tag2, tag3, tag4, tag5, publishedAt} = value;
            const tags: string = [tag1, tag2, tag3, tag4, tag5].filter(Boolean).join(',');

            return {
                title: value.title,
                subtitle: tags,
                description: publishedAt
            };
        }
    }
});
