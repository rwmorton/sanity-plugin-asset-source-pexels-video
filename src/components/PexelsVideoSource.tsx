import * as React from 'react'

import {Dialog} from '@sanity/ui'
import PatchEvent,{
    set,unset
} from '@sanity/form-builder/PatchEvent'

import BrowseVideos from './BrowseVideos'

export interface Props {
    onChange: any
    onClose: any
    value: any
}

const PexelsVideoSource: React.FC<Props> = React.forwardRef((props,ref: any) => {
    const {onChange,onClose,value} = props

    const handleSelect = (video: Video) => {
        onChange(PatchEvent.from(set(video)))
        onClose(true)
    }

    return (
        <Dialog
            id='source-pexels-video'
            header='Select video from Pexels'
            onClose={onClose}
            width={4}
            style={{
                overflow: 'hidden'
            }}
        >
            <BrowseVideos handleSelect={handleSelect} />
        </Dialog>
    )
})

export default PexelsVideoSource
