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
import MyProvider from "../REACT Context/Provider"
import {UserContext} from "../REACT Context/UserContext";

function App () {

    const [userid, setUserid] = useState(null);

    const providerValue = useMemo(()=> ({userid, setUserid}), [userid, setUserid]);







  return(
    <UserContext.Provider value={providerValue}>
    <MyProvider>
        <Router>
            <TransitionGroup>
                <CSSTransition className='fade' timeout={600}>
                    <div className="App">
                        <Switch>
                            <Route path = "/" exact component={HomePage}/>
                            <Route path ="/SelectWorkout/" component ={WorkoutPage} />
                            <Route path = "/CreateWorkout/" component={CreateWorkoutPage}/>
                            <Route path = "/LoginOption" component={LoginPage}/>
                            <Route path ="/StartWorkout/" component={StartWorkoutPage}/>
                            <Route path ="/Register" component={RegisterCard}/>
                            <Route path ="/SignIn" component={SignInCard}/>
                            <Route path ="/WorkoutDetails" component={WorkoutDetails}/>

                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>


        </Router>
    </MyProvider>
    </UserContext.Provider>

  );


}

export default App;



