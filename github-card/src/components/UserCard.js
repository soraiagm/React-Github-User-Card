import React from 'react';

export default function UserCard(props) {
    
    return(
        <div className="card" key={props.user.id}>
            <img src={props.user.avatar_url} alt="profile" /> 
                <div className="card-info">
                    <h2 className="name">Name: {props.user.name}</h2>
                    <p className="username">{props.user.login}</p>
                    <p className="location">Location: {props.user.location}</p>
                    <p className="profile">Profile:
                        <a href={props.user.html_url}>{props.user.html_url}</a>
                    </p>
                    <p>Followers: {props.user.followers}</p>
                    <p>Following: {props.user.following}</p>
                    <p>Bio: {props.user.bio}</p> 
                </div> 
        </div>
    );
}