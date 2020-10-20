import React, { useState, useMemo} from 'react';

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
import {UserContext} from "../REACT Context/UserContext";
import {WorkoutContext} from "../REACT Context/WorkoutContext";

function App () {

    const [userid, setUserid] = useState(null);
    const providerValue = useMemo(()=> ({userid, setUserid}), [userid, setUserid]);

    const [exerciseList, setExerciseList] = useState([]);
    const wProvider = useMemo(()=>({exerciseList, setExerciseList}), [exerciseList, setExerciseList]);


    //test Add new Comment




  return(
    <UserContext.Provider value={providerValue}>

    <WorkoutContext.Provider value={wProvider}>
        <Router>
            <TransitionGroup>
                <CSSTransition className='fade' timeout={600}>
                    <div className="App">
                        <Switch>
                            <Route path ="/" exact component={SignInCard}/>
                            <Route path = "/Home" exact component={HomePage}/>
                            <Route path ="/SelectWorkout/" component ={WorkoutPage} />
                            <Route path = "/CreateWorkout/" component={CreateWorkoutPage}/>
                            <Route path = "/LoginOption" component={LoginPage}/>
                            <Route path ="/StartWorkout/" component={StartWorkoutPage}/>
                            <Route path ="/Register" component={RegisterCard}/>
                            <Route path ="/WorkoutDetails" component={WorkoutDetails}/>

                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>


        </Router>
    </WorkoutContext.Provider>
    </UserContext.Provider>

  );


}

export default App;



