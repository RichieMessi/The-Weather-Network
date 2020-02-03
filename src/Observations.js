import React, { Fragment } from "react";
import Conditions from './Conditions';

export default ({ cityName }) => (
            <Fragment>
                <h3>Observations {cityName} </h3>
                <p>Current Temp: 30&deg;C</p>
                <Conditions />
            </Fragment>
        )
