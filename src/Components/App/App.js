import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../../Components/App/App.css'
import '../LandingPage/LandingPage.css'

import LandingPage from '../LandingPage/LandingPage.js'
import LoginPage from '../LoginPage/LoginPage.js'
import WorkoutPage from '../WorkoutPage/WorkoutPage.js'
import AddWorkout from '../AddWorkout/AddWorkout.js'
import EditWorkout from '../EditWorkout/EditWorkout.js'
import WorkoutInfo from '../WorkoutInfo/WorkoutInfo.js'
import UserWorkoutPage from '../UsersWorkoutPage/UserWorkoutPage.js'

class App extends Component {



  render(){
  return (
    <div className="App">

    <Route 
      exact
      path={'/'}
      component={LandingPage}
    />

    <Route 
      path={'/workoutPage'}
      component={WorkoutPage}
    />

    <Route 
      path={'/login'}
      component={LoginPage}
    />

    <Route
      path={'/addWorkout'}
      component={AddWorkout}
    />

    <Route 
      path={'/:user_id/myWorkouts'}
      component={UserWorkoutPage}
    />

    <Route 
      path={'/workout/:id'}
      component={WorkoutInfo}
    />

    <Route 
      path={'/edit/:id'}
      component={EditWorkout}
    />

    </div>
  );
}
}

export default App;
