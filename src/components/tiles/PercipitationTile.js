import React from 'react';
import './PercipitationTile.css';
import {ReactComponent as Rain} from '../../assets/icons/rain.svg';

function PrecipitationTile({precipitation}) {

    return (
        <div className="percipitationdetails">
            <div className="rainContent">
                <p>{precipitation}</p>
            </div>

            <div className="icon">
                <Rain/>
            </div>
        </div>
    );
}

export default PrecipitationTile;