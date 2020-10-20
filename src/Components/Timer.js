import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import "./Timer.css"
import shortBeep from '../assets/shortAlert.mp3'
import longBeep from '../assets/longAlert.mp3'
import Rest from '../assets/Rest.mp3'
import nextExercise from '../assets/Next Exercise.mp3'
import useSound from "use-sound";


const Timer = (props) => {

//takes in a list of exercise objects, each with ExerciseName, RestInterval, Duration

    const [currentExercise, setExercise] = useState(0);
    const [secondsLeft, setSeconds] = useState(props.exerciseList[currentExercise].duration);
    const [exerciseName, setExerciseName] = useState(props.exerciseList[currentExercise].exerciseName);
    const [nextExercise, setNextExercise] = useState(props.exerciseList[1].exerciseName);
    const [isActive, setIsActive] = useState(true);
    const  [isResting, setRest] = useState( false);
    const [isFinished, setFinished] = useState(false);

    const [playShort] = useSound(shortBeep);
    const [playLong] = useSound(longBeep);
    const [playRest] = useSound(Rest);
    const [playNext] = useSound(nextExercise);


/*
renderData function will render based on whether the exerciseList isFinished (empty) or not
If list is not exhausted, will display the time left + name of the exercise/rest interval

//this function will be called every time after useEffect kicks in because now DOM has to re-render this!
* * */


    function renderData (){
        if (isFinished==true) {
            return <div>
                    <p className= 'b f2-l'>Finished</p>
                    <Link to={"/SelectWorkout"}>
                        <button style={{margin: '10px'}} className='grow white b pv2-l ph4 bn-ns  bg-red hover-bg-dark-red bn-l br3 pa2 '>
                            Select
                        </button>
                    </Link>

                    <Link to={"/Home"}>
                        <button style={{margin: '10px'}} className='grow white b pv2-l ph4 bn-ns br3 pa2  bg-green hover-bg-dark-green bn-l br5'>End</button>
                    </Link>
                </div>


        } else {
            return <div>
                <p className='b white f1-l'> {exerciseName}</p>
                <p>{secondsLeft}s</p>
                <div>
                    <b className='b white f3-m'>Next: </b>
                    <b className='b white f3-m'>{nextExercise}</b>
                </div>

                <div>
                    <button style={{margin: '10px'}} className='grow white b pv2-l ph4 bn-ns  bg-red hover-bg-dark-red bn-l br3 pa2 ' onClick={toggle}>
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                    <Link to={"/Home"}>
                        <button style={{margin: '10px'}} className='grow white b pv2-l ph4 bn-ns br3 pa2  bg-green hover-bg-dark-green bn-l br5'>End</button>
                    </Link>


                </div>
                </div>


        }

    }

    //toggle pause/play
    function toggle() {
        setIsActive(!isActive);
    }



//Need this part to rerun set interval...

/*
* useEffect will run EVERY time it detects one of it's dependencies changing.
* Therefore, all the if statements within useEffect will be re-checked! each time it detects a change in either secondsLeft or isActive or isFinished
*
* */
    useEffect(() => {
        let interval = null;


        //decrement secondsLeft
        if (isActive && secondsLeft >= 0) {
            interval = setInterval(() => {
                setSeconds(secondsLeft => secondsLeft -1);
            }, 1000);

            if(secondsLeft <= 3 && secondsLeft >0) {
                playShort();
            }
            if(secondsLeft ===0){
                playLong();

            }

        }
        //when secondsLeft is negative (bc want 0 for aesthetics), set isResting to True and reset timer to play Rest Interval
        //tbh still unsure what clearInterval does exactly...
        if( isActive && secondsLeft===-1 && isResting===false) {
            setExerciseName("Rest");
            setSeconds(props.exerciseList[currentExercise].restInterval);
            playRest();
            setRest(true);
        }
        //when Rest Interval is done, move timer to play next exercise object!
        if ( isActive && secondsLeft===-1 && isResting===true) {
            if (props.exerciseList[currentExercise+1] !== undefined){
                setExercise(  currentExercise + 1);
                setExerciseName(props.exerciseList[currentExercise +1].exerciseName);
                if (props.exerciseList[currentExercise + 2] !== undefined){
                    setNextExercise(props.exerciseList[currentExercise +2].exerciseName)
                } else{
                    setNextExercise(null)
                }
                setSeconds(props.exerciseList[currentExercise +1].duration);
                setRest(false);
                playNext();
                clearInterval(interval);
            } else {
                setFinished(true);
                return () => clearInterval(interval);
            }

        } else
            return () => clearInterval(interval);
    }, [isActive, secondsLeft, isFinished]);


    return (
        <div className="app">

            <div className="time">
                {renderData()}
            </div>


        </div>
    );
};

export default Timer;


//TODO: weird bug where for some reason will go into negative values but quickly reset?
//TODO: Add buffer time before start!
//TODO: Add Voice API




