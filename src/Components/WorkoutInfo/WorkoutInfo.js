import React, { Component } from 'react'
import Header from '../Header/Header.js'
import config from '../../config';


class WorkoutInfo extends Component{

    getWorkout = (workout) => {
        console.log(workout)
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
          .then(responseData => {
            // console.log(responseData)
            this.getWorkout(responseData)
          })
          .catch(error => {
            console.error(error)
          })
      }

    render(){
        
        return (
            <div>
                <Header />
                <li>
                    {/* getWorkout */}
                </li>
            </div>
        )
    }

}

export default WorkoutInfo
