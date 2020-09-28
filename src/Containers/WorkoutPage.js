import React from 'react';
import Title from '../Components/Title';
import '../Components/WorkoutCard.css'
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar"
import Scrollbar from "react-scrollbars-custom";
import MyContext from "../REACT Context/MyContext";

// can't declare variables in consumer! Declare them early!
const WorkoutPage=()=>{
    let mappedData = [];


return(

  <div>
    <NavBar/>
    <Title info={"Select Workout"}/>
    <div className='center'>
        <Scrollbar style={{width:700, height: 500, position:'absolute', marginTop: "12%", left: '50%', transform: 'translate(-50%, -50%)'}}>

            <MyContext.Consumer>
                {(passedValue)=>(
                    <React.Fragment>
                        <div>
                            {mappedData= passedValue.map((user, i) =>{
                                return <Link to={{
                                    pathname: '/WorkoutDetails',
                                    state: { fromSelect: passedValue[i]

                                    }

                                }} >
                                    <button className= 'grow bstyle br3 bn-ns '>{passedValue[i].workoutName}</button>
                                </Link>
                            })


                            }
                        </div>

                    </React.Fragment>




                )}


            </MyContext.Consumer>
        </Scrollbar>


    </div>
  </div>

)


} ;
export default WorkoutPage;


//{/* <Link to={'/WorkoutDetails'}>
//                     <button className= 'grow bstyle br3 bn-ns '>Workout1</button>
//                 </Link>
//                 <button className='grow bstyle br3  bn-ns'> Workout2</button>
//                 <button className='grow bstyle br3  bn-ns'> Workout2</button>
//                 <button className='grow bstyle br3  bn-ns'> Workout2</button>
//                 <button className='grow bstyle br3  bn-ns'> Workout2</button>
//                 <button className='grow bstyle br3  bn-ns'> Workout2</button>
//                 <button className='grow bstyle br3  bn-ns'> Workout2</button>
//                 <button className='grow bstyle br3  bn-ns'> Workout2</button>
//                 <button className='grow bstyle br3  bn-ns'> Workout2</button>*/}