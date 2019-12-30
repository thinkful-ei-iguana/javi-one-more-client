import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AddWorkoutForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Workout</legend>

                        <div>
                        <label>Workout</label>
                        <input type="text" placeholder="back"></input>
                        </div>

                        <Link to="/workoutPage">cancel</Link>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddWorkoutForm
