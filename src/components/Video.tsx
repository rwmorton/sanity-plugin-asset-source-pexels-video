import * as React from 'react'

import Button from './Button'
import VideoSizes from './VideoSizes'

interface VideoProps {
    video: Video
    onSelect?: (video: Video) => void
}

const Video: React.FC<VideoProps> = ({video,onSelect}) => {
    const [link,setLink] = React.useState(video.video_files[0].link)

    // set video options
    const availableSizes = video.video_files.map((vf: VideoFile) => ({
        option: `${vf.quality} : ${vf.width} x ${vf.height}`,
        value: vf.link
    }))

    // choose video with selected size
    const handleOnClick = () => {
        onSelect && onSelect({
            ...video,
            link
        })
    }

    return (
        <div className="flex flex-col px-4">
            <iframe
                src={link}
                width={video.video_files[0].width}
                height={video.video_files[0].height}
                frameBorder="0"
                allowFullScreen
            >
            </iframe>

            {/* toolbar */}
            <div className="flex pt-4 mx-4">
                <div className="flex space-x-8">
                    {onSelect && <Button handleOnClick={handleOnClick}>Use video</Button>}
                    <VideoSizes
                        sizeOptions={availableSizes}
                        defaultSize={availableSizes[0].option}
                        onSelect={setLink}
                    />
                </div>
            </div>
        </div>
    )
}

export default Video
