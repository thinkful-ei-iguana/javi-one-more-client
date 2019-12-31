import React from 'react'
import '../WorkoutItem/workoutItem.css'
import { Link } from 'react-router-dom'

export default function WorkoutItem(props){
    
        return (
            <div>
                <li >
                 <Link to={`/workout/${props.id}`}> <h3>{props.title}</h3> </Link>
                </li>
                <span><Link to={`/edit/${props.id}`}>Edit</Link></span>
            </div>
        )
    }

