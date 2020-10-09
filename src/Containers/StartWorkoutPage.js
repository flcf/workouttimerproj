import Title from "../Components/Title";
import React from "react";
import NavBar from "../Components/NavBar";
import {withRouter} from "react-router-dom";
import Timer from "../Components/Timer"
class StartWorkoutPage extends  React.Component{



    render() {
        const passedObject = this.props.location.state.exerciseList;
        const passedWorkoutName= this.props.location.state.workoutName;
        console.log( 'starting with ' + passedObject[0].exerciseName);



        return(


            <div>
                <NavBar/>
                <Title info={passedWorkoutName}/>
                <div className= 'container center' style={{position:'absolute', paddingTop: '2%', marginTop: '10%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '60px'}}>
                    <Timer exerciseList={passedObject}/>
                </div>
            </div>

        )
    }




}
export default withRouter(StartWorkoutPage);

