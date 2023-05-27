import { defineType } from 'sanity';

export default defineType({
	name: 'siteSettings',
	title: 'Site Settings',
	type: 'document',
	fields: [
		{
			name: 'tags',
			title: 'Tags',
			description: 'Tags to show in Home Page',
			type: 'tagType',
		},
	]
})