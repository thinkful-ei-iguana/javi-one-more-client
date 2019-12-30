import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import '../../Components/App/App.css';
import WorkoutPage from '../WorkoutPage/workoutPage.js'

class App extends Component {



  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" >One More</Link>
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

    <Route 
      exact
      path={'/'}
    />

    <Route 
      path={'/workoutPage'}
      component={WorkoutPage}
    />

    </div>
  );
}
}

export default App;
