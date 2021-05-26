import { Component } from 'react'
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {

    state = { images: [] }

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID b5Ldy-DufchgCCtN442_Vbcm4wBrk1IgIIg1X44Z3-w'
            }
        })
            .then((res) => { this.setState({ images: res.date.results }) })
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div >
        )
    }
}

export default App;