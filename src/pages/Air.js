import React from 'react';
import Tile from "../components/tiles/Tile";
import VerticalTile from "../components/tiles/VerticalTile";
import {Link} from "react-router-dom";
import PageTile from "../components/tiles/PageTile";

function Air() {
    return (
        <PageTile>

            <div className="GeneralPage">
                <h1>Air pagina</h1>
                <VerticalTile>
                    <section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem doloribus dolorum eaque earum inventore mollitia porro quidem voluptatem voluptates.
                    </section>
                </VerticalTile>

                <VerticalTile>
                    <section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem doloribus dolorum eaque earum inventore mollitia porro quidem voluptatem voluptates.

                    </section>
                </VerticalTile>

                <div>
                    <Tile>
                        <p>Terug naar de <Link to="/">Homepagina</Link></p>
                    </Tile>

                    <Tile>
                        <p>Terug naar de <Link to="/">Homepagina</Link></p>
                    </Tile>
                </div>

            </div>
        </PageTile>
    );
}

export default Air;