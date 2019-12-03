import React from 'react';
import axios from 'axios';
import UserCard from './UserCard.js';

class GithubData extends React.Component {
    state = {
        user: {}
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
    }

    render(){
        return(
            <div>
                <UserCard user={this.state.user}/>
            </div>
        )
    }
}

export default GithubData;