import React, {useContext} from "react";
import './InfoBox.css'
import Title from "./Title";
import {Link} from "react-router-dom";
import {WorkoutContext} from "../REACT Context/WorkoutContext";



const InfoBox =()=> {
 //let passedInfo= prop.info.exercises;
 let mappedInfo= []
    const {exerciseList, setExerciseList} = useContext(WorkoutContext);
    return(
        <div>
            <div className='cardStyle center bn-ns br3'>
                <table style={{marginRight:'auto', marginLeft:'auto'}}>
                    <tr>
                        <th> Exercise Name</th>
                        <th> Duration</th>
                        <th> Rest Interval</th>
                    </tr>
                    {mappedInfo= exerciseList.map((user, i) =>{
                        return <tr style={{fontSize:'20px'}}>
                            <td>{exerciseList[i].exerciseName}</td>
                            <td>{exerciseList[i].duration}</td>
                            <td>{exerciseList[i].restInterval}</td>


                        </tr>




                    })


                    }
                </table>



            </div>


        </div>
    );

};

export default InfoBox;

//for some reason, can do return <div>
//but not:
//return
//<div> <-- on the next line!