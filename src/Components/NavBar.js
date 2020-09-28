import {Link} from "react-router-dom";
import NavButtons from "./NavButtons";
import './NavBar.css'
import React from "react";




const NavBar=()=>{


    return(

        <div>
            <nav className='flex-box'>

                <Link className='item'
                     to={"/"} style={{textDecoration:'none'}} >
                    <NavButtons info={"Home"}/>
                </Link>

                <Link  className='item' to={"/LoginOption"} style={{textDecoration:'none'}} >
                    <NavButtons info={"Logout"}/>
                </Link>

            </nav>
        </div>

    )


} ;
export default NavBar;



