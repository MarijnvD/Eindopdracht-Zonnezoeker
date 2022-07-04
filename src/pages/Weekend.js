import React from 'react';
import windSurfRating from "../helpers/ratingHelpers/windSurfRating";
import bbqRating from "../helpers/ratingHelpers/bbqRating";
import beachRating from "../helpers/ratingHelpers/beachRating";
import programmingRating from "../helpers/ratingHelpers/programmingRating";
import netflixChillRating from "../helpers/ratingHelpers/netflixChillRating";
import studyRating from "../helpers/ratingHelpers/studyRating";
import bikeRating from "../helpers/ratingHelpers/bikeRating";
import hikeRating from "../helpers/ratingHelpers/hikeRating";
import VerticalTile from "../components/tiles/VerticalTile";
import Tile from "../components/tiles/Tile";
import {Link} from "react-router-dom";
import PageTile from "../components/tiles/PageTile";


function Weekend() {


    return (
    <PageTile>

        <div className="GeneralPage">
            <h1>Weekend pagina</h1>
            <VerticalTile>
                <section>
                    <p>De windsurfrating is: {windSurfRating(8,4,8)}</p>
                    <p>De bbqRating is: {bbqRating(8,4,8)}</p>
                    <p>De beachRating is: {beachRating(8,4,8)}</p>
                    <p>De programmingRating is: {programmingRating(8,4,8)}</p>
                </section>
            </VerticalTile>

            <VerticalTile>
                <section>
                    <p>De netflixChillRating is: {netflixChillRating(8,4,8)}</p>
                    <p>De studyRating is: {studyRating(8,4,8)}</p>
                    <p>De bikerating is: {bikeRating(8,4,8)}</p>
                    <p>De hike rating  is: {hikeRating(8,4,8)}</p>

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

export default Weekend;

