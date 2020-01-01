import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

class Header extends Component {
    render() {
        return (
        <div className="header-container">
            <header className="App-header">
                <Link to="/" ><span>One More</span></Link>
                
                <Link to='/workoutPage'>
                <span className="enter-app">Enter App</span>
                 </Link>
            </header>
        </div>
        )
    }
}

export default Header
