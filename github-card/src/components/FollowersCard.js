import React from 'react';

export default function FollowersCard(props) {
    return(
        <div className="card" key={props.follower.id}>
            <img width="460" height="460" src={props.follower.avatar_url} alt="profile" /> 
                <div className="card-info">
                    <p className="username">{props.follower.login}</p>
                    <p className="profile">Profile:
                        <a href={props.follower.html_url}>"https://github.com"</a>
                    </p>
            </div> 
        </div>
    );
}