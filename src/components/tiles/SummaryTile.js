import React from 'react';
import './SummaryTile.css';

function SummaryTile({temp, feelsAs, icon, description }) {

    return (
        <>
            <div className="middleBar">
                <span className="temperature">{temp}</span>
                <div className="icon">
                    {icon}
                </div>
            </div>
            <div className="bottomBar">
                <span className="description">{description}</span> <br/>
                <span className="feelsAs">Gevoelstemperatuur: {feelsAs}</span>
            </div>
        </>
    );
}

export default SummaryTile;