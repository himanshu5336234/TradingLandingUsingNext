export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'authorName',
            type: 'string',
            title: 'Name',
            description: 'Please provide full name'
        },
        {
            name: 'authorDesc',
            type: 'string',
            title: 'About the author',
            description: 'Please provide full description of the author'
        },
    ]
}