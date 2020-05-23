import React, {useContext, useState} from 'react';
import './SearchForm.css'
import { WeatherCardContext } from '../context/WeatherCardContext'

const SearchForm = () => {
    const [city, setCity] = useState('')
    const {weatherFetch} = useContext(WeatherCardContext)
    return (
    <div className='SearchForm'>
        <form onSubmit={e =>{
            e.preventDefault()
            weatherFetch(city)
        }}>
        <input value={city} onChange={e => setCity(e.target.value)} className="form-control form-control-lg" type="text" placeholder="Busque uma cidade."/>
        </form>
    </div>);
}

export default SearchForm;