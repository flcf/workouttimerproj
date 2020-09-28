import React from 'react';
import Title from "../Title";



const RegisterCard =()=> {

    return(
        <div>

            <Title info={"Sign Up"}/>
            <article className=" br2 ph4 pa5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <form
                    action="sign-up_submit"
                    method="get"
                    accept-charset="utf-8"
                >
                    <fieldset
                        id="sign_up"
                        className="ba b--transparent ph0 mh0"
                    >
                        <legend className="ph0 mh0 fw6 clip">
                            Sign Up
                        </legend>
                        <div className="mt1">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="email-address"
                            >
                                Email address
                            </label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-white w-90"
                                type="email"
                                name="email-address"
                                id="email-address"
                            />
                        </div>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-white w-80"
                                type="username"
                                name="username"
                                id="username"
                            />
                        </div>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="password">
                                Password
                            </label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-white w-90"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                    </fieldset>
                    <div className="mt3">
                        <input
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                            type="submit"
                            value="Sign Up"
                        />
                    </div>
                </form>
            </article>
        </div>




    )

};
export default RegisterCard;