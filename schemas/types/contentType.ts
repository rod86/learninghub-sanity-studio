import { defineType } from 'sanity';

export default defineType({
    name: 'content',
    type: 'array',
    title: 'Content',
    of: [{ type: 'block' }]
});