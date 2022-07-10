import React from 'react';
import './SundetailsTile.css';
import {ReactComponent as Sun} from "../../assets/icons/sun.svg";

function SunDetailTile({sunRise, sunSet}) {

    return (
        <div className="sunDetails">
            <table>
                <tbody>
                <tr>
                    <th>Zonsopkomst:</th>
                    <td>{sunRise}</td>
                </tr>
                <tr>
                    <th>Zonsondergang:</th>
                    <td>{sunSet}</td>
                </tr>
                </tbody>
            </table>

            <div className="icon">
                <Sun/>
            </div>
        </div>
    );
}

export default SunDetailTile;