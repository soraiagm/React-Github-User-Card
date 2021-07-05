import React from 'react';
import axios from 'axios';
import UserCard from './UserCard.js';
import FollowersCard from './FollowersCard.js';

class GithubData extends React.Component {
    state = {
        user: {},
        followers: [],
        // followersArray: ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']
    };

    componentDidMount(){
        axios
            .get('https://api.github.com/users/soraiagm')
            .then(response => {
                console.log(response);
                this.setState({ user: response.data});
            })
            .catch(error => {
                console.log(error);
            })
        
        axios
            .get('https://api.github.com/users/soraiagm/followers')
            .then(response => {
                console.log(response);
                this.setState({ followers: response.data});
            })
            .catch(error => {
                console.log(error);
            })


        // this.state.followersArray.forEach(follower => {
        //     axios
        //         .get(`https://api.github.com/users/${follower}`)
        //         .then(response => {
        //             console.log(response);
        //             this.setState({ followersArray: response.data })
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // })
    }

    render(){
        return(
            <div className="github-data">
                <UserCard user={this.state.user} />
                {this.state.followers.map(follower => (
                <FollowersCard key={follower.id} follower={follower}/>))}
            </div>
        )
    }
}

export default GithubData;