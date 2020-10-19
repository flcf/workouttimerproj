import React from "react";
import './InfoBox.css'
import {ReactComponent as Delete} from '../assets/x.svg'

//can we get it to read different data from a different source??


const CreateWorkoutBox = (prop) =>{
    let passedInfo=  prop.exerciseList;
    let mappedInfo= [];

    console.log("passedInfo Values ");
    console.log(passedInfo);

    //for some reason, child is not running and passing prop...

    function handleDelete(indexDelete){

       prop.deleteCallback(indexDelete)


    }



    return( <div>
            {console.log("Does Table work? Yes")}
            <div className='cardStyle center bn-ns br3'>
                <table style={{marginRight:'auto', marginLeft:'auto'}}>
                    <tr>
                        <th> Exercise Name</th>
                        <th> Duration</th>
                        <th> Rest Interval</th>
                        <th></th>
                    </tr>
                    {mappedInfo= passedInfo.map((user, i) =>{
                        return <tr style={{fontSize:'20px'}}>
                            <td>{passedInfo[i].exerciseName}</td>
                            <td>{passedInfo[i].duration}</td>
                            <td>{passedInfo[i].restInterval}</td>
                            <td onClick={(e)=>{handleDelete(i)}}  className='grow'><Delete/></td>

                        </tr>




                    })


                    }





                </table>



            </div>


        </div>
    )

};

export default CreateWorkoutBox;