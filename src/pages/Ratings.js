import React from 'react';
import {useEffect} from "react";
import {fetchDailyData} from "../helpers/apiCalls";
import Tile from "../components/tiles/Tile";
import bbqRating from "../helpers/ratingHelpers/bbqRating";
import studyRating from "../helpers/ratingHelpers/studyRating";
import hikeRating from "../helpers/ratingHelpers/hikeRating";
import bikeRating from "../helpers/ratingHelpers/bikeRating";
import beachRating from "../helpers/ratingHelpers/beachRating";
import netflixChillRating from "../helpers/ratingHelpers/netflixChillRating";
import programmingRating from "../helpers/ratingHelpers/programmingRating";
import windSurfRating from "../helpers/ratingHelpers/windSurfRating";
import RatingTile from "../components/tiles/RatingTile";


function Ratings({weatherData, setWeatherData}) {

    useEffect(() => {
            async function refreshData() {

                // Default values zodat ook zonder query de app volledig beschikbaar is
                let lat = 52.092876
                let lon = 5.104480

                const data = await fetchDailyData(lat, lon)
                setWeatherData(data.data);
            }

            refreshData()
        }
        , []);

    return (
        <>
            {Object.keys(weatherData).length > 0 &&
                <>
                    <h2>Rating Pagina</h2>
                    <div className="GeneralPage">

                        <RatingTile title="Barbeque Cijfer"
                              colspan={1}
                              rowspan={1}>

                           <p>{bbqRating(weatherData.main.temp, weatherData.wind.speed,0)}</p>

                        </RatingTile>
                        <RatingTile title="Strand Cijfer"
                              colspan={1}
                              rowspan={1}>

                            <p>{beachRating(weatherData.main.temp, weatherData.wind.speed,0)}</p>
                        </RatingTile>
                        <RatingTile title="Fiets Cijfer"
                              colspan={1}
                              rowspan={1}>

                            <p>{bikeRating(weatherData.main.temp, weatherData.wind.speed,0)}</p>
                        </RatingTile>
                        <RatingTile title="Wandel Cijfer"
                              colspan={1}
                              rowspan={1}>

                            <p>{hikeRating(weatherData.main.temp, weatherData.wind.speed,0)}</p>
                        </RatingTile>
                        <RatingTile title="Netflix & Chill Cijfer"
                              colspan={1}
                              rowspan={1}>

                            <p>{netflixChillRating(weatherData.main.temp, weatherData.wind.speed,0)}</p>
                        </RatingTile>
                        <RatingTile title="Studie Cijfer"
                              colspan={1}
                              rowspan={1}>

                            <p>{studyRating(weatherData.main.temp, weatherData.wind.speed,0)}</p>
                        </RatingTile>

                        <RatingTile title="Programmeer Cijfer"
                              colspan={1}
                              rowspan={1}>

                            <p>{programmingRating(weatherData.main.temp, weatherData.wind.speed,0)}</p>
                        </RatingTile>
                        <RatingTile title="Windsurf Cijfer"
                              colspan={1}
                              rowspan={1}>

                            <p>{windSurfRating(weatherData.main.temp, weatherData.wind.speed,0)}</p>
                        </RatingTile>
                    </div>
                </>}
        </>
    );
}

export default Ratings;