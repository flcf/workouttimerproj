import React from "react";
import './InfoBox.css'
import Title from "./Title";
import {Link} from "react-router-dom";



const InfoBox =(prop)=> {
 let passedInfo= prop.info.exercises;
 let mappedInfo= []

    console.log("what is" + passedInfo.workoutName)
    return(
        <div>
            <div className='cardStyle center bn-ns br3'>
                <table style={{marginRight:'auto', marginLeft:'auto'}}>
                    <tr>
                        <th> Exercise Name</th>
                        <th> Duration</th>
                        <th> Rest Interval</th>
                    </tr>
                    {mappedInfo= passedInfo.map((user, i) =>{
                        return <tr style={{fontSize:'20px'}}>
                            <td>{passedInfo[i].exerciseName}</td>
                            <td>{passedInfo[i].duration}</td>
                            <td>{passedInfo[i].restInterval}</td>


                        </tr>




                    })


                    }
                </table>



            </div>


        </div>
    )

};

export default InfoBox;

//for some reason, can do return <div>
//but not:
//return
//<div> <-- on the next line!