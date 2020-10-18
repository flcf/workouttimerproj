import React, {useContext, useEffect, useState} from 'react';
import Title from '../Components/Title';
import '../Components/WorkoutCard.css'
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar"
import Scrollbar from "react-scrollbars-custom";
import {UserContext} from "../REACT Context/UserContext";

// can't declare variables in consumer! Declare them early!
const WorkoutPage=()=>{
  /*  const[workoutInfo , setWorkoutInfo] = useState({ workoutname: '',
        workoutid: null })*/
    const [workoutList, setWorkoutList] = useState([] );
    let mappedData = [];



    const {userid, setUserid} = useContext(UserContext);


    useEffect(()=>{



        if(workoutList.length === 0) {  //set this condition to prevent useEffect from triggering after every re-render!!
            fetch('http://localhost:5000/SelectWorkout', {
                method: 'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userid: userid

                })
            }).then(response=>response.json()).then(data=>{


                setWorkoutList(data);

            })

        }




    }, [workoutList])


    function renderData(){

        if(workoutList.length > 0){
            return <div>
                <NavBar/>
                <Title info={"Select Workout"}/>

                <Scrollbar style={{width:700, height: 500, position:'absolute', marginTop: "15%", left: '50%', transform: 'translate(-50%, -50%)'}}>

                    <React.Fragment>
                        <div>

                            { mappedData= workoutList.map((user, i) =>{

                                console.log(workoutList[i])



                                return <Link to={{
                                    pathname: '/WorkoutDetails',
                                    state: { fromSelect: workoutList[i]

                                    }

                                }} >
                                    <button className= 'grow bstyle br3 bn-ns '>{workoutList[i].workoutname}</button>
                                </Link>

                            })}


                        </div>

                    </React.Fragment>


                </Scrollbar>

            </div>
        }
    }

return(

  <div>
      {renderData()}

  </div>

)


} ;
export default WorkoutPage;


