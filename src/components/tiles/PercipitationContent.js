import React from 'react';
import './PercipitationContent.css';
import {ReactComponent as Rain} from '../../assets/icons/rain.svg';

function PrecipitationTile({precipitation}) {

    const noRain = "Morgen geen neerslag verwacht!"

    return (

        <div className="precipitationDetails">
            <div className="rainContent">

                <p>{noRain}{precipitation}</p>
            </div>

            <div className="icon">
                <Rain/>
            </div>
        </div>
    );
}

export default PrecipitationTile;