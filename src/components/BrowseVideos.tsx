import * as React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import usePexels,{EMPTY_STATE} from '../hooks/usePexels'
import Search from './Search'
import VideoGrid from './VideoGrid'
import Loading from './Loading'
import EndOfList from './EndOfList'

interface BrowseVideosProps {
    handleSelect: (video: Video) => void
}

const BrowseVideos: React.FC<BrowseVideosProps> = ({handleSelect}) => {
    const {
        status,
        query,setQuery,
        loadMore,
        hasMore,
        data,setData
    } = usePexels()

    const handleSearch = (searchTerm: string) => {
      setData(EMPTY_STATE)
      setQuery(searchTerm)
    }

    return (
        <div className="container mt-8">
            <Search onSearch={handleSearch} />
            {status === 'ERROR' && <p className="mx-8 mb-8 text-red-600">ERROR: Could not fetch videos from Pexels...</p>}
            {data?.totalResults > 0 && <p className="mx-8 pb-8 text-slate-600">There are {data.totalResults} results from your search for <b>{query}</b></p>}
            {(status !== 'ERROR' && query) 
            ? <InfiniteScroll
                dataLength={data.videos.length}
                next={loadMore}
                hasMore={hasMore}
                scrollThreshold={0.99}
                height='60vh'
                loader={<Loading />}
                endMessage={<EndOfList title='End' message='There is nothing more to see from this search.' />}
            >
              <VideoGrid videos={data.videos} onSelect={handleSelect} />
            </InfiniteScroll>
            : (status === 'IDLE') && <p className="mx-8 mb-8 text-slate-600">Enter something in the search box...</p>
            }
        </div>
    )
}

export default BrowseVideos
