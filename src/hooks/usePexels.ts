import * as React from 'react'

interface SearchData {
    totalResults: number
    videos: Video[]
    page: number
}

export const EMPTY_STATE: SearchData = {
    totalResults: 0,
    videos: [],
    page: 0
}

type SearchStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'

const composePexelUrl = (query: string,perPage: number,page: number) =>
`https://api.pexels.com/videos/search?query=${query}&per_page=${perPage}&page=${page}`

const usePexels = () => {
    const [status,setStatus] = React.useState<SearchStatus>('IDLE')
    const [data,setData] = React.useState<SearchData>(EMPTY_STATE)
    const [query,setQuery] = React.useState<string>('')
    const [perPage,setPerPage] = React.useState<number>(4)
    const [hasMore,setHasMore] = React.useState<boolean>(true)

    const loadMore = async () => {
        try {
            setStatus('LOADING')
            const url = composePexelUrl(query,perPage,data.page)

            const response = await fetch(url,{
                method: 'GET',
                headers: {
                    'Authorization': '563492ad6f917000010000017864a779901c438c8a5d21fca30e846d', // process.env.PEXELS_API_KEY!
                }
            })

            const responseData: QueryResult = await response.json()

            if(responseData.page > 1) {
                setData(prev => ({
                    ...prev,
                    page: prev.page + 1,
                    videos: [
                        ...prev.videos,
                        ...responseData.videos
                    ]
                }))
            } else {
                setData({
                    totalResults: responseData.total_results,
                    page: responseData.page + 1,
                    videos: responseData.videos
                })
            }

            setStatus('SUCCESS')

            // do we have more data to load?
            responseData.next_page ? setHasMore(true) : setHasMore(false)
        } catch(error) {
            console.log('#'.repeat(100))
            console.log(error)
            setStatus('ERROR')
        }
    }

    React.useEffect(() => {
        if(query !== '') {
            loadMore()
            if(status === 'SUCCESS') {
                setStatus('IDLE')
            }
        }
    },[query])

    return {
        status,setStatus,
        data,setData,
        query,setQuery,
        perPage,setPerPage,
        loadMore,
        hasMore
    }
}

export default usePexels
