import Title from "../Components/Title";
import WorkoutCard from "../Components/WorkoutCard";
import React from "react";
import NavButtons from "../Components/NavButtons";
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar";
import '../Components/OptionCard.css'
import InfoBox from "../Components/InfoBox";

const CreateWorkoutPage=()=>{


    return(

        <div>
            <NavBar/>
            <Title info={"Create Workout"}/>
            <div className= 'container bg-light-purple '>


            </div>
            <label className="db fw6 lh-copy f6 b" htmlFor="username">Name your Workout</label>
            <input className="pa3 input-reset ba br3 bg-transparent ma3 hover-white center w-30"
                   type="username" name="username" id="username"/>
            <div>
                <button className='grow white b pv2-l ph4 bn-ns  bg-red hover-bg-dark-red bn-l br3 pa2 ' >Save</button>
                //Start button will only appear after you save!
                <Link to={"/StartWorkout"}>
                    <button className='grow white b pv2-l ph4 bn-ns br3 pa2  bg-green hover-bg-dark-green bn-l br5'>Start</button>
                </Link>
            </div>



        </div>

    )


} ;
export default CreateWorkoutPage;

//NOTES
// need another infobox. but should also be the same format table--> some way to connect together!!