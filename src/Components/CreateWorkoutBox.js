import React from "react";
import './InfoBox.css'

//can we get it to read different data from a different source??


const CreateWorkoutBox = (prop) =>{
    let passedInfo=  prop.exerciseList;
    let mappedInfo= [];



    return( <div>
            {console.log("Does Table work? Yes")}
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

export default CreateWorkoutBox;