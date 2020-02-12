import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class User extends React.Component {
  state = {
    user: {},
    followers:[]
  };


  componentDidMount(){
    axios 
        .get('https://api.github.com/users/jvillalp')
        .then(res =>{
          // console.log(res.data)
          this.setState({
            user: res.data
          });
        })
        .catch(err =>console.log(err));

    axios 
        .get('https://api.github.com/users/jvillalp/followers')
        .then(res =>{
          console.log(res.data)
          this.setState({
            followers: res.data
          })
        })
        .catch(err =>console.log(err));
  }
render() {
 
  return (
    
    <div>
      
      <div>
     <UserCard
      name= {this.state.user.login}
      image= {this.state.user.avatar_url}
      location={this.state.user.location}
      followers={this.state.user.followers}
      following={this.state.user.followering}
      website= {this.state.user.html_url}
      />
  
      </div>
    
      <div>
      <h1>Followers:</h1>
        {this.state.followers.map(follower=>(
          <UserCard key={follower.id} name={follower.login} image={follower.avatar_url} website={follower.html_url}/>
        ))}
      </div>
    
      </div>
    
  )
}
}
export default User;