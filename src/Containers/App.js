import React, {useState} from 'react';

import './App.css';
import WorkoutPage from './WorkoutPage';
import CreateWorkoutPage from './CreateWorkoutPage'
import StartWorkoutPage from './StartWorkoutPage'
import WorkoutDetails from '../Components/WorkoutDetails'
import LoginPage from './LoginPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage";
import RegisterCard from "../Components/AccountAccess/RegisterCard"
import SignInCard from "../Components/AccountAccess/SignInCard"
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MyProvider from "../REACT Context/Provider"

function App () {

  return(
    <MyProvider>
        <Router>
            <TransitionGroup>
                <CSSTransition className='fade' timeout={600}>
                    <div className="App">
                        <Switch>
                            <Route path = "/" exact component={HomePage}/>
                            <Route path ="/SelectWorkout" component ={WorkoutPage} />
                            <Route path = "/CreateWorkout" component={CreateWorkoutPage}/>
                            <Route path = "/LoginOption" component={LoginPage}/>
                            <Route path ="/StartWorkout" component={StartWorkoutPage}/>
                            <Route path ="/Register" component={RegisterCard}/>
                            <Route path ="/SignIn" component={SignInCard}/>
                            <Route path ="/WorkoutDetails" component={WorkoutDetails}/>

                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>


        </Router>
    </MyProvider>


  );


}

export default App;



//can use UseState fo keep track of what state this is in.  --useState will take an initial state and takes in an array with 2 elements. Can destructure it.
// current state, function to update state!


// const [currentPage, setPage] = useState(0);
//
// function checkState(page){
//   switch(page){
//     case 0:
//       return < HomePage setCurrentPage={setPage}/>
//       break;
//
//     case 1:
//       return <WorkoutPage setCurrentPage={setPage}/>
//       break;
//
//     default:
//       return console.log(page);
//   }
// }

//understand concept of passing functions!!
// Here, we have passed a function that is then being used by the child Component, HomePage!

// return (
// <div >
//
//   <h3 onClick={e=>{
//     setPage(0)
//     }}>Home</h3>
//   {checkState(currentPage)}
//   <CountdownTimer/>
// </div>
//

//i want this to be constantly checking and updating the state tho.... how do we guarantee that? Well, wouldn't it mean it's worked so far?
//)
