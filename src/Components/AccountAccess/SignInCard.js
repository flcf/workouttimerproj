import React from 'react';
import Title from "../Title";



const SignInCard =()=> {

    return(
        <div>
            <Title info={"Sign In"}/>
            <article className="br2 ph2 ba dark-gray b--black-10 mv4 w-150 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

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
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#0" className="f6 link dim black db">Sign up</a>
                        </div>
                    </form>
                </main>
            </article>
        </div>


)

};
export default SignInCard;