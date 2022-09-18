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



function Ratings({weatherData, setWeatherData, toggleToast, setToastText}) {

    useEffect(() => {


            async function refreshData() {

                try {
                    // Default values zodat ook zonder query de app volledig beschikbaar is
                    let lat = 52.092876
                    let lon = 5.104480

                    const data = await fetchDailyData(lat, lon)
                    setWeatherData(data.data);

                } catch (e) {
                    toggleToast(true)
                    setToastText("Er is iets verkeerd gegaan bij het refreshen van de data, check je connectie!")
                }
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

                        <Tile title="Barbeque Cijfer"
                                       colspan={1}
                                       rowspan={1}>

                            <h4>{bbqRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>

                        </Tile>
                        <Tile title="Strand Cijfer"
                                       colspan={1}
                                       rowspan={1}>

                            <h4>{beachRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>
                        </Tile>
                        <Tile title="Fiets Cijfer"
                                       colspan={1}
                                       rowspan={1}>

                            <h4>{bikeRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>
                        </Tile>
                        <Tile title="Wandel Cijfer"
                                       colspan={1}
                                       rowspan={1}>

                            <h4>{hikeRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>
                        </Tile>
                        <Tile title="Netflix & Chill Cijfer"
                                       colspan={1}
                                       rowspan={1}>

                            <h4>{netflixChillRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>
                        </Tile>
                        <Tile title="Studie Cijfer"
                                       colspan={1}
                                       rowspan={1}>

                            <h4>{studyRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>
                        </Tile>

                        <Tile title="Programmeer Cijfer"
                                       colspan={1}
                                       rowspan={1}>

                            <h4>{programmingRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>
                        </Tile>
                        <Tile title="Windsurf Cijfer"
                                       colspan={1}
                                       rowspan={1}>

                            <h4>{windSurfRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>
                        </Tile>

                        <Tile title="Terras Cijfer"
                              colspan={1}
                              rowspan={1}>

                            <h4>{bbqRating(weatherData.main.temp, weatherData.wind.speed, 0)}</h4>

                        </Tile>
                    </div>
                </>}
        </>
    );
}

export default Ratings;