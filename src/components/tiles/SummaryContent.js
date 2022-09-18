import React from 'react';
import './SummaryContent.css';

function SummaryContent({temp, feelsAs, icon, description}) {

    return (
        <>
            <div className="summaryDetails">
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
            </div>
        </>
    );
}

export default SummaryContent;