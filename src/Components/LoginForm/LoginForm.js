import React, { Component } from 'react'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'

class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = {
        error: null
    }

handleSubmitJwtAuth = e => {
    e.preventDefault()
    const { user_name, password } = e.target


    AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value
    })
    .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
    })

}


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitJwtAuth}>
                    <div>
                        <label htmlFor='LoginForm_user_name'>User name</label>
                        <input required name='user_name' id='LoginForm_user_name'></input>
                    </div>
                    <div>
                        <label htmlFor='LoginForm_password'>Password</label>
                        <input required name='password' type='password' id='LoginForm_password'></input>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm
