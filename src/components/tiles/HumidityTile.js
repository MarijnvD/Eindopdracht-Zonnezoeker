import React from 'react';
import './HumidityTile.css';
import {ReactComponent as Moisture} from "../../assets/icons/moisture.svg";
import convertHumidity from "../../helpers/convertHumidity";
import convertPressure from "../../helpers/convertPressure";

function HumidityTile({humidity, pressure}) {

    return (
        <div className="HumidityDetails">
            <table>
                <tbody>
                <tr>
                    <th>Luchtvochtigheid: </th>
                    <td>{convertHumidity(humidity)}</td>
                </tr>
                <tr>
                    <th>Luchtdruk: </th>
                    <td>{convertPressure(pressure)}</td>
                </tr>
                </tbody>
            </table>

            <div className="icon">
                <Moisture/>
            </div>

        </div>
    );
}

export default HumidityTile;