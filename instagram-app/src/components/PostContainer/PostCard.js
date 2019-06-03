import React from 'react';
import PropTypes from 'prop-types';
import PostComment from './PostComment';
import './Post.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment} from '@fortawesome/free-regular-svg-icons';

const PostCard = props => {
    
    return (
    <div className='post-card'>
        <div className='user-info'>
            <img className='user' src={props.post.thumbnailUrl} />
            <h2>{props.post.username}</h2>
        </div>
        <img className='picture' src ={props.post.imageUrl} />
        <div className='like-comment'>
            <FontAwesomeIcon className='icon' icon={faHeart} />
            <FontAwesomeIcon className='icon' icon={faComment} />
        </div>

        <h5>{props.post.likes} Likes</h5>
       
        <PostComment key={(Date.now() + Math.Random)} comments={props.post.comments} />
        <div className='add-comment'>
            <form>
                <input placeholder='add comment here'/>
                <button>...</button>
            </form>
        </div>
        
        
    </div>
    )
    
};

PostCard.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            like: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired, 
        })
    )
}

export default PostCard;