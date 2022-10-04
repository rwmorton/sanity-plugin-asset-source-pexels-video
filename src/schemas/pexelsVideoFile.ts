export default {
    name: 'pexelsVideoFile',
    type: 'object',
    title: 'Pexels Video File',
    fields: [
        {
            name: 'id',
            type: 'number',
            readOnly: true
        },
        {
            name: 'quality',
            type: 'string',
            readOnly: true
        },
        {
            name: 'file_type',
            type: 'string',
            readOnly: true
        },
        {
            name: 'width',
            type: 'number',
            readOnly: true
        },
        {
            name: 'height',
            type: 'number',
            readOnly: true
        },
        {
            name: 'link',
            type: 'string',
            readOnly: true
        }
    ]
}
