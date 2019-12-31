import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../../Components/App/App.css'
import '../LandingPage/LandingPage.css'
import LandingPage from '../LandingPage/LandingPage.js'
import WorkoutPage from '../WorkoutPage/WorkoutPage.js'
import AddWorkout from '../AddWorkout/AddWorkout.js'
import EditWorkout from '../EditWorkout/EditWorkout.js'
import WorkoutInfo from '../WorkoutInfo/WorkoutInfo.js'

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
      path={'/addWorkout'}
      component={AddWorkout}
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
