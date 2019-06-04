import React from 'react';
import PostCard from './PostCard';
import './Post.scss';

const PostContainer = ({posts, ...rest}) => {
    if(posts.length === 0) {return <h1> loading Data. Please be patient yo!</h1>}
    return(
        <div>
            {posts.map(postOnList => (
                        <PostCard key={postOnList.id} post={postOnList} {...rest}/> 
                    ))}
        </div>
    )
}


export default PostContainer;