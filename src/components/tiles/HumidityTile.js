import React from 'react';
import './HumidityTile.css';


function HumidityTile({humidity, pressure}) {

    return (
        <div className="HumidityDetails">
            <table>
                <tbody>
                <tr>
                    <th>Luchtvochtigheid</th>
                    <td>Enorm vochtig</td>
                </tr>
                <tr>
                    <th>Luchtdruk</th>
                    <td>Erg drukkerig</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default HumidityTile;