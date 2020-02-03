import React from 'react';
import './App.css';
import WeatherComponent  from "./WeatherComponent";

const App = () => (
    <div className="App">            
        <h1>The Weather Network</h1>     
          <WeatherComponent forecastType="Current" />
    </div>
  );

export default App;
