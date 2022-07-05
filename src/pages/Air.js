import React from 'react';
import Tile from "../components/tiles/Tile";
import {Link} from "react-router-dom";


function Air() {
    return (


        <div className="GeneralPage">
            <h1>Air pagina</h1>

            <div>
                <Tile>
                    <p>Terug naar de <Link to="/">Homepagina</Link></p>
                </Tile>

                <Tile>
                    <p>Terug naar de <Link to="/">Homepagina</Link></p>
                </Tile>
            </div>

        </div>

    );
}

export default Air;