import React, { Component } from 'react';

class Login extends Component  {
  
  state = {
    theUsername: "" ,
    thePassword: ""
  }
  
  
  
  theLogin = () => {
    localStorage.setItem("username", this.state.theUsername)

    this.setState(prevState => {
      return {
        theUsername: "" ,
        thePassword: ""
      }
    })
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render () {
    return (


      <form onSubmit={() => this.theLogin()}>
        
        
        <input
        type="text" placeholder="username"
        name="theUsername"
        value={this.state.theUsername}
        onChange={this.inputHandler}
        />
        

        <input
        type="password" placeholder="password"
        name="thePassword"
        value={this.state.thePassword}
        onChange={this.inputHandler}
        />
        

        <input type="submit" /> 
      </form>
    )
  }
}

export default Login;