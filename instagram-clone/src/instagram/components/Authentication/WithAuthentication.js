import React, { Component } from 'react';


const withAuthenticate = PostsPage => Login => class extends Component {

  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    const theCheck = localStorage.getItem('username')

    this.setState({
      isLoggedIn: theCheck === null ? false : true
    })
  }
  
  render() {
    return (
      <>
        {this.state.isLoggedIn ? <PostsPage /> : <Login />}
      </>
    )
  }
}

export default withAuthenticate;