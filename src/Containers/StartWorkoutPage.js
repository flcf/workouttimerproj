import Title from "../Components/Title";
import React, {useContext, useState} from "react";
import NavBar from "../Components/NavBar";
import {withRouter} from "react-router-dom";
import Timer from "../Components/Timer"
import {WorkoutContext} from "../REACT Context/WorkoutContext";
import BufferTime from "../Components/BufferTime";


const StartWorkoutPage =(props)=> {

    const {exerciseList, setExerciseList} = useContext(WorkoutContext);

    const [showBuffer, setShowBuffer] = useState(true);



    function handleBufferCallback(value){
        if (value === true) {

            setShowBuffer(false);


        }

    }

    function renderTimer(){

        if (showBuffer===true) {
            return <BufferTime callback={handleBufferCallback}/>
        } else {
            return <div className= 'container center' style={{position:'absolute', paddingTop: '2%', marginTop: '10%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '60px'}}>
                <Timer exerciseList={exerciseList}/>
            </div>
        }
    }





        return(


            <div>
                <NavBar/>
                <Title info={props.location.state.workoutName}/>
                {renderTimer()}


            </div>

        )





}
export default withRouter(StartWorkoutPage);

