import React from 'react';


const withAuthenticate = Page1 => Page2 => 
  class extends React.Component {
    state={
      loggedIn: false
    }

    componentDidMount() {
      if(localStorage.getItem('username')){
        this.setState({
          loggedIn: true
        });
      } else{
        this.setState({
          loggedIn: false
        })
      }
    }
    render() {
      if(this.state.loggedIn === true){
       return <Page1 />
      } else{
        return <Page2 />
      }
    }
  };

  export default withAuthenticate;