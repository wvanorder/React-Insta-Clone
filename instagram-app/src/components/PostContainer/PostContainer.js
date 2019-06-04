import React from 'react';
import PostCard from './PostCard';
import './Post.scss';

const PostContainer = props => {
    if(props.posts.length === 0) {return <h1> loading Data. Please be patient yo!</h1>}
    return(
        <div>
            {props.posts.map(postOnList => (
                        <PostCard key={postOnList.id} post={postOnList} /> 
                    ))}
        </div>
    )
}


export default PostContainer;