import React, { Component } from 'react'
import Header from '../Header/Header.js'
import '../WorkoutInfo/WorkoutInfo.css'
import config from '../../config';


class WorkoutInfo extends Component{


    state = {
        id: '',
        title: '',
        workout1: '',
        lbs: 0,
        set1: 0,
        set2: 0,
        set3: 0,
    }

    deleteWorkoutRequest = () => {
        const { id } = this.props.match.params
        console.log(id)
        fetch(config.API_ENDPOINT + `/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(() => {
            
           this.props.history.push('/workoutPage')
        })
        
    }

    incrementWeight = () => {
        this.setState({
            lbs: this.state.lbs + 2.5
        })
    }

    deIncrementWeight = () => {
        this.setState({
            lbs: this.state.lbs - 2.5
        })
    }
    newSave = e => {
        e.preventDefault()

        const { id } = this.props.match.params
        const { title, workout1, lbs, set1, set2, set3 } = this.state
          const newSave = {title, workout1, lbs, set1, set2, set3}
          fetch(config.API_ENDPOINT + `/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(newSave),
            headers: {
                'content-type': 'application/json',
             }
            })
            .then(() => {
                this.props.history.push('/workoutPage')
            })
    }

    
    componentDidMount() {
        const { id } = this.props.match.params
        fetch(config.API_ENDPOINT + `/${id}`, {
          method: 'GET',
          headers: {
            'content-type': `application/json`
          }
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
    
            return res.json()
          })
          .then(data => {
            // console.log(data)
            this.setState({
                id: data.id,
                title: data.title,
                workout1: data.workout1,
                lbs: data.lbs,
                set1: data.set1,
                set2: data.set2,
                set3: data.set3
            })
          })
          .catch(error => {
            console.error(error)
          })
      }

    render(){
        const { title, workout1, lbs, set1, set2, set3} = this.state
        return (
            <div>
                <Header />
                <li>
                    <h3>{title}</h3>
                    <p>{lbs}lbs</p>
                    <p>{workout1}</p>
                    <p>set1: {set1}/reps</p>
                    <p>set2: {set2}/reps</p>
                    <p>set3: {set3}/reps</p>
                </li>

                <button onClick={this.deleteWorkoutRequest}>Delete</button>

                <button onClick={this.deIncrementWeight}>-lbs</button>
                <button onClick={this.incrementWeight}>+lbs</button>
                <button type="submit" onClick={this.newSave}>save</button>
            </div>
        )
    }

}

export default WorkoutInfo
