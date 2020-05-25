import React, { useContext, useState } from 'react';
import './NavBar.css'
import { WeatherCardContext } from '../context/WeatherCardContext'

const NavBar = () => {
    const [formCity, setFormCity] = useState('')
    const { weatherFetch, setUnit, unit, setCity } = useContext(WeatherCardContext)
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a className="navbar-brand" href="/"><i className="fas fa-cloud-sun"></i></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">

                        <a className="nav-link home-link" href="/">Home <span className="sr-only">(current)</span></a>

                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {unit}</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a id='Metric' onClick={e => {
                                e.preventDefault()
                                setUnit(e.target.id);

                            }} className="dropdown-item" href="/">Metric</a>
                            <a onClick={e => {
                                e.preventDefault()
                                setUnit(e.target.id);

                            }} id='Imperial' className="dropdown-item" href="/">Imperial</a>
                        </div>
                    </li>
                </ul>
                <form onSubmit={e => {
                    e.preventDefault()
                    setCity(formCity)
                    weatherFetch(formCity, unit)
                    setFormCity('')
                }} className="form-inline my-2 my-lg-0">
                    <input value={formCity} onChange={e => setFormCity(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;