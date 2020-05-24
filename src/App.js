import React from 'react';
import './App.css';
import WeatherCardProvider from './context/WeatherCardContext'
import WeatherCard from './components/WeatherCard'
import SearchForm from './components/SearchForm'
import NavBar from './components/NavBar'
import { Switch, Route } from "react-router-dom";
import WeatherDetails from './components/WeatherDetails'



function App() {
  return (
    <div className="App">
      <WeatherCardProvider>
        <NavBar />
        
        <Switch>
          <Route exact path='/' render={(routProps) => (
            <>
            <SearchForm />
            <WeatherCard/>
            </>
          )}/>
          <Route exact path='/:weatherdetails' render={(routeProps) => <WeatherDetails {...routeProps}/>} />
        </Switch>
        
      </WeatherCardProvider>
    </div>
  );
}

export default App;
