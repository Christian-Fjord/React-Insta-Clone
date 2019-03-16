import React, { Component } from 'react';
import './App.css';

import dummyData from './dummyData.js';


import SearchBar from './instagram/components/searchBar/SearchBar.js';

import PostContainer from './instagram/components/postContainer/PostContainer.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.setState({ users: dummyData })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer users = {this.state.users}/>
      </div>
    );
  }
}

export default App;