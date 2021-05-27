import { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
class App extends Component {
    state = { videos: [] }
    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos:response.data.items})
    }
    render() {
        return (
            <div className="container" ><SearchBar onSubmit={this.onSearchSubmit} />
            <div>I have {this.state.videos.length} videos </div>
            </div>
        );
    }
}
export default App;