import React, { Component } from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
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
        increments: 0,
        suggestion: false
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

    incrementReps = () => {
        this.setState({
            set1: this.state.set1 + 1,
            set2: this.state.set2 + 1,
            set3: this.state.set3 + 1,
            increments: this.state.increments + 1
        })
        if(this.state.increments === 0){
            this.setState({
                suggestion: false
            })
        }
        if(this.state.increments === 1){
            this.setState({
                suggestion: true,
                increments: this.state.increments - 1
            })
        }
    }

    deIncrementReps = () => {
        this.setState({
            set1: this.state.set1 - 1,
            set2: this.state.set2 - 1,
            set3: this.state.set3 - 1
        })
        if(this.state.suggestion){
                this.setState({
                    suggestion: false
                })
            }
        
    }


    newSave = () => {

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
        <div className="workout-info-container">
            <Header />
            <li className="workoutinfo-list-item">
                <h3>{title}</h3>
            <div>
                <p>{lbs}lbs</p>
                    <button onClick={this.deIncrementWeight}>-lbs</button>
                    <button onClick={this.incrementWeight}>+lbs</button>
            </div>
                    <p>{workout1}</p>
                    <p>set1: {set1}/reps</p>
                    <p>set2: {set2}/reps</p>
                    <p>set3: {set3}/reps</p>

                    <div className="button-containr">
            <div>
                <button onClick={this.incrementReps}>One More</button>
                <button onClick={this.deIncrementReps}>One Less</button>
            </div>
                {this.state.suggestion ? <span className="weight-suggestion">increase your weight and decrease reps next time</span> : false}
            <div>
                    <button onClick={this.newSave}>save</button>

                    <button onClick={this.deleteWorkoutRequest}>Delete</button>
            </div>
            </div>
                </li>
            

            <Footer />
        </div>
        )
    }

}

export default WorkoutInfo
