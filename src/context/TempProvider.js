import React, {createContext, useState} from 'react';
import kelvinToFahrenheit from "../helpers/kelvinToFahrenheit";
import kelvinToCelcius from "../helpers/kelvinToCelcius";
import meterToFeet from "../helpers/MetersToFeet";
import meters from "../helpers/feetToMeters";

export const TempContext = createContext(null);

function TempContextProvider({children}) {

    const [selectedMetric, toggleSelectedMetric] = useState('fahrenheit');

    function toggleTemp() {
        if (selectedMetric === 'celcius') {
            toggleSelectedMetric('fahrenheit');
        } else {
            toggleSelectedMetric('celcius');
        }
    }

    return (
        <TempContext.Provider value={{
            toggleTemp: toggleTemp,
            kelvinToMetric: selectedMetric === 'celcius' ? kelvinToCelcius : kelvinToFahrenheit,
            freedomToNormal: selectedMetric === 'celcius' ? meters : meterToFeet,
        }}>
            {children}
        </TempContext.Provider>
    );
}

export default TempContextProvider;