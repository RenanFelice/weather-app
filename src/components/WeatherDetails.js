import React from 'react';
import { Link } from "react-router-dom";

const WeatherDetails = (props) => {
    console.log(props)

    return ( 
        <div className='WeatherDetails'>
            <h1>{props.location.pathname}</h1> 
            <Link to='/'>Go Back</Link>
        </div>
    );
}
 
export default WeatherDetails;