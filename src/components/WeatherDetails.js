import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import './WeatherDetails.css'
import { WeatherCardContext } from '../context/WeatherCardContext'
import { v4 as uuidv4 } from 'uuid';



const WeatherDetails = () => {
    const { forecastDados, isFetchingForecast } = useContext(WeatherCardContext)
    const result = <>
        {forecastDados && forecastDados.cod !== '404' ?
            <div className='WeatherDetails'>
                <div className="mt-5 jumbotron">
                    <h1 className="display-4">
                        {forecastDados.city.name} - {forecastDados.city.country}
                    </h1>
                    <p className="lead">Previsão dos próximos dias...</p>

                    <p className="lead">
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'><span className="btn btn-primary btn-lg" href="#" role="button">Go Back</span></Link>
                    </p>
                </div>
                <div className='WeatherDetails-CardList'>
                    {forecastDados.list.map(item => {
                        let daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', "Sáb"]
                        let month = [null, 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                        let monthIdx = item.dt_txt.slice(5, 7)
                        let dateDay = item.dt_txt.slice(8, 10)
                        let dateHour = item.dt_txt.slice(11, 16)
                        let dateWeek = new Date(`${monthIdx}/${dateDay}/${item.dt_txt.slice(0, 5)}`)



                        return (
                            <div key={uuidv4()} className="WeatherDetails-card">
                                <p><span>{dateDay} </span> de {month[parseInt(monthIdx)]}<span>{}</span></p>
                                <div className='WeatherDetails-card-date'>

                                    <p>{daysOfWeek[dateWeek.getDay()]} </p> <p className='hifen'> - </p>
                                    <p>{dateHour}</p>
                                </div>
                                <img className="card-img-top" alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                                <div className='WeatherDetails-card-temp'>
                                    <p className='temp-max'>{Math.floor(item.main.temp_max)}º</p>
                                    <p className='temp-min'>{Math.floor(item.main.temp_min)}º</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            :
            <div className='city-notfound'>
                <h3>Cidade não Encontrada</h3>
                <img className='city-notfound-img' alt='notfoundbg' src={require('../notfoundbg.png')} />
            </div>}
    </>




    return (
        <>
            {isFetchingForecast ? <div className="loader">Loading...</div> : result}
        </>
    );
}

export default WeatherDetails;