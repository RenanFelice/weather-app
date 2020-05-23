import React from 'react';
import './App.css';
import WeatherCardProvider from './context/WeatherCardContext'
import WeatherCard from './components/WeatherCard'



function App() {
  return (
    <div className="App">
      <WeatherCardProvider>
        <WeatherCard/>
      </WeatherCardProvider>
    </div>
  );
}

export default App;
