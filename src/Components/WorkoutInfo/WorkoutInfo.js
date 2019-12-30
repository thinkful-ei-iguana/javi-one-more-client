import React from 'react'

export default function WorkoutInfo(props){
    console.log(props.workoutInfo)
        return (
            <div>
                <li>
                    <h2>{props.title}</h2>
                    <p>{props.workout1}</p>
                    <p>{props.lbs}lbs</p>
                    <p>set1:{props.set1}/reps</p>
                    <p>set2:{props.set2}/reps</p>
                    <p>set3:{props.set2}/reps</p>
                </li>
            </div>
        )
    }



