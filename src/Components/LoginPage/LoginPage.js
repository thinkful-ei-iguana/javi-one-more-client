import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm.js'

class LoginPage extends Component {
    static defaultProp = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSuccess = () => {
        console.log(this.props)
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
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
