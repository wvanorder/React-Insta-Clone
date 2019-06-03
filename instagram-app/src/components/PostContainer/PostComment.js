import React from 'react';
import './Post.scss';

const PostComment = props => {
        return(
            <div >
            {props.comments.map(comment => (
                <div className='comments'>
                    <h6>{comment.username}</h6>
                    <p>{comment.text}</p> 
                </div>
                ))}
            </div> 
        )
};

export default PostComment;