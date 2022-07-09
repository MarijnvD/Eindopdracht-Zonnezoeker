import React from 'react';
import './WindTile.css';

function WindTile({direction, speed, icon}) {

    return (
        <div className="windDetails">
            <div className="icon">
                {icon}
            </div>
            <table>
                <tbody>
                <tr>
                    <th>Wind richting:</th>
                    <td>{direction}</td>
                </tr>
                <tr>
                    <th>Wind snelheid:</th>
                    <td>{speed}</td>
                </tr>
                </tbody>
            </table>
        </div>

    );
}

export default WindTile;