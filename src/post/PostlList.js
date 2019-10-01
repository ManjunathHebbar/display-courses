import React, { Component } from 'react';
import PostData from '../data/post.json';
class PostList extends Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                {PostData.map((postDetail, index) => {
                    return <h1>postDetail.Provider</h1>
                })}
            </div>
        );
    }
}
export default PostList