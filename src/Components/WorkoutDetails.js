import React, {useContext, useEffect, useState} from "react";
import NavButtons from "./NavButtons";
import InfoBox from "./InfoBox";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom"
import Title from "./Title";
import {WorkoutContext} from "../REACT Context/WorkoutContext";

const WorkoutDetails = (props)=>{


    const {exerciseList, setExerciseList} = useContext(WorkoutContext);
    const [workoutName, setWorkoutName] = useState(null)


    function handleBack(){
        setExerciseList([]);
    }


    function renderData(){
        if(exerciseList.length > 0){
            return <div>

                <InfoBox/>
                <Link to={{
                    pathname: '/StartWorkout',
                    state: {
                        workoutName: workoutName
                    }
                }}>

                    <button className='grow white b pv2-l ph4 bn-ns br3 pa2  bg-green hover-bg-dark-green bn-l br5'>Start</button>
                </Link>
            </div>
        }


    }

    useEffect(()=>{

        if(exerciseList.length === 0) {
            fetch('https://frozen-ravine-88940.herokuapp.com/WorkoutDetails', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    workoutid: props.location.state.fromSelect.workoutID

                })
            }).then(response => response.json()).then(data => {


                setExerciseList(data);
                setWorkoutName(data[0].workoutname)


            })
        }

    },[exerciseList])

    return(
        <div>
            <Link to={'/SelectWorkout'} onClick={() => handleBack()}  style={{textDecoration:'none'}}>
                <NavButtons info={"Back"} />
            </Link>

            <Title info = {workoutName}/>
            {renderData()}


        </div>



    )



}

export default withRouter(WorkoutDetails);

//QUestion:
/*PROBLEM:
passed object is local variable so return can't access it
if put passobject in render function, for some reason componentDidMount will no longer run.
Probably because I don't really understand how the react structure works..
//double curly brackets are used to express key: value pairs!!
*

//DONT REALLY KNOW WHY COMPONENTDIDMOUNT WORKED WHEN WASNT UNDER RENDER AND WHY I DIDNT NEED IT IN THE END EVEN THO I NEEDED IT BEFORE...?

child functions can use variables of parent functions but not other way around (think this was in ES6...)
* */