import React from 'react';

export default function FollowersCard(props) {
    return(
        <div className="card" key={props.follower.id}>
            <img width="460" height="460" src={props.follower.avatar_url} alt="profile" /> 
                <div className="card-info">
                    <h2 className="username">Username: {props.follower.login}</h2>
                    <p className="profile">Profile:
                        <a href= {props.follower.html_url}> {props.follower.html_url}</a>
                    </p>
            </div> 
        </div>
    );
}