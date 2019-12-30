import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'


export default function LandingPage(){
    
        return (
            <div>
    <header className="App-header">
        <Header />
        <Link to='/workoutPage'>
          Enter App
        </Link>
      </header>
      <main>
        <h2>Landing Page</h2>
        <p>lorem alskdfas fajs dfajslfj afjdajsdf asdjlfjasjdf asf
          sdjflajdfadf adjfajs fkajksjdfajdjf aksjdfjasjfajsfjakjf
          akfjakjfajfsa f dsf dsa f dsfsdajfajfjakjdfjas f sdf default
          fjaksjfa sdfa df sadjfkajdfjajf asfja f dsjfasjfjsdfjajfafj.
        </p>
      </main>
            </div>
        )
    }



