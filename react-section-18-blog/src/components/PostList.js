import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPost();
    }

    renderedList() {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle alined icon user" />
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        });
    };

    render() {

        return (
            <div className="ui relaxed divided list">{this.renderedList()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return { posts: state.posts }
}
export default connect(mapStateToProps, { fetchPost: fetchPosts })(PostList);