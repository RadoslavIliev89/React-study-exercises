const ImageList = (props) => {

       const images= props.images.map(image => <img src={image.urls.regular} width='flex' height='200' />)

    return(
        <div>{images}</div>
    );

};
export default ImageList;