import React from 'react';
import { Link } from "react-router-dom";
import './WeatherDetails.css'

const WeatherDetails = (props) => {

    return ( 
        <div className='WeatherDetails'>
            <h1>{props.location.pathname}</h1> 
            <Link to='/'>Go Back</Link>
        </div>
    );
}
 
export default WeatherDetails;