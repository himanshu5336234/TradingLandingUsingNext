export default {
    name: 'tag',
    type: 'document',
    title: 'Blog Tags',
    fields: [
        {
            name: 'tag',
            type: 'string',
            title: 'Tag Associated with the Blog',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            validation: (Rule: any) => Rule.required(),
            options: {
              source: 'tag',
            },
        },
        {
            name: 'desc',
            type: 'string',
            title: 'Write a description for the tag',
        }
    ]
}