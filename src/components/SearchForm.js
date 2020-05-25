import React, {useContext, useState} from 'react';
import './SearchForm.css'
import { WeatherCardContext } from '../context/WeatherCardContext'

const SearchForm = () => {
    const [formCity, setFormCity] = useState('')
    const {weatherFetch, unit, setCity} = useContext(WeatherCardContext)
    

    return (
    <div className='SearchForm'>
        <form onSubmit={e =>{
            
            e.preventDefault()
            if(!formCity) return
            setCity(formCity)
            weatherFetch(formCity, unit)
            setFormCity('')
            e.target.querySelector('.form-control-lg').blur()

            
        }}>
        <input  value={formCity} onChange={e => {

            setFormCity(e.target.value)
        }} className="form-control form-control-lg" type="text" placeholder="Busque uma cidade..."/>
        </form>
    </div>);
}

export default SearchForm;