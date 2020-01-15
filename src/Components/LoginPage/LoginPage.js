import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm.js'

class LoginPage extends Component {
    static defaultProp = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSuccess = () => {
        console.log('success')
        const { history } = this.props
        history.push('/:user_id/myWorkouts')
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
