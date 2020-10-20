import Title from "../Components/Title";
import React, {useState, useEffect, useRef, useContext} from 'react';
import NavButtons from "../Components/NavButtons";
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar";
import '../Components/OptionCard.css'
import CreateWorkoutBox from "../Components/CreateWorkoutBox";
import "./CreateWorkout.css"
import {UserContext} from "../REACT Context/UserContext";
import {WorkoutContext} from "../REACT Context/WorkoutContext";


const CreateWorkoutPage=()=>{
    const {userid, setUserid} = useContext(UserContext);
    const {exerciseList, setExerciseList} = useContext(WorkoutContext);
    const[isWorkoutEntered, setEntered] = useState(false);
    const[isSaved, setSaved] = useState(false);
    const[workoutName, setWorkoutName] = useState("");
    const [exerciseInfo, setExerciseInfo] = useState( { exerciseName: '',
                                                                    duration: null,
                                                                    restInterval: null });
    const [tempExerciseList, setTempExerciseList] = useState([] );

    const [updatedList, setUpdatedList] = useState([]);
    const [deleteHelper, setDeleteHelper] = useState([]);

    const eNameRef = useRef(null);
    const durationRef = useRef(null);
    const restRef = useRef(null);

    //console.log("userid value= " + userid);

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
        // a callback that helps us immediately get the values of the setState!
        setExerciseInfo((state) => {
           // console.log("Current Set State values are " + state.exerciseName);

            return state;
        });



    }

    function handleSaveClick(){
        //store into server List of Values!
        //store into table Workout AND table Exercise

       /* console.log("HandleSave ran once")
        console.log("Handle save userid= " + userid)*/

        fetch('https://frozen-ravine-88940.herokuapp.com/CreateWorkout', {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                workoutname: workoutName,
                userid: userid,
                exercises: tempExerciseList

                }

            )
        }).then(response=>response.json()).then(data=>{

            if(data === 'Success'){
                return setSaved(true);
            } else {
                return <p className='b'>Error. Return to Home</p>
            }


        })

    }

    function handleStartClick(){
        //setContext to those values, Link to Timer
        setExerciseList(tempExerciseList);



    }

    function handleCallback(deleteClicked){


            console.log(updatedList)
            const newList = tempExerciseList;
            newList.splice(deleteClicked, 1)
            console.log("Before Updating's List value: ")
            //problem seems to be the fact that after deleting first item, updatedList ALREADY populates with new value before setUpdated List is called... Hence no changes therefore not triggering useEffect...

            setUpdatedList(newList);

            setUpdatedList((state) => {
                 console.log("Current Set Updated List values are " );
                 console.log(state);


                return state;
            });
            setDeleteHelper(deleteHelper => [...deleteHelper, 1]);




            console.log("Temp List Value: ")
            console.log(tempExerciseList);





    }

    //handleDelete called but after that, nothing happens bc useEffect for updatedList is not called
    //added deleteHelper that useEffect will listen for. For some reason, even though updatedList's value changes, useEffect not called...

    useEffect(()=>{

        setTempExerciseList(updatedList);



    }, [updatedList, deleteHelper])





    //decided to do useEffect here when setExerciseList updates because it would re-render EVERY SINGLE time any of the states changed.
    //under this, it will limit when this happens, allowing for a case where it setExercistList won't append the initial "null" state of exerciseInfo

    useEffect(()=>{

        if (exerciseInfo.restInterval != null) {
            setTempExerciseList([...tempExerciseList, exerciseInfo]);


        }




    }, [exerciseInfo] );

    function renderExerciseList (){
        console.log("render Exercise List called")



        //not executing this when tempExerciesList length is 0... (but should remove thise all together??)
        //this condition passed even though length already 0...
        if( tempExerciseList.length > 0) {
            console.log("The ExerciseList that is being rendered")
            console.log(tempExerciseList);
            return <div>
                <CreateWorkoutBox exerciseList={tempExerciseList} deleteCallback={handleCallback} />
                {renderPreview()}
                {console.log("Reached end of exerciseList render")}
                </div>



        } else{
            {console.log("only Render preview ran")}
            {renderPreview()}
        }
    }

//conditional rendering of the save/start button
    function renderPreview(){ //need to add a condition so the save button doesn't show up until WorkoutBox is populated...for future design!
        if (isSaved === false ) {
            return <div>
                <button onClick={handleSaveClick} className='grow white b pv2-l ph4 bn-ns  bg-red hover-bg-dark-red bn-l br3 pa2' >Save</button>


            </div>
        } else {
            return <div>
                <p className='b'>Saved</p>


                <Link to={{
                    pathname: '/StartWorkout',
                    state: {
                        workoutName: workoutName
                    }
                }}>

                    <button onClick={(e)=>{handleStartClick(e)}} className='grow white b pv2-l ph4 bn-ns br3 pa2  bg-green hover-bg-dark-green bn-l br5'>Start</button>
                </Link>
            </div>
        }
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
            console.log("AddWorkout RenderData is Called")
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

