import React, { useState, useEffect, Fragment } from "react";
import Observations from './Observations';

export default ({ forecastType }) => {

  useEffect(() => {
    console.warn('Runs at the inital render of the component (Replacement for componendDidMount lifecycle function')
  }, [])

  const [nextForecastPeriod, setNextForcastPeriod] = useState('Overnight')

  const handleClick = () => setNextForcastPeriod('Morning')

        return (            
                <Fragment>
                    <h2 style={{color: "crimson"}}>Weather Forecast { forecastType }</h2>
                    <Observations  cityName="Toronto" />
                    <hr />
                    <h2 style={{color: "crimson"}} >{ nextForecastPeriod }</h2>
                    <button onClick={handleClick}>Switch Forecast Period</button>
                </Fragment>      
        )
};
