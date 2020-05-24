import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import './WeatherDetails.css'
import { WeatherCardContext } from '../context/WeatherCardContext'
import { v4 as uuidv4 } from 'uuid';



const WeatherDetails = () => {
    const { forecastDados } = useContext(WeatherCardContext)
    let result;
    if (forecastDados) {
        result =
            <>
                <div className='WeatherDetails'>
                    <div className="mt-5 jumbotron">
                        <h1 className="display-4">{forecastDados.city.name} - {forecastDados.city.country}</h1>
                        <p className="lead">Previsão dos próximos 7 dias...</p>
                        
                        <p className="lead">
                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'><span className="btn btn-primary btn-lg" href="#" role="button">Go Back</span></Link>
                        </p>
                    </div>
                    <div className='WeatherDetails-CardList'>
                        {forecastDados.list.map(item => {
                            let daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', "Sáb"]
                            let month = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                            let dateDay = new Date(item.dt_txt).getDay()
                            let dateHour = new Date(item.dt_txt).getHours().toString()
                            let monthDay = new Date(item.dt_txt).getDate()
                            let monthIdx = new Date(item.dt_txt).getMonth()
                            if (dateHour.length === 1) {
                                dateHour = "0" + dateHour
                            }
                            let dateMinute = new Date(item.dt_txt).getMinutes().toString()
                            if (dateMinute.length === 1) {
                                dateMinute = "0" + dateMinute
                            }


                            return (
                                <div key={uuidv4()} className="WeatherDetails-card">
                                    <p><span>{monthDay} </span> de {month[monthIdx]}<span>{}</span></p>
                                    <div className='WeatherDetails-card-date'>

                                        <p>{daysOfWeek[dateDay]} </p> <p className='hifen'> - </p>
                                        <p><span> {dateHour}</span>:<span>{dateMinute}</span></p>
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
            </>

    }


    return (
        <>
            {result || <div className="loader">Loading...</div>}
        </>
    );
}

export default WeatherDetails;