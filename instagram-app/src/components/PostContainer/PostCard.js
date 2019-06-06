import React from 'react';
import PropTypes from 'prop-types';
import PostComment from './PostComment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment} from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const PostCards = styled.div`
    width: 642px;
    max-width: 90%;
    height: auto;
    border: 4px solid white;
    margin: 0 auto;
    margin-top: 5px;
    padding: 5px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    
    .picture{
        width: 634px;
        max-width: 99.9%;
        margin-top: 10px;
        @media screen and (max-width: 650px){
        height: 550px;
        }
        @media screen and (max-width: 550px){
            height: 480px;
            }
            @media screen and (max-width: 550px){
                height: 430px;
                }
    }
    .user{
        width: 50px;
        height: 50px;
        border-radius: 100px;
    }
    
`;

const LikeMeter = styled(PostCards)`
    font-size: 24px;
    width: 630px;
`;

const UserInfo = styled(PostCards)`
    display: flex;
    flex-flow: row nowrap;
    width: 630px;
    h2{
        margin-left: 20px;
    }
`;

const PostPicture = styled(PostCards)`
    width: 634px;
    margin-top: 10px;
    margin-left: -5px
`;

const AddComment = styled.div`
    width: 95%;
    border-top: 1px solid lightgray;
    padding-top: 8px;

    form{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        input{
            width: 70%;
            border: none;
            background-color: transparent;
        }

        button{
            width: 20%;
            background-color: transparent;
            border: none;
            color: darkgray;
            font-size: 32px;
            text-align: right;
        }
`;

const LikeComment = styled.div`
    margin-top: 4px;
`




//Actual class
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
            <PostCards>
                <UserInfo>
                    <img className='user' src={this.props.post.thumbnailUrl} />
                    <h2>{this.props.post.username}</h2>
                </UserInfo>
                <img className='picture' src ={this.props.post.imageUrl} />
                <LikeComment>
                    <FontAwesomeIcon className='icon' icon={faHeart} onClick={this.addLike}/>
                    <FontAwesomeIcon className='icon' icon={faComment} />
                </LikeComment>
        
                <LikeMeter>{this.state.likes} Likes</LikeMeter>
               
                <PostComment key={this.props.post.id} comments={this.props.post.comments} />
                <AddComment>
                    <form onSubmit={e => {
                        e.preventDefault();
                        this.props.addComment(this.props.post.id)}}>
                        <input placeholder='add comment here' value={this.props.newComment} onChange={e => this.props.commentInput(e)} name='newComment'/>
                        <button onClick={() => this.props.addComment(this.props.post.id)}>...</button>
                    </form>
                </AddComment>
                
                
            </PostCards>
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