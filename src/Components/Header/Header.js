import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import SignUp from '../SignUp/SignUp'

import '../Header/Header.css'


class Header extends Component {
    render() {
        return (
        <div className="header-container">
            <header className="App-header">
                <Link to="/" ><span>One More</span></Link>
                <FontAwesomeIcon icon={faHeartbeat} />
                <Link to='/workoutPage'>
                <span className="enter-app">Enter App</span>
                 </Link>
                 <div>
                     <SignUp />
                 </div>
            </header>
        </div>
        )
    }
}

export default Header
