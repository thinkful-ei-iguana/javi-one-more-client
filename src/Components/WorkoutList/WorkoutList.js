import React from 'react'
import WorkoutItem from '../WorkoutItem/WorkoutItem.js'
import '../WorkoutPage/workoutPage.css'
//import WorkoutInfo from '../WorkoutInfo/WorkoutInfo.js'

export default function WorkoutList(props){

    
        return (
            <div>
                <h2 className="your-workouts-title">Your Workouts</h2>
                {props.workouts.map(workout => 
                    <WorkoutItem history={props.history}
                        key={workout.id}
                        {...workout}
                    />
                    )}
                    
            </div>
        )
    }


