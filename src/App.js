import React, { useState,useEffect } from 'react'
import SearchBar from './Components/SearchBar'
import youtube from './Api/YoutubeApi'
import VideoList from './Components/VideoList'
import VideoDetail from './Components/VideoDetail'


const App = () =>  {

    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

       const API_KEY = 'AIzaSyB8Cudfk2t2qMpQUm5X_5ZHfkR-sSdWNeY';
    

 useEffect(() => {
    onSearchSubmit('buildings')
    
 },[])
        
    const onSearchSubmit = term => {
        youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: API_KEY
            }
        }).then(response => {
            console.log(response.data.items)
            setVideos(response.data.items)
            setSelectedVideo(response.data.items[0])
        });
      
    }

  const onVideoSelect = (video) => {
    setSelectedVideo(video )
        
    }
   
        return (
            <div className='ui container'>
                <SearchBar onTermSubmit={onSearchSubmit} />
                <div className='ui grid'>
                    <div className='row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={videos} onVideoSelect={onVideoSelect} />

                        </div>

                    </div>

                </div>

            </div>
        )
    }

export default App
