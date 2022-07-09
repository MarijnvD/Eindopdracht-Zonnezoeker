import React from 'react';
import './LocationTile.css';
import {ReactComponent as Location} from "../../assets/icons/location.svg";

function LocationTile({location, lon, lat, country}) {

    return (
        <div className="locationDetails">
            <table>
                <tbody>
                <tr>
                    <th>Locatie:</th>
                    <td>{location}</td>
                </tr>
                <tr>
                    <th>Lengte:</th>
                    <td>{lon}</td>
                </tr>
                <tr>
                    <th>Breedte:</th>
                    <td>{lat}</td>
                </tr>
                <tr>
                    <th>Land:</th>
                    <td>{country}</td>
                </tr>
                </tbody>
            </table>

            <div className="icon">
                <Location/>
            </div>
        </div>
    );
}

export default LocationTile;