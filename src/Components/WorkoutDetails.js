import React from "react";
import NavButtons from "./NavButtons";
import InfoBox from "./InfoBox";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom"
import Title from "./Title";


class WorkoutDetails extends  React.Component{

    render(){

            const passedObject = this.props.location.state.fromSelect;
            console.log( 'this is ' + passedObject.workoutName);



        return(
            <div>
                <Link to={'/SelectWorkout'}  style={{textDecoration:'none'}}>
                    <NavButtons info={"Back"} />
                </Link>
                <Title info = {passedObject.workoutName}/>
                <InfoBox info={passedObject}/>
                <Link to={{
                    pathname: '/StartWorkout',
                    state: {exerciseList: passedObject.exercises,
                            workoutName: passedObject.workoutName
                    }
                }}>

                    <button className='grow white b pv2-l ph4 bn-ns br3 pa2  bg-green hover-bg-dark-green bn-l br5'>Start</button>
                </Link>
            </div>




    )
    }

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