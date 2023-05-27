import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'seoSettings',
	title: 'SEO Settings',
	type: 'document',
	fields: [
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'keywords',
			title: 'Keywords',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	]
})