import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  constructor(){
    super();
  }

  

    
 render() {
    return (
    <div>
      <ComponentFromWithAuthenticate />
    </div>
    
    
    )
    };
   
  
}

export default App;
