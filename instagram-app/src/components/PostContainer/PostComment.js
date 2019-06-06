import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Comments = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    justify-content: flex-start;
    margin: -8px 0px -16px 10px;
    p{
        margin-left: 10px;
        font-size: 14px;
    }
`;


const PostComment = props => {
        return(
            <div >
            {props.comments.map(comment => (
                <Comments>
                    <h6>{comment.username}</h6>
                    <p>{comment.text}</p> 
                </Comments>
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