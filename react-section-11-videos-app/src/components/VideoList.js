import VideoCard from './VideoCard';
const VideoList =({videos})=>{

    const renderedList= videos.map((x)=><VideoCard video={x} key={x.id.videoId} />)
   

    return <div className="ui relaxed divided list">{renderedList}</div>
}
export default VideoList;