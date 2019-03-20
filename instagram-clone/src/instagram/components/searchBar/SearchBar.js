
import React from 'react';

import { Instagram } from 'react-feather';
import { Compass } from 'react-feather';
import { Heart } from 'react-feather';
import { User } from 'react-feather';


import './SearchBar.css';
const SearchBar = props => {
    return (

      <div className="search-bar-wrapper">

       

    
        <div className="social instaClone">

        <Instagram className="instagram" />
        
        </div>

        <p className="instaText"> InstaClone </p>
        
        <div>

         

        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
        </div>
        <div className="social-wrapper">
          <div className="social">
            <Compass />
          </div>
          <div className="social">
            <Heart />
          </div>
          <div className="social">
            <User />
          </div>
        </div>
        
      </div>
   
    );
  };
  
  export default SearchBar;