import React, { useState, useEffect, useRef, useContext } from 'react';
import Title from "../Title";
import {Link, useHistory} from "react-router-dom";
import {withRouter} from "react-router"
import {UserContext} from "../../REACT Context/UserContext";

//always confused about the order in which things are run while using REACT
//remember that all functions, if called under the render(in the jsx), will run concurrently with the render (if they are conditional, will only run when condition is fulfilled,
// but this is also checked conditionally)
//if you want certain functions to run AFTER the render, then need to use useEffect

const SignInCard =()=> {

    const [loginInfo, setLoginInfo] = useState( { username: '',
                                                             password: '' });
    const history = useHistory();

    const userRef = useRef(null);
    const passwordRef = useRef(null);

    //hooking up a provider so userInfo and data will be shared across multiple pages
    const {userid, setUserid} = useContext(UserContext);
    console.log(userid)

    function handleSubmitClick(e){
        e.preventDefault();
        setLoginInfo({
            username: userRef.current.value,
            password: passwordRef.current.value
        });
        document.getElementById('login-form').reset();

        setLoginInfo((state) => {
            console.log("Current Login Info values are " + state.username);

            return state;
        });



    }


    useEffect(()=>{
        //will only run if the loginInfo values have been updated from their initial state!
        if (loginInfo.username != '') {
            fetchFromServer();
        }



    })

    function fetchFromServer() {
        fetch('https://frozen-ravine-88940.herokuapp.com/signin', {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({  //passing these values into the server!
                username: loginInfo.username,
                password: loginInfo.password,

            })
        }).then(response=>response.json()).then(data=>{

            if(data.username===loginInfo.username) {

                ///fetch userID and store into provider setUserid

                //can data return multiple things...
                setUserid(data.userid);


                return history.push("/" )
            } else {
                return alert("Incorrect Login Information. Try Again")
            }


        })
    }



    return(
        <div>
            <Title info={"Sign In"}/>
            <article className="br2 ph2 ba dark-gray b--black-10 mv4 w-150 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center" id="login-form"  onSubmit={handleSubmitClick}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                                <input className="pa2 input-reset b--black-20 ba bg-transparent hover-white w-100"
                                       type="text" name="username" id="username" ref={userRef}/>

                            </div>
                            <div className="mv3 measure-narrow">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 mb2 db input-reset ba bg-transparent hover-white w-100"
                                       type="password" name="password" id="password" ref={passwordRef}/>

                            </div>

                            <div className="mv3">
                                <button form="login-form" className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                       type="submit">Sign In</button>
                            </div>
                            <Link to="/Register"  style={{textDecoration:'none'}}>
                                <p className="dark-gray f6 hover-black">Register</p>
                            </Link>

                        </fieldset>

                    </form>
                </main>
            </article>




        </div>


)

};
export default withRouter(SignInCard);

//TODO: FIX ROUTING ISSUES
//TODO:COPY FORMAT TO REGISTER , same for Select Workout, Create Workout