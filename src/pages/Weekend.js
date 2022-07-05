import React from 'react';
import Tile from "../components/tiles/Tile";
import {Link} from "react-router-dom";

function Weekend() {

    return (

        <div className="GeneralPage">
            <h1>Weekend pagina</h1>

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

export default Weekend;

