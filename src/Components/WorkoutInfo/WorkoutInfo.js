import React, { Component } from 'react'
import Header from '../Header/Header.js'
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
            this.setState({error})
          })
      }

    render(){
        
        return (
            <div>
                <Header />
                <li>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.lbs}lbs</p>
                    <p>{this.state.workout1}</p>
                    <p>set1: {this.state.set1}/reps</p>
                    <p>set2: {this.state.set2}/reps</p>
                    <p>set3: {this.state.set3}/reps</p>
                </li>
            </div>
        )
    }

}

export default WorkoutInfo
