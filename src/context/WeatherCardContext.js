import React, {createContext, useState} from 'react';

export const WeatherCardContext = createContext()

const WeatherCardProvider = (props) => {
    const [dados, setDados] = useState()
    

    const weatherFetch = async city => {
        try{
            const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=e1e6c46a413f8e705380a3b99caacb6e`
            await fetch(weatherUrl).then(resp => resp.json()).then(data => setDados(data))
        } catch(e){
            alert(e, 'deu ruim')
        }
        
    }
    
   
    return ( 
        <WeatherCardContext.Provider value={{dados, weatherFetch}}>
            {props.children}
        </WeatherCardContext.Provider>
     );
}
 
export default WeatherCardProvider;