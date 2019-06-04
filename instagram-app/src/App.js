import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Button } from 'reactstrap';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
    };
  }

  componentDidMount() {
    setTimeout( () =>
      this.setState({
        data: dummyData
      }), 2000)
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


    
 render() {
   return (
    <div className="App">
    <SearchBar searchTerm={this.state.search} inputChange={this.searchInput}/>
    <PostContainer posts={this.state.data.filter(post => {
      return post.username.toLowerCase().includes(this.state.search.toLowerCase())
    })} searchTerm={this.state.search} />
  </div>
   )
     
  } 
   
  
}

export default App;
