import React from 'react'
import WorkoutItem from '../WorkoutItem/WorkoutItem.js'
//import WorkoutInfo from '../WorkoutInfo/WorkoutInfo.js'

export default function Workouts(props){

    console.log(props)
        return (
            <div>
                <h2>Your Workouts</h2>
                {props.workouts.map(workout => 
                    <WorkoutItem 
                        key={workout.id}
                        {...workout}
                    />
                    )}
                    
            </div>
        )
    }


