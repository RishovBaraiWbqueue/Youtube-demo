import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos,onVideoSelect}) => {
const vidoeItem = videos.map( video => <VideoItem key={video.id.videoId} video = {video} onVideoSelect={onVideoSelect}/> )
    return (
        <div className='ui relaxed divided list'>
            {vidoeItem}
        </div>
    )
}

export default VideoList
