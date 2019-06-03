import React from 'react';
import PropTypes from 'prop-types';
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

PostComment.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default PostComment;