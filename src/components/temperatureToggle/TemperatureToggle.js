import React, {useContext, useEffect, useState} from 'react';
import './TemperatureToggle.css';
import {TempContext} from "../../context/TempProvider";

const TemperatureToggle = () => {
    const [checked, toggleChecked] = useState(false);
    const {toggleTemp} = useContext(TempContext);

    useEffect(() => {
        toggleTemp();
    }, [checked]);

    return (
        <div className="unitSwitch">
            <p className="unitSwitch-label">
                C &deg;
            </p>

            <span className="unitSwitch-wrapper">
        <input
            type="checkbox"
            className="switch"
            id="metric-system"
            checked={checked}
            onChange={() => toggleChecked(!checked)}
        />

        <label
            htmlFor="metric-system"
            className="switch-btn"
        />
      </span>

            <p className="unitSwitch-label">
                &deg; F
            </p>
        </div>
    );
}

export default TemperatureToggle;