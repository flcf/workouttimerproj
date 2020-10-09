import React from 'react';
import Title from "../Title";
import {Link} from "react-router-dom";



const RegisterCard =()=> {

    return(
        <div>

            <Title info={"Sign Up"}/>
            <article className="br2 ph2 ba dark-gray b--black-10 mv5 w-150 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-white w-100"
                                       type="email" name="email" id="email"/>

                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                                <input className="pa2 input-reset ba bg-transparent hover-white w-90"
                                       type="username" name="username" id="username"/>

                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-white w-100"
                                       type="password" name="password" id="password"/>
                            </div>
                            <div className="mv3">
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                       type="submit" value="Register"/>
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