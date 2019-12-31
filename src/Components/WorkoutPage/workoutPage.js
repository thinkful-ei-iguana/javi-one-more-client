import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'
//import AddWorkoutForm from '../AddWorkoutForm/AddWorkoutForm.js'
import WorkoutList from '../WorkoutList/WorkoutList.js'
//import WorkoutInfo from '../WorkoutInfo/WorkoutInfo.js'
import config from '../../config';


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
            <div>
                <Header />
                <main>
                <Link to="/AddWorkoutForm">Add Workout</Link>
                <WorkoutList workouts={this.state.workouts}/>
                </main>
            </div>
        )
    }
}

export default WorkoutPage
