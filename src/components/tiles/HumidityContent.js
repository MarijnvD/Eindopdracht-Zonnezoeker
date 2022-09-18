import React from 'react';
import './HumidityContent.css';
import {ReactComponent as Moisture} from "../../assets/icons/moisture.svg";

function HumidityContent({humidity, pressure}) {

    return (
        <div className="HumidityDetails">
            <table>
                <tbody>
                <tr>
                    <th>Luchtvochtigheid: </th>
                    <td>{humidity}</td>
                </tr>
                <tr>
                    <th>Luchtdruk: </th>
                    <td>{pressure}</td>
                </tr>
                </tbody>
            </table>

            <div className="icon">
                <Moisture/>
            </div>

        </div>
    );
}

export default HumidityContent;