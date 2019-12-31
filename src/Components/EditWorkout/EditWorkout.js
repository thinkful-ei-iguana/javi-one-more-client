import React, { Component } from 'react'
import config from '../../config'

export class EditWorkout extends Component {

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
          })
      }

      handleChangeTitle = e => {
        this.setState({ title: e.target.value })
      };
    
      handleChangeWorkout1 = e => {
        this.setState({ url: e.target.value })
      };
    
      handleChangelbs = e => {
        this.setState({ description: e.target.value })
      };
    
      handleChangeSet1 = e => {
        this.setState({ rating: e.target.value })
      };

      handleChangeSet2 = e => {
        this.setState({ rating: e.target.value })
      };

      handleChangeSet3 = e => {
        this.setState({ rating: e.target.value })
      };

handleClickCancel = () => {
    this.props.history.push('/workoutPage')
}


    render() {
        const { title, workout1, lbs, set1, set2, set3} = this.state
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Edit Workout</legend>

                        <div>

                          <div>
                            <label htmlFor="title">Title:</label>
                            <input id="title" name="title"type="text" placeholder="back" value={title}></input>
                          </div>
                          <div>
                            <label htmlFor="workout1">workout:</label>
                            <input id="workout1" name="workout1"type="text" placeholder="back extensions" 
                            value={workout1}></input>
                          </div>
                          <div>
                            <label htmlFor="lbs">lbs:</label>
                            <input id="lbs" name="lbs" type="number" placeholder="50lbs" value={lbs}></input>
                          </div>
                          <div>
                              <label htmlFor="set1">set1:</label>
                              <input id="set1" name="set1" type="number" placeholder="10reps" value={set1}></input>
                          </div>
                          <div>
                              <label htmlFor="set2">set2:</label>
                              <input id="set2" name="set2" type="number" placeholder="10reps" value={set2}></input>
                          </div>
                          <div>
                              <label htmlFor="set3">set3:</label>
                              <input id="set3" name="set3" type="number" placeholder="10reps" value={set3}></input>
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

export default EditWorkout
