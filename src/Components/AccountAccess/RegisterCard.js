import React, {useContext, useEffect, useRef, useState} from 'react';
import Title from "../Title";
import {Link, useHistory} from "react-router-dom";
import {UserContext} from "../../REACT Context/UserContext";



const RegisterCard =()=> {

    const history = useHistory();

    const [registerInfo, setRegisterInfo] = useState( { username: '',
        email: '',
        password: '' });


    const userRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const {userid, setUserid} = useContext(UserContext);


    function handleSubmitClick(e){
        e.preventDefault();
        setRegisterInfo({
            username: userRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value        });

        setRegisterInfo((state) => {
            console.log("Current Login Info values are " + state.username);

            return state;
        });



    }

    useEffect(()=>{
        //will only run if the loginInfo values have been updated from their initial state!
        if (registerInfo.username != '') {
            fetchFromServer();
        }
    });

    function fetchFromServer() {
        fetch('http://localhost:5000/register', {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: registerInfo.email,
                username: registerInfo.username,
                password: registerInfo.password,

            })
        }).then(response=>response.json()).then( data => {

            if (data[0].username === registerInfo.username) {
                console.log(userid);

                setUserid(data[0].userid)

                return history.push("/")
            } else {
                return alert(data)
            }
        })

    }

    return(
        <div>

            <Title info={"Sign Up"}/>
            <article className="br2 ph2 ba dark-gray b--black-10 mv5 w-150 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center" id="register-form" onSubmit={handleSubmitClick} >
                        <fieldset className="ba b--transparent ph0 mh0">

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-white w-100"
                                       type="email" name="email" id="email" ref={emailRef}/>

                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                                <input className="pa2 input-reset ba bg-transparent hover-white w-90"
                                       type="username" name="username" id="username" ref={userRef}/>

                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-white w-100"
                                       type="password" name="password" id="password" ref={passwordRef}/>
                            </div>
                            <div className="mv3">
                                <button form="register-form" className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                        type="submit">Register</button>
                            </div>
                            <Link to="/SignIn"  style={{textDecoration:'none'}}>
                                <p className="dark-gray f6 hover-black">Sign In</p>
                            </Link>

                        </fieldset>

                    </form>
                </main>
            </article>
        </div>




    )

};
export default RegisterCard;