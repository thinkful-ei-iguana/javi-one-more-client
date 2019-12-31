import React, { Component } from 'react'
import Header from '../Header/Header.js'
import config from '../../config';


class WorkoutInfo extends Component{

    state = {}

    componentDidMount() {
        const { id } = this.props.match.params
        console.log(id)
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
          .then(responseData => {
            console.log(responseData)
          })
          .catch(error => {
            console.error(error)
          })
      }

    render(){
        console.log(this.props.match.params)
        return (
            <div>
                <Header />
                <li>
                    {/* <h2>{props.workoutInfo.title}</h2>
                    <p>{props.workoutInfo.workout1}</p>
                    <p>{props.workoutInfo.lbs}lbs</p>
                    <p>set1:{props.workoutInfo.set1}/reps</p>
                    <p>set2:{props.workoutInfo.set2}/reps</p>
                    <p>set3:{props.workoutInfo.set2}/reps</p> */}
                </li>
            </div>
        )
    }

}

export default WorkoutInfo
