import React from 'react';

export default function UserData(props) {
    return(
        <div className="card" key={props.user.id}>
            <img src={props.user.avatar_url} alt="profile" /> 
            <div className="card-info">
               <h3 className="name">{props.user.name}</h3>
               <p className="username">{props.user.login}</p>
               <p className="location">{props.user.location}</p>
               <p className="profile">Profile:
                    <a href={props.user.html_url}>"https://github.com/soraiagm"</a>
               </p>
               <p>Followers: {props.user.followers}</p>
               <p>Following: {props.user.following}</p>
               <p>Bio: {props.user.bio}</p> 
            </div> 
        </div>
    )
}