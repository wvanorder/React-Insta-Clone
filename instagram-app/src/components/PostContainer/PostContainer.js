import React from 'react';
import PostCard from './PostCard';
import './Post.scss';

const PostContainer = props => {
    return(
        <div>
            {props.posts.map(postOnList => (
                        <PostCard post={postOnList} /> 
                    ))}
        </div>
    )
}


export default PostContainer;