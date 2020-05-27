import React, { useContext } from 'react';
import { WeatherCardContext } from '../context/WeatherCardContext'
import './WeatherCard.css'
import { Link } from "react-router-dom";

const WeatherCard = () => {
    const { dados, unit, isFetching, weatherForecastFetch, city } = useContext(WeatherCardContext)
    const result = <>


        {dados && dados.cod !== '404' ?
            <Link onClick={e => weatherForecastFetch(city, unit)} style={{ color: 'inherit', textDecoration: 'inherit' }} to={`${dados.name}`}>
                <div className="card">
                    <h5 className="card-city-desc"> Tempo agora em... </h5>
                    <h3 className="card-city"><i className="fas fa-location-arrow"></i>{dados.name} - {dados.sys.country} </h3>
                    <div className='card-temp-container'>
                        <img className="card-img-top" alt={dados.weather[0].description} src={`http://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`} />
                        <div className='card-temp-info'>
                            <h5 className="card-temp-info">{Math.round(dados.main.temp)}º {unit.toLowerCase() === 'metric' ? 'C' : 'F'}</h5>
                            <h5 className="card-temp-description">{dados.weather[0].description}</h5>
                        </div>

                    </div>
                    <div className='card-extra-info'>
                        <div className='feels_like'>
                            <p>Sensação</p>
                            <p>{Math.round(dados.main.feels_like)}º{unit.toLowerCase() === 'metric' ? 'C' : 'F'}</p>
                        </div>
                        <div className='humidity'>
                            <p>Umidade</p>
                            <p>{dados.main.humidity}%</p>
                        </div>
                        <div className='pressure'>
                            <p>Pressão</p>
                            <p>{dados.main.pressure} hPa</p>
                        </div>
                        <div className='wind'>
                            <p>Vento</p>
                            <p>{dados.wind.speed} {unit.toLowerCase() === 'metric' ? 'M/s' : 'Mph'}</p>
                        </div>
                    </div>

                </div>
            </Link>
            : <div className='city-notfound'>
                <h3>Cidade não Encontrada</h3>
                <img className='city-notfound-img' alt='notfoundbg' src={require('../notfoundbg.png')} />
            </div>
        }
    </>

    return (
        <>{isFetching ? <div className="loader">Loading...</div> : result}</>
    );
}

export default WeatherCard;