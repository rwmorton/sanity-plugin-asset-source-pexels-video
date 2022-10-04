import * as React from 'react'

export default {
    name: 'pexelsVideoAsset',
    type: 'document',
    title: 'Pexels Video Asset',
    fields: [
        {
            name: 'id',
            type: 'number',
            readOnly: true
        },
        {
            name: 'duration',
            type: 'number',
            readOnly: true
        },
        {
            name: 'image',
            type: 'string',
            readOnly: true
        },
        {
            name: 'url',
            type: 'string',
            readOnly: true
        },
        {
            name: 'user',
            type: 'pexelsVideoUser',
            readOnly: true
        },
        {
            name: 'video_files',
            type: 'array',
            of: [{type: 'pexelsVideoFile'}],
            readOnly: true
        },
        {
            name: 'link',
            type: 'string',
            readOnly: true
        }
    ],
    preview: {
        select: {
            image: 'image',
            link: 'link'
        },
        prepare(selection: any) {
            return {
                media: <img src={selection.image} />,
                title: selection.link
            }
        }
    }
}
