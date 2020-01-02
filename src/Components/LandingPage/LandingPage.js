import React from 'react'
//import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'


export default function LandingPage(){
    
        return (
            <div className="landingpage-container">
    <header className="App-header">
        <Header />
      </header>
      <main>
        <h2>About the App</h2>
        <p className="landing-page-para">
          So you're at the gym and you forget what weight you were throwing around for a specific workout. You may have also forgotten how many reps you've been doing or should do. Well, with the One More App, all you have to do is put your initial workout in and you're ready to go. While your slamming those weights around and taking those selfies. Your mind can be at easy. Implement the One More feature and it will increment your reps for your next workout and you are ready to go. 
        </p>
        <p className="landing-page-para">
          Click on "Enter App" and it'll direct you to your workout page.
          Click on "add workout" to add initial workout.
          Add your initial workout and save.
          View your workouts by clicking on the title or Edit them.
          Inside your workout you can add/subtract to your inital weight.
          While still in your workout you can add/subtract one more/less to your reps.
          After you have added an extra rep to each set. You will be suggested to increase your weight.
          You can then save and return back to your workout page.
          You can delete your workout if you wish.
        </p>
      </main>
      <Footer />
            </div>
        )
    }



