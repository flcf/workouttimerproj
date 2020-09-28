
import React from "react";
import {Link} from "react-router-dom";
import Title from "../Components/Title";
import '../Components/OptionCard.css';
import './HomePage.css'


const LoginPage=()=>{


    return(

        <div>
            <Title info={ "Let's Get Started"}/>
            <div className='flex-container'>
                <Link to={"/Register"}>
                    <button type='button' className=' grow br3 bn-ns buttonStyle'>Register</button>
                </Link>
                <Link to={"/SignIn"}>
                    <button type='button' className='grow br3 bn-ns buttonStyle' > Login</button>
                </Link>

            </div>
        </div>
    )


} ;
export default LoginPage;