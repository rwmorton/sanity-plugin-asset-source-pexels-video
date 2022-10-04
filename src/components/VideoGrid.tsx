import * as React from 'react'

import Video from './Video'

interface VideoGridProps {
    videos: Video[]
    onSelect: (video: Video) => void
}

const VideoGrid: React.FC<VideoGridProps> = ({videos,onSelect}) => {
    return (
        <div className="grid grid-cols-1">
          {videos.map((video: any) => {
            // first sort video files
            video.video_files.sort((a: VideoFile,b: VideoFile) => a.width - b.width)
            return <Video key={video.id} video={video} onSelect={onSelect} />
          })}
        </div>
    )
}

export default VideoGrid
