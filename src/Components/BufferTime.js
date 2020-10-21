import React, { useState, useEffect } from 'react';
import "./Timer.css"
import shortBeep from '../assets/shortAlert.mp3'
import useSound from "use-sound";

import Start from "../assets/Start.mp3";
import {Link} from "react-router-dom";




const BufferTime =(props) =>{
    const [playShort] = useSound(shortBeep);
    const [playStart] = useSound(Start);
    const [secondsLeft, setSeconds] = useState(5);
    const [isFinished, setFinished] = useState(false);
    const [isActive, setIsActive] = useState(true);




    function toggle() {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;


        //decrement secondsLeft
        if ( isActive === true && isFinished ===false && secondsLeft > 0) {
            playShort();
            interval = setInterval(() => {
                setSeconds(secondsLeft => secondsLeft - 1);
            }, 1000);

        }
        if(isActive === true && secondsLeft ===0){

            clearInterval(interval);
            setFinished(true);


        }

        //send signal to parent component
        if (isFinished==true) {
            playStart();
            props.callback(isFinished);

        }

         console.log("decrement runs")


        //need to clearInterval to prevent from triggering the interval to continue to decrement and cause the useEffect to keep triggering
        return () => clearInterval(interval);
    }, [ secondsLeft, isFinished, isActive]);

    return <div className="time">
        <p className='b white f1-l'>Get Ready</p>
        <p>{secondsLeft}s</p>
            <button style={{margin: '10px'}} className='grow white b pv2-l ph4 bn-ns  bg-red hover-bg-dark-red bn-l br3 pa2 ' onClick={toggle}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <Link to={"/Home"}>
                <button style={{margin: '10px'}} className='grow white b pv2-l ph4 bn-ns br3 pa2  bg-green hover-bg-dark-green bn-l br5'>End</button>
            </Link>


        </div>


};
export default BufferTime;