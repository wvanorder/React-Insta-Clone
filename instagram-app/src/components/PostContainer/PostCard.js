import React from 'react';
import PropTypes from 'prop-types';
import PostComment from './PostComment';
import './Post.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment} from '@fortawesome/free-regular-svg-icons';

class PostCard extends React.Component {
    state = {
        comments: this.props.post.comments,
        newComment: '',
        error: null,
        likes: this.props.post.likes,
    }

    addComment = event => {
        if(this.state.newComment === '') {
            return this.setState({
                error: 'You must type something to leave a comment!',
            });
        }
        event.preventDefault();
        const newComment = {
            id: this.state.comments.length + 1,
            username: 'anonymous',
            text: this.state.newComment,
            
        };
        this.setState(state => ({
            comments: [...state.comments, newComment],
            newComment: '',
            error: null,
        }))
    } 

    commentInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    addLike = event => {
        const newLikes = this.state.likes + 1;
        this.setState({
         likes: newLikes,   
        });
    }
    

    render() {
        
        return (
            <div className={`post-card`}>
                <div className='user-info'>
                    <img className='user' src={this.props.post.thumbnailUrl} />
                    <h2>{this.props.post.username}</h2>
                </div>
                <img className='picture' src ={this.props.post.imageUrl} />
                <div className='like-comment'>
                    <FontAwesomeIcon className='icon' icon={faHeart} onClick={this.addLike}/>
                    <FontAwesomeIcon className='icon' icon={faComment} />
                </div>
        
                <h5>{this.state.likes} Likes</h5>
               
                <PostComment key={(Date.now() + Math.Random)} comments={this.state.comments} />
                <div className='add-comment'>
                    <form onSubmit={this.addComment}>
                        <input placeholder='add comment here' value={this.state.newComment} onChange={this.commentInput} name='newComment'/>
                        <button onClick={this.addComment}>...</button>
                    </form>
                </div>
                
                
            </div>
            )
            
    }
    
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