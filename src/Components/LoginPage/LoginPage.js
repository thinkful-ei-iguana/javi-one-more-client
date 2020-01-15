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
        history.push('/workoutPage')
    }



    render() {
        return (
            <div>
                <LoginForm 
                    history={this.props}
                />
            </div>
        )
    }
}

export default LoginPage
