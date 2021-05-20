const LoadScreen = (props) => {

    return (
        <div class="ui active dimmer">
            <div class="large ui text loader">{props.massage}</div>
        </div>
    );

}
LoadScreen.defaultProps = {
    massage: 'Loading...'
}
export default LoadScreen;