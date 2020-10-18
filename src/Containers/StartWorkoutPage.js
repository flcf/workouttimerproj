import Title from "../Components/Title";
import React, {useContext} from "react";
import NavBar from "../Components/NavBar";
import {withRouter} from "react-router-dom";
import Timer from "../Components/Timer"
import {WorkoutContext} from "../REACT Context/WorkoutContext";


const StartWorkoutPage =(props)=> {

    const {exerciseList, setExerciseList} = useContext(WorkoutContext);





        return(


            <div>
                <NavBar/>
                <Title info={props.location.state.workoutName}/>
                <div className= 'container center' style={{position:'absolute', paddingTop: '2%', marginTop: '10%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '60px'}}>
                    <Timer exerciseList={exerciseList}/>
                </div>
            </div>

        )





}
export default withRouter(StartWorkoutPage);

