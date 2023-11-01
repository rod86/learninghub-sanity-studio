import { defineType } from 'sanity';

export default defineType({
    name: 'content',
    type: 'array',
    title: 'Content',
    of: [{
        type: 'block',
        styles: [
            {title: 'Normal', value: 'normal'},
        ],
        lists: [
            {title: 'Bullet', value: 'bullet'},
        ],
        marks: {
            decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
            ]
        }
    }]
});