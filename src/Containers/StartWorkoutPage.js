import Title from "../Components/Title";
import WorkoutCard from "../Components/WorkoutCard";
import React from "react";
import NavBar from "../Components/NavBar";
import {withRouter} from "react-router-dom";
import '../Components/RadialTimer/TimerStyle.scss'
import Countdown from "../Components/RadialTimer/Countdown";
class StartWorkoutPage extends  React.Component{



    render() {
        const passedObject = this.props.location.state.exerciseList;
        console.log( 'starting with ' + passedObject[0].exerciseName);

        return(


            <div>
                <NavBar/>
                <Title info={"Workout"}/>
                <div className= 'container center' style={{position:'absolute', paddingTop: '2%', marginTop: '10%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '60px'}}>
                <Countdown duration={30}/>
                </div>
            </div>

        )
    }




} ;
export default withRouter(StartWorkoutPage);

/* const renderTime = (dimension, time) => {
            return (
                <div className="time-wrapper">
                    <div className="time">{time}</div>
                    <div style={{marginTop: '18px', fontWeight:'bold', fontSize:'50%'}}>{dimension}</div>
                </div>
            );
        };


          {({ remainingTime }) =>
                            renderTime("alkdsadssdasdsadsadsadass",remainingTime)
                        }

        */