import React from 'react';
import PropTypes from 'prop-types';
import PostComment from './PostComment';
import './Post.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment} from '@fortawesome/free-regular-svg-icons';

class PostCard extends React.Component {
    state = {
        likes: this.props.post.likes,
    }

    componentDidUpdate(prevProps, prevState) {
        const posts = JSON.parse(localStorage.getItem('data'));
        const newPosts = posts.map(post => {
            if(post.id === this.props.post.id) {
                post.likes = this.state.likes
            }
            return post;

        });
        localStorage.setItem('data', JSON.stringify(newPosts));

    }



  

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
               
                <PostComment key={this.props.post.id} comments={this.props.post.comments} />
                <div className='add-comment'>
                    <form onSubmit={e => {
                        e.preventDefault();
                        this.props.addComment(this.props.post.id)}}>
                        <input placeholder='add comment here' value={this.props.newComment} onChange={e => this.props.commentInput(e)} name='newComment'/>
                        <button onClick={() => this.props.addComment(this.props.post.id)}>...</button>
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