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

    



    render() {
        console.log(this.props,'render')
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
