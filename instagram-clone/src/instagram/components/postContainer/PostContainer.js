import React from 'react';
import './postContainer.css';





const PostContainer = props => {
    // console.log(props);
    return (
        <div>
            {props.users.map(user => {
                return (
                    <div>
                        <div class='post-header'>
                            <img class='user-logo' src={user.thumbnailUrl}></img>
                            <p class='username'>{user.username}</p>
                        </div>
                        <img class='main-image' src={user.imageUrl}></img>
                    </div>
                );
            })}
        </div>
    );
};



export default PostContainer;