import React, {useContext} from 'react';

const style={
    //why is this just const without arrow functions
    color: 'white',
    fontsize: '200%',
    textDecoration: 'none',


};

const NavButtons =(prop)=> {


    //should have setContext go back to null;



    return(
        <h3 style={style}>{prop.info}</h3>


    )

};
export default NavButtons;