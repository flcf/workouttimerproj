import {Link} from "react-router-dom";
import NavButtons from "./NavButtons";
import './NavBar.css'
import React, {useContext} from "react";
import {WorkoutContext} from "../REACT Context/WorkoutContext";
import {UserContext} from "../REACT Context/UserContext";




const NavBar=()=>{
    const {exerciseList, setExerciseList} = useContext(WorkoutContext);
    const {userid, setUserid} = useContext(UserContext);


    function handleSignOut(){

        setExerciseList([]);
        setUserid(null);
        //LOOKS LIKE THIS EXECUTES MULTIPLE TIMES...ONLY ONCE!!
    }


    return(

        <div>
            <nav className='flex-box'>

                <Link className='item'
                     to={"/Home"} style={{textDecoration:'none'}} >
                    <NavButtons info={"Home"}/>
                </Link>

                <Link  className='item' to={"/"}  onClick={() => handleSignOut()} style={{textDecoration:'none'}} >
                    <NavButtons info={"Logout"}/>
                </Link>

            </nav>
        </div>

    )


} ;
export default NavBar;



