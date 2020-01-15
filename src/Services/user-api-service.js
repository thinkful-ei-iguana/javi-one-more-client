import config from "../config"

const UserApiService = {

    getUsers(userID) {
        return fetch(`${config.API_ENDPOINT}/workouts/${userID}/myWorkouts`, {
          headers: {
            'content-type': 'application/json'
          }
        }).then(res =>
          !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
      },


}

export default UserApiService