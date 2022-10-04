import {SanityDocument} from '@sanity/client'
import {nanoid} from 'nanoid'

const generateVideoAsset = (video: Video): SanityDocument<Video> => {
    const date = new Date().toISOString()

    const asset: SanityDocument<Video> = {
        id: video.id,
        duration: video.duration,
        image: video.image,
        url: video.url,
        link: video.link,
        user: {
            ...video.user,
            _type: 'pexelsVideoUser'
        },
        video_files: video.video_files.map(video_file => {
            return {
                id: video_file.id,
                quality: video_file.quality,
                file_type: video_file.file_type,
                width: video_file.width,
                height: video_file.height,
                link: video_file.link,
                _type: 'pexelsVideoFile',
                _key: nanoid()
            }
        }),
        // sanity
        _id: nanoid(),
        _type: 'pexelsVideoAsset',
        _rev: '',
        _createdAt: date,
        _updatedAt: date
    }

    return asset
}

export default generateVideoAsset
