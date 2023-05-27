import { defineField, defineType } from 'sanity';
import {TagIcon} from '@sanity/icons';

export default defineType({
	name: 'tagType',
	title: 'Tag',
	type: 'array',
	icon: TagIcon,
	of: [
		defineField({
			name: 'tag',
			title: 'Tag',
			type: 'reference',
			to: [{type: 'tag'}],
			options: {
				disableNew: true
			}
		})
	]
})