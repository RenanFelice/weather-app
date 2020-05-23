import React, {createContext, useState, useEffect} from 'react';

export const WeatherCardContext = createContext()

const WeatherCardProvider = (props) => {
    const [dados, setDados] = useState()
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=3449701&units=metric&APPID=e1e6c46a413f8e705380a3b99caacb6e'

    const weatherFetch = async url => {
        await fetch(url).then(resp => resp.json()).then(data => setDados(data))
    }
    
    useEffect(() => {
        weatherFetch(weatherUrl)
    }, [])
   
    return ( 
        <WeatherCardContext.Provider value={{dados}}>
            {props.children}
        </WeatherCardContext.Provider>
     );
}
 
export default WeatherCardProvider;