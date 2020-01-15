import React, { Component } from 'react'
import UserApiService from '../../Services/user-api-service'

class UserWorkoutPage extends Component {
    static defaultProps = {
        match: { params: {} }
      };

      state = {
          userWorkouts: []
      }
      
    
      componentDidMount() {
        const { user_Id } = this.props.match.params;
        console.log( { user_Id })
        UserApiService.getUsers(user_Id)
          .then(res => console.log("user workouts",res))
          
      }
      render() {
       
        return (
          <div>
            <h4>user workouts</h4>
            <ul>
              {/* {users.map(user => (
                <li key={user.id} className="one-more-user" user={user.first_name}>
                  {user.user_name} ({user.first_name})
                </li>
              ))} */}
            </ul>
          </div>
        );
    }
}

export default UserWorkoutPage
