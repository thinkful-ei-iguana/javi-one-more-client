import React, { Component } from 'react'

export class AddWorkoutForm extends Component {

handleSubmit = e => {
    e.preventDefault()
   

 

}

handleClickCancel = () => {
    this.props.history.push('/workoutPage')
}



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Workout</legend>

                        <div>

                          <div>
                            <label htmlFor="title">Title:</label>
                            <input id="title" name="title"type="text" placeholder="back"></input>
                          </div>
                          <div>
                            <label htmlFor="workout">workout:</label>
                            <input id="workout" name="workout1"type="text" placeholder="back extensions"></input>
                          </div>
                          <div>
                            <label htmlFor="lbs">lbs:</label>
                            <input id="lbs" name="lbs" type="number" placeholder="50lbs"></input>
                          </div>
                          <div>
                              <label htmlFor="set1">set1:</label>
                              <input id="set1" name="set1" type="number" placeholder="10reps"></input>
                          </div>
                          <div>
                              <label htmlFor="set1">set2:</label>
                              <input id="set1" name="set1" type="number" placeholder="10reps"></input>
                          </div>
                          <div>
                              <label htmlFor="set1">set3:</label>
                              <input id="set1" name="set1" type="number" placeholder="10reps"></input>
                          </div>


                        </div>
                        <div>
                        <button type="button" onClick={this.handleClickCancel}>Cancel</button>
                        <button type="submit">Save</button>
                        </div>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddWorkoutForm
