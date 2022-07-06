import React from 'react';
import './PercipitationTile.css';
import {ReactComponent as Rain} from '../../assets/icons/rain.svg';

function PrecipitationTile({precipitation}) {

    return (
        <div className="precipitationDetails">
            <div className="rainContent">
                <p>Neerslag: {precipitation}</p>
            </div>

            <div className="icon">
                <Rain/>
            </div>
        </div>
    );
}

export default PrecipitationTile;