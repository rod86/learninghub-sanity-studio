import { defineType } from 'sanity';

export default defineType({
    type: 'string',
    name: 'level',
    title: 'Level',
    options: {
        list: [
            {title: 'Beginner', value: 'beginner'},
            {title: 'Intermediate', value: 'intermediate'},
            {title: 'Advanced', value: 'advanced'}
        ]
    },
});