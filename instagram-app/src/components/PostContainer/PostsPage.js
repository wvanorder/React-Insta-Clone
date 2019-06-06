import React from 'react';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../../src/dummy-data';

import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [],
          search: '',
          newComment: '',
          error: null,
          username: localStorage.getItem('username'),
         
        };
      }
    
      
      componentDidMount() {
        if(!localStorage.getItem('data')){
          setTimeout( () =>
          this.setState({
            data: dummyData,
          }), 2000)
        } else{
          this.setState({
            data: JSON.parse(localStorage.getItem('data')),
            isLoading: false
          })
        }
        
      }
      componentDidUpdate(prevProps, prevState) {
        if(prevState.data !== this.state.data) {
          localStorage.setItem('data', JSON.stringify(this.state.data));
        }
      }
    
    
    
      searchPosts = (value = this.state.search) => {
        const newArr = this.state.data.map(post => {
          if(post.username.toLowerCase().includes(value.toLowerCase())) {
            post.match = true;
            return post;
          }
          post.match = false;
          return post;
        });
        this.setState({
          data: newArr
        });
      }
    
      searchInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    
    addComment = (id) => {
      if(this.state.newComment === '') {
          return this.setState({
              error: 'You must type something to leave a comment!',
          });
      }
      const newComment = {
          username: this.state.username,
          text: this.state.newComment,
          
      };
      const posts = JSON.parse(localStorage.getItem('data')).map(post => {
        if(post.id === id) { 
          newComment.id = post.comments.length + 1;
          post.comments = [...post.comments, newComment]
        } 
        return post;
      })
      this.setState({
          data: [...posts],
          newComment: '',
          error: null,
      })
    } 
    
    commentInput = event => {
      this.setState({
          newComment: event.target.value,
      });
    };


    logOut = () => {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      document.location.reload();
      return this.setState({
        username: '',
      });
      
    }
    
    
        
     render() {
       return (
        <div className="App">
          <SearchBar logOut={this.logOut} searchTerm={this.state.search} inputChange={this.searchInput}/>
          <PostContainer 
          posts={this.state.data.filter(post => {
            return post.username.toLowerCase().includes(this.state.search.toLowerCase())
          })} 
          searchTerm={this.state.search} 
          newComment={this.state.newComment}
          error={this.state.error}
          addComment={this.addComment}
          commentInput={this.commentInput}
          />
        
      </div>
       )
         
      } 
       
      
    };

    export default PostsPage;
