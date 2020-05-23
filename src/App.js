import React from 'react';
import './App.css';
import WeatherCardProvider from './context/WeatherCardContext'
import WeatherCard from './components/WeatherCard'
import SearchForm from './components/SearchForm'



function App() {
  return (
    <div className="App">
      <WeatherCardProvider>
        <SearchForm/>
        <WeatherCard/>
      </WeatherCardProvider>
    </div>
  );
}

export default App;
