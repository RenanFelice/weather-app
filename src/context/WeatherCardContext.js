import React, {createContext, useState, useEffect} from 'react';

export const WeatherCardContext = createContext()

const WeatherCardProvider = (props) => {
    const [dados, setDados] = useState()
    const [unit, setUnit] = useState('Metric')
    const [city, setCity] = useState('Santo André')
    const [isFetching, setIsFetching] = useState(false)


    const weatherFetch = async (city, unit) => {
        try{
            setIsFetching(true)
            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=e1e6c46a413f8e705380a3b99caacb6e`
            await fetch(weatherUrl).then(resp => resp.json()).then(data => setDados(data))
            setIsFetching(false)
        } catch(e){
            console.log(e)
        }
        
    }
    
    useEffect(e => {

        const fetcher = async () => await weatherFetch('Santo André', unit)
        fetcher()

    },[unit])
   
    return ( 
        <WeatherCardContext.Provider value={{dados, weatherFetch, unit, setUnit, setCity, city, isFetching, setIsFetching}}>
            {props.children}
        </WeatherCardContext.Provider>
     );
}
 
export default WeatherCardProvider;