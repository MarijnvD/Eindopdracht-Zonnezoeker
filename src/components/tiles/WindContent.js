import React from 'react';
import './WindContent.css';

function WindContent({direction, speed, icon}) {

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

export default WindContent;