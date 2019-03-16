import React, { Component } from 'react';

import { Instagram } from 'react-feather';
import { Compass } from 'react-feather';
import { Heart } from 'react-feather';
import { User } from 'react-feather';

import './searchBar.css';


class SearchBar extends Component {
  render() {
    return (
    <div className="border">
      
      <div className="leftSide">
        <Instagram className="instagramPic"/>

        <p className="instagramString"> <strong> Instagram </strong> </p>

      </div>

      <p className="searchBar"> search </p>


      <div className="rightSide">
        <Compass className="clickPic" />
        <Heart className="clickPic" />
        <User className="clickPic" />
      </div>
    </div>
    );
  }
}

export default SearchBar;