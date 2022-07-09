import React from 'react';
import './Tile.css';

function PredictionTile({title, rowspan, colspan, temp, feelsLike, pressure, humidity, icon, windtest}) {

    return (
        <div className={"tile rowspan" + rowspan + " colspan" + colspan}>
            <div className="topBar">{title}</div>
            <div className="predictionContent">

                <table>
                    <tbody>
                    <tr>
                        <th>Temperatuur:</th>
                        <td>{temp}</td>
                    </tr>
                    <tr>
                        <th>Gevoelstemperatuur:</th>
                        <td>{feelsLike}</td>
                    </tr>
                    <tr>
                        <th>Luchtdruk:</th>
                        <td>{pressure}</td>
                    </tr>
                    <tr>
                        <th>Luchtvochtigheid:</th>
                        <td>{humidity}</td>
                    </tr>
                    </tbody>
                </table>

                <div className="icon">
                    {icon}
                </div>
            </div>

        </div>
    );
}

export default PredictionTile;

