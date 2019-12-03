import React from 'react';

export default function FollowersCard(props) {
    return(
        <div className="card" key={props.follower.id}>
            <img src={props.follower.avatar_url} alt="profile" /> 
                <div className="card-info">
                    <p className="username">{props.follower.login}</p>
                    <p>Followers: {props.follower.followers}</p>
                    <p>Following: {props.follower.following}</p>
            </div> 
        </div>
    );
}