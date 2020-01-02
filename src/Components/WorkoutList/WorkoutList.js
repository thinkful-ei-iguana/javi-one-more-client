import React, { Component } from 'react'
import WorkoutItem from '../WorkoutItem/WorkoutItem.js'
import '../WorkoutPage/workoutPage.css'

class WorkoutList extends Component{
    static defaultProps = {
        workouts: []
    }

    render(){
        return (
            <div className="your-workouts-container">
                <h2 className="your-workouts-title">Your Workouts</h2>
                {this.props.workouts.map(workout => 
                    <WorkoutItem history={this.props.history}
                        key={workout.id}
                        {...workout}
                    />
                    )}
                    
            </div>
        )
    }
}

export default WorkoutList