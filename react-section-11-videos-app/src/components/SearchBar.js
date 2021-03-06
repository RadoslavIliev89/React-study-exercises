import { Component } from 'react';

class SearchBar extends Component {

    state = { term: '' }

    onInputChange = (e) => {
        const term = e.target.value;
        this.setState({ term })

    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {

        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;