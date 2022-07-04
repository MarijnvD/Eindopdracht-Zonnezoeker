import React from 'react';
import './PercipitationTile.css';
import {ReactComponent as Rain} from '../../assets/icons/rain.svg';


function PercipitationTile({percipitation}) {

    return (
        <div className="percipitationdetails">
            <div className="rainContent">
                <p>Geen neerslag verwacht!</p>
                <div className="icon"><Rain/></div>
            </div>

        </div>
    );
}

export default PercipitationTile;