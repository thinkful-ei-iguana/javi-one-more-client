import React, { Component } from 'react'
import PropTypes from 'prop-types';
import config from '../../config'
import '../EditWorkout/EditWorkout.css'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

class EditWorkout extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

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
        this.setState({ workout1: e.target.value })
      };
    
      handleChangelbs = e => {
        this.setState({ lbs: e.target.value })
      };
    
      handleChangeSet1 = e => {
        this.setState({ set1: e.target.value })
      };

      handleChangeSet2 = e => {
        this.setState({ set2: e.target.value })
      };

      handleChangeSet3 = e => {
        this.setState({ set3: e.target.value })
      };

      handleClickCancel = () => {
    this.props.history.push('/workoutPage')
      };

      handleSubmit = e => {
          e.preventDefault()

          const { id } = this.props.match.params
          const { title, workout1, lbs, set1, set2, set3 } = this.state
          const newWorkout = {title, workout1, lbs, set1, set2, set3}

          fetch(config.API_ENDPOINT + `/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(newWorkout),
            headers: {
                'content-type': 'application/json',
             }
            })
            .then(() => {
                this.props.history.push('/workoutPage')
            })
            .catch(error => {
                console.log(error)
            })
      }


    render() {
        const { title, workout1, lbs, set1, set2, set3} = this.state
        return (
            <div>
              <Header />
                <form className="edit-form"  onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Edit Workout</legend>

                        <div>

                          <div>
                            <label htmlFor="title">Title:</label>
                            <input  id="title" name="title"type="text" placeholder="back" value={title} onChange={this.handleChangeTitle}></input>
                          </div>
                          <div>
                            <label htmlFor="workout1">workout:</label>
                            <input  id="workout1" name="workout1"type="text" placeholder="back extensions" 
                            value={workout1}
                            onChange={this.handleChangeWorkout1}></input>
                          </div>
                          <div>
                            <label htmlFor="lbs">lbs:</label>
                            <input id="lbs" name="lbs" type="number" placeholder="50lbs" value={lbs} onChange={this.handleChangelbs}></input>
                          </div>
                          <div>
                              <label htmlFor="set1">set1:</label>
                              <input id="set1" name="set1" type="number" placeholder="10reps" value={set1} onChange={this.handleChangeSet1}></input>
                          </div>
                          <div>
                              <label htmlFor="set2">set2:</label>
                              <input id="set2" name="set2" type="number" placeholder="10reps" value={set2} onChange={this.handleChangeSet2}></input>
                          </div>
                          <div>
                              <label htmlFor="set3">set3:</label>
                              <input id="set3" name="set3" type="number" placeholder="10reps" value={set3} onChange={this.handleChangeSet3}></input>
                          </div>


                        </div>
                        <div>
                        <button type="button" onClick={this.handleClickCancel}>Cancel</button>
                        <button type="submit">Save</button>
                        </div>

                    </fieldset>
                </form>
                <Footer />
            </div>
        )
    }
}

export default EditWorkout
