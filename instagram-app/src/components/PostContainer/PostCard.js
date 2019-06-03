import React from 'react';
import PostComment from './PostComment';
import './Post.scss';

const PostCard = props => {
    
    return (
    <div className='post-card'>
        <div className='user-info'>
            <img className='user' src={props.post.thumbnailUrl} />
            <h2>{props.post.username}</h2>
        </div>
        <img className='picture' src ='https://picsum.photos/598' />
        <h5>{props.post.likes} Likes</h5>
        <PostComment comments={props.post.comments} />
        <form>
        <input placeholder='add comment here'/>
        <button />
        </form>
        
    </div>
    )
    
};

export default PostCard;