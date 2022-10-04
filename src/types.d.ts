interface User {
    id: number
    name: string
    url: string
    _type: string
}

interface VideoFile {
    id: number
    quality: string
    file_type: string
    width: number
    height: number
    link: string
    _type: string
    _key: string
}

interface Video {
    id: number
    duration: number
    image: string
    url: string
    user: User
    video_files: VideoFile[]
    link: string
    _type: string
}

interface QueryResult {
    next_page?: string
    page: number
    per_page: number
    total_results: number
    url: string
    videos: Video[]
}
