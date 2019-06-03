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
      data: dummyData,
    };
  }

 render() {
   return (
    <div className="App">
    <Button color="primary">primary</Button>{' '}
    <SearchBar />
    <PostContainer posts={this.state.data} />
  </div>
   )
     
  } 
   
  
}

export default App;
