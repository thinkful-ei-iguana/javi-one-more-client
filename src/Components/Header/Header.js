import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

class Header extends Component {
    render() {
        return (
        <div className="header-container">
            <header className="App-header">
                <Link to="/" >One More</Link>
            </header>
        </div>
        )
    }
}

export default Header
