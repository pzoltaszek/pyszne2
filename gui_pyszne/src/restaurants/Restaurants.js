import React from "react";
import {Link} from "react-router-dom";

 class Restaurants extends React.Component {


    render(){
        return <>
        <h1>Hello from Restaurants</h1>
        <div>
        <Link to="/">Go Back</Link>
        </div>
        </>
    }
}

export default Restaurants;