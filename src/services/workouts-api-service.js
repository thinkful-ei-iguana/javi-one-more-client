import config from '../config'

const WorkoutApiService = {
    getWorkouts(){
        return fetch(`${config.API_ENDPOINT}/workouts`,{
            headers: {
                'content-type': 'application/json'
            },
        })
          .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )
    },
    getWorkout(workoutId){
        return fetch(`${config.API_ENDPOINT}/${workoutId}`, {
            headers: {
              'content-type': 'application/json'
            },
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },


}

export default WorkoutApiService