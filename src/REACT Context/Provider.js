import MyContext from "./MyContext";
import React, {Component} from "react";
import {workoutData} from "../Components/TestData/WorkoutsData";

class MyProvider extends Component {

//could I set the actions in the provider and just have the consumer spit out data?? but still need to set which one is using which??

//

    render(){
        return(
            <MyContext.Provider value={workoutData}>
                {this.props.children}

            </MyContext.Provider>


        );

    }


}

export default MyProvider;

//this.props.children
// passes the information down to the children