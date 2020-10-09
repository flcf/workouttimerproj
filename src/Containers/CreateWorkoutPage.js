import Title from "../Components/Title";
import React, { useState, useEffect, useRef } from 'react';
import NavButtons from "../Components/NavButtons";
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar";
import '../Components/OptionCard.css'
import CreateWorkoutBox from "../Components/CreateWorkoutBox";
import "./CreateWorkout.css"


const CreateWorkoutPage=()=>{
    const[isWorkoutEntered, setEntered] = useState(false);
    const[isSaved, setSaved] = useState(false);
    const[workoutName, setWorkoutName] = useState("");
    const [exerciseInfo, setExerciseInfo] = useState( { exerciseName: '',
                                                                    duration: null,
                                                                    restInterval: null });
    const [exerciseList, setExerciseList] = useState([] );

    const eNameRef = useRef(null);
    const durationRef = useRef(null);
    const restRef = useRef(null);



    function handleCreateClick(e) {
        setEntered(true);
        //populate setWorkoutName with workoutName we type in!
        e.preventDefault();


    }

    function handleAddClick(e){
        e.preventDefault();
        setExerciseInfo({
            exerciseName: eNameRef.current.value,
            duration: durationRef.current.value,
            restInterval: restRef.current.value
        });

        document.getElementById('addWorkout').reset();

        setExerciseInfo((state) => {
            console.log("Current Set State values are " + state.exerciseName);

            return state;
        });



    }

    //decided to do useEffect here when setExerciseList updates because it would re-render EVERY SINGLE time any of the states changed.
    //under this, it will limit when this happens..., allowing for a case where it setExercistList won't append the initial "null" state of exerciseInfo...

    useEffect(()=>{

        if (exerciseInfo.restInterval != null) {
            setExerciseList([...exerciseList, exerciseInfo]);


        }







    }, [exerciseInfo] );

    function renderExerciseList (){

        if( exerciseList.length > 0) {
            return <div>
                <CreateWorkoutBox exerciseList={exerciseList}/>
                {renderPreview()}
                </div>



        }
    }

//conditional rendering of the save/start button
    function renderPreview(){ //need to add a condition so the save button doesn't show up until WorkoutBox is populated...for future design!
        if (isSaved === false ) {
            return <div>
                <button onClick={handleSaveClick} className='grow white b pv2-l ph4 bn-ns  bg-red hover-bg-dark-red bn-l br3 pa2 ' >Save</button>


            </div>
        } else {
            return <div>
                <p className='b'>Saved</p>

                <Link to={"/StartWorkout"}>
                    <button className='grow white b pv2-l ph4 bn-ns br3 pa2  bg-green hover-bg-dark-green bn-l br5'>Start</button>
                </Link>
            </div>
        }
    }


    function handleSaveClick(){
        setSaved(true);
    }






//conditional rendering of the workoutName input and THEN the exercise List inputs

    function renderData() {
        if (isWorkoutEntered === false) {
            return <div>
                            <label className="db fw6 lh-copy f6 b" htmlFor="workoutName">Name your Workout</label>
                        <form id="CreateWorkout" onSubmit={handleCreateClick}>
                                <input className="pa3 input-reset ba br3 bg-transparent ma3 hover-white center w-25"
                                       onChange={e=> setWorkoutName(e.target.value)} type="text" value={workoutName} name="workoutName" id="workoutName"/>

                        </form>
                        <div>
                            <button type="submit" value="Submit" form="CreateWorkout"  className='grow white b pv2-l ph4 bn-ns  bg-blue hover-bg-dark-blue bn-l br3 pa3 ' >Create</button>

                        </div>


                  </div>
        }
        else {
            return <div>

                <form id="addWorkout" onSubmit={(e)=>{handleAddClick(e)}} >

                    <input type="text" placeholder="Exercise Name" className="pa3 input-reset ba br3 bg-transparent ma3 hover-white "
                            name="exerciseName" id="exerciseName" ref={eNameRef} />

                    <input type="number" placeholder="Duration" className="pa3 input-reset ba br3 bg-transparent ma3 hover-white"
                            name="duration" id="duration" ref={durationRef} />
                    <input type="number" placeholder="Rest for" className="pa3 input-reset ba br3 bg-transparent ma3 hover-white"
                           ref={restRef}    />
                    <button form="addWorkout"  className=' white b bn-ns br3  bg-light-purple hover-bg-dark-blue addButton' >Add</button>

                </form>

                {console.log("Current Value in ExerciseInfo " + exerciseInfo.exerciseName)}
                {renderExerciseList()}


            </div>



        }


    }




    return(

        <div>
            <NavBar/>
            <Title info={"Create Workout"}/>
            {renderData()}


        </div>

    )


} ;
export default CreateWorkoutPage;

//NOTES
//TODO: Create PassedInfo. <-- problem looks like the component needs to be re-rendered... always just passing undefined...
//TODO: use User POST to write to JSON file !! <-- write to temp file....
//TODO: random workout ID <-- but want to NEVER REPEAT... HOW?
//Issue, rerenders 6 times...

//by default, react with re-render every time
//for onSubmit to work, need to put it on the form!
//In React, you MUST store your inputs using onCHANGE!

//NOT SURE what e is! for addOnclick! Why wasn't this an issue for Workoutname...