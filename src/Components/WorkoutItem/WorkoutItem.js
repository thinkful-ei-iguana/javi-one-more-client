import React from 'react'
import '../WorkoutPage/workoutPage.css' 
import '../WorkoutItem/workoutItem.css'
import { Link } from 'react-router-dom'



export default function WorkoutItem(props){

    

    
    
        return (
            <div>
                <div>
                 <Link to={`/workout/${props.id}`}> <h3 className="workout-title">{props.title}</h3></Link>
                
                <Link to={`/edit/${props.id}`}><span className="edit-button">Edit</span></Link>
                </div>
            </div>
        )
    }

