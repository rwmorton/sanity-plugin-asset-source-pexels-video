import * as React from 'react'

import {FormField} from '@sanity/base/components'
import {Stack,Text,Button} from '@sanity/ui'
import {nanoid} from 'nanoid'

import PatchEvent,{
    set,unset
} from '@sanity/form-builder/PatchEvent'

import PexelsVideoSource from '../components/PexelsVideoSource'
import Video from '../components/Video'
// import Button from '../components/Button'

const PexelsVideo = React.forwardRef((props: any,ref: any) => {
    const [browse,setBrowse] = React.useState(false)
    const [videoKey,setVideoKey] = React.useState('')

    const inputId = nanoid()

    const {
        type,
        onChange,
        value
    } = props

    React.useEffect(() => {
        setVideoKey(value ? value.id : '')
    },[value])

    const handleDelete = () => {
        onChange(PatchEvent.from(set(undefined)))
    }

    return (
        <div className="border-dashed border p-4 border-slate-400">
            <FormField
                description={type.description}
                title={type.title}
                inputId={inputId}
            >
                {browse && <PexelsVideoSource value={value} onChange={onChange} onClose={() => setBrowse(false)} />}
                <Stack space={4}>
                {value &&
                    <>
                        <Video key={videoKey} video={value} />
                        <Text>{value.user.name}</Text>
                        <Text><a href={value.user.url}>{value.user.url}</a></Text>
                    </>
                }
                    <Button
                        style={{textAlign: 'center'}}
                        tone='default'
                        onClick={() => setBrowse(true)}
                    >
                        {value ? "Replace" : "Browse Pexels"}
                    </Button>
                </Stack>
                {/* {JSON.stringify(value)} */}
            </FormField>
        </div>
    )
})

export default {
    name: 'pexelsVideo',
    type: 'object',
    title: 'Pexels Video',
    inputComponent: PexelsVideo,
    fields: [
        {
            title: 'Video Asset',
            name: 'videoAsset',
            type: 'pexelsVideoAsset'
        }
    ]
}
