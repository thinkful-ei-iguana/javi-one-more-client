import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'
import '../WorkoutPage/workoutPage.css'
import WorkoutList from '../WorkoutList/WorkoutList.js'
import config from '../../config';
import Footer from '../Footer/Footer.js'


class WorkoutPage extends Component {
  state = {
      workouts: [],
      error: null,
  }

  setWorkouts = workouts => {
      this.setState({
          workouts,
          error: null,
      })
    //   console.log(this.state.workouts)
  }



componentDidMount(){
    fetch(config.API_ENDPOINT, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => {
        if(!res.ok){
            throw new Error(res.status)
        }
        return res.json()
    })
    .then(this.setWorkouts)
    .catch(error => this.setState({error}))
}

renderWorkoutInfo(){
    
}


    render() {
        
        return (
            <div className="workoutPage-container">
                <Header />
                <main id="background-color">
                <Link to="/addWorkout"><span className="add-workout">Add Workout</span></Link>
                <WorkoutList history={this.props} workouts={this.state.workouts}/>
                </main>
                <Footer />
            </div>
        )
    }
}

export default WorkoutPage
