import React, {useState} from 'react';
import './WorkoutCard.css';
import Collapsible from 'react-collapsible';


//when to use state??

//create a state where we check if button is clicked or not. if the button was clicked, then we want to render the box below. why do we need state?
//can't we just run a function when it's clicked? can use a function to check...


function WorkoutCard () {

//return doesn't happen once...it's being consistently checked in itself?? that's bc the state was changed. once the state is changed, must be re-rendered!
    return(

        <div className='flexcont'>

            <Collapsible trigger= "Workout1" classParentString="center br3 collapse"  triggerStyle={{paddingRight: "410px" ,
                paddingBottom:"10px",
                paddingTop: "10px",
                backgroundColor: "#80ccff"
                }} >
                <p style={{fontSize: 13}}>This is the collapsible content. It can be any element or React component you like.</p>

            </Collapsible>




        </div>
    )

} export default WorkoutCard;