import VideoCard from './VideoCard';
const VideoList =({videos, onVideoSelect})=>{

    const renderedList= videos.map((x)=><VideoCard onVideoSelect={onVideoSelect} video={x} key={x.id.videoId} />)
   

    return <div className="ui relaxed divided list">{renderedList}</div>
}
export default VideoList;