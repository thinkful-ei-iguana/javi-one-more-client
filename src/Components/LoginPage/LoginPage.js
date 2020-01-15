import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm.js'
import UserApiService from '../../Services/user-api-service.js'

class LoginPage extends Component {
    static defaultProp = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSuccess = () => {
            const { user_Id } = this.props.match.params;
            console.log( { user_Id })
            UserApiService.getUsers(user_Id)
              .then(res => console.log("user workouts",res))
            
        console.log('success')
        const { history } = this.props
        history.push(`/${user_Id}/myWorkouts`)
    }
    


    render() {
        return (
            <div>
                <LoginForm 
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </div>
        )
    }
}

export default LoginPage
