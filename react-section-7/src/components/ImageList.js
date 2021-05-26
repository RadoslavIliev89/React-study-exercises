const ImageList = (props) => {

       const images= props.images.map(({description, urls,  id}) => <img src={urls.regular} alt={description} width='flex' height='200' key ={id} />)

    return(
        <div>{images}</div>
    );

};
export default ImageList;