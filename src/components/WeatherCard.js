import React, { useContext } from 'react';
import { WeatherCardContext } from '../context/WeatherCardContext'
import './WeatherCard.css'

const WeatherCard = () => {
    const { dados } = useContext(WeatherCardContext)
    let notCity;
    if (!dados){
        notCity = 'Digite uma cidade para iniciar'
    } else {
        if(dados.cod === '404') notCity = 'Cidade não encontrada, digite novamente'
    }
    
    
    return (
        <div>

            {dados && notCity !== 'Cidade não encontrada, digite novamente'  ?
                <div className="card">
                    <h5 className="card-city-desc"> Tempo agora em... </h5>
                    <h3 className="card-city"><i className="fas fa-location-arrow"></i>{dados.city.name} - {dados.city.country} </h3>
                    <div className='card-temp-container'>
                        <img className="card-img-top" alt={dados.list[0].weather[0].description} src={`http://openweathermap.org/img/wn/${dados.list[0].weather[0].icon}@2x.png`} />
                        <div className='card-temp-info'>
                            <h5 className="card-temp-info">{dados.list[0].main.temp}º</h5>
                            <h5 className="card-temp-description">{dados.list[0].weather[0].description}</h5>
                        </div>

                    </div>
                    <div className='card-extra-info'>
                        <div className='feels_like'>
                            <p>Sensação</p>
                            <p>{dados.list[0].main.feels_like}º</p>
                        </div>
                        <div className='humidity'>
                            <p>Humidade</p>
                            <p>{dados.list[0].main.humidity}%</p>
                        </div>
                        <div className='pressure'>
                            <p>Pressão</p>
                            <p>{dados.list[0].main.pressure} hPa</p>
                        </div>
                        <div className='wind'>
                            <p>Vento</p>
                            <p>{dados.list[0].wind.speed} Km/h</p>
                        </div>
                    </div>

                </div>
                : <h1>{notCity}</h1>}
        </div>


    );
}

export default WeatherCard;