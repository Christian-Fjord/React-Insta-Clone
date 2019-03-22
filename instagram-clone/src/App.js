import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummyData';
// import PostContainer from './instagram/components/PostContainer/PostContainer';
// import SearchBar from './instagram/components/SearchBar/SearchBar';
import PostsPage from './instagram/components/PostContainer/PostsPage';

import withAuthentication from './instagram/components/Authentication/WithAuthentication';

import Login from './instagram/components/Login/Login'


const ComponentFromWithAuthentication = withAuthentication(PostsPage);

const RenderPage = ComponentFromWithAuthentication(Login);


class App extends Component {
  constructor() {
    super();
    this.state = {
      // posts: [],
      // filteredPosts: []
    };
  }
  /** componentDidMount () {
    this.setState({posts: dummyData});
  }
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      } else {
        return null;
      }
    }); 
    this.setState({ filteredPosts: posts });
  };
  */

  render() {
    return (
      <div className="App">
        {/* <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
       */}
        <RenderPage />

        
      </div>
    );
  }
}

export default App;