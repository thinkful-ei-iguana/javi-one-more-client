import React, { Component } from 'react'
import '../AddWorkout/addworkout.css'
import config from '../../config'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

export class AddWorkoutForm extends Component {

handleSubmit = e => {
    
    e.preventDefault()
   
    const {title,lbs,workout1,set1,set2,set3} = e.target
    const newWorkout = {
        title: title.value,
        workout1: workout1.value,
        lbs: Number(lbs.value),
        set1: Number(set1.value),
        set2: Number(set2.value),
        set3: Number(set3.value),
    }
    fetch(config.API_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(newWorkout),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(data => {
        this.props.history.push('/workoutPage')
    })

 

}

handleClickCancel = () => {
    this.props.history.push('/workoutPage')
}



    render() {
        return (
            <div className="addworkout-container">
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="addworkout-fieldset">
                        <legend>Workout</legend>

                        <div className="form-content">

                          <div className="form-input">
                            <label htmlFor="title">Title:</label>
                            <input id="title" name="title"type="text" placeholder="back" required></input>
                          </div>
                          <div className="form-input">
                            <label htmlFor="workout1">workout:</label>
                            <input id="workout1" name="workout1"type="text" placeholder="back extensions" required></input>
                          </div>
                          <div className="form-input">
                            <label htmlFor="lbs">lbs:</label>
                            <input id="lbs" name="lbs" type="number" placeholder="50lbs"></input>
                          </div>
                          <div className="form-input">
                              <label htmlFor="set1">set1:</label>
                              <input id="set1" name="set1" type="number" placeholder="10reps"></input>
                          </div>
                          <div className="form-input">
                              <label htmlFor="set2">set2:</label>
                              <input id="set2" name="set2" type="number" placeholder="10reps"></input>
                          </div>
                          <div className="form-input">
                              <label htmlFor="set3">set3:</label>
                              <input id="set3" name="set3" type="number" placeholder="10reps"></input>
                          </div>

                          <div className="button-container">
                        <button className="form-buttons" type="button" onClick={this.handleClickCancel}>Cancel</button>
                        <button className="form-buttons" type="submit">Save</button>
                        </div>

                        </div>
                       

                    </fieldset>
                </form>
                <Footer />
            </div>
        )
    }
}

export default AddWorkoutForm
