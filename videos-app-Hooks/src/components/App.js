import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube';


const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchSubmit('reactJS')
    }, [])

    const onSearchSubmit = async (term) => {

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }
    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    }
    return (
        <div className="ui container" >
            <SearchBar onSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default App;