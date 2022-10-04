export default {
    name: 'pexelsVideoUser',
    type: 'object',
    title: 'Pexels Video User',
    fields: [
        {
            name: 'id',
            type: 'number',
            readOnly: true
        },
        {
            name: 'name',
            type: 'string',
            readOnly: true
        },
        {
            name: 'url',
            type: 'string',
            readOnly: true
        }
    ]
}
