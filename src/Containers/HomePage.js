import React from 'react';
import Title from '../Components/Title.js';
import './HomePage.css'
import '../Components/OptionCard.css';
import {Link} from "react-router-dom";
import NavButtons from "../Components/NavButtons";


function HomePage(){

  return(

    <div>
      <Link to={"/SignIn"} style={{textDecoration:'none'}} >
          <NavButtons info={"Logout"}/>
      </Link>
      <Title info={ "Welcome Back"}/>
      <div className='flex-container'>
          <Link to={"/CreateWorkout"}>
              <button type='button' className=' grow br3 bn-ns buttonStyle'>Create Workout</button>
          </Link>
          <Link to={"/SelectWorkout"}>
              <button type='button' className=' grow br3 bn-ns buttonStyle' > Select Workout</button>
          </Link>

      </div>
    </div>


  )
}
export default HomePage;
