import {fetchDailyData} from "../helpers/apiCalls";
import React, {useContext, useEffect} from 'react';
import Tile from "../components/tiles/Tile";
import SummaryTile from "../components/tiles/SummaryTile";
import iconMapper from "../helpers/iconMapper";
import WindTile from "../components/tiles/WindTile";
import HumidityTile from "../components/tiles/HumidityTile";
import LocationTile from "../components/tiles/LocationTile";
import SundetailTile from "../components/tiles/SundetailsTile";
import PercipitationTile from "../components/tiles/PercipitationTile";
import timeConverter from "../helpers/timeConverter";
import windDirection from "../helpers/windDirection";
import windDirectionIconMapper from "../helpers/windDirectionIconMapper";
import {TempContext} from "../context/TempProvider";

function Home({weatherData, setWeatherData}) {

    const {kelvinToMetric} = useContext(TempContext);
    const {freedomToNormal} = useContext(TempContext);

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
                    <h2>Home</h2>
                    <div className="GeneralPage">

                        <Tile title="Samenvatting"
                              colspan={2}
                              rowspan={2}>

                            <SummaryTile temp={kelvinToMetric(weatherData.main.temp)}
                                         feelsAs={kelvinToMetric(weatherData.main.feels_like)}
                                         icon={iconMapper(weatherData.weather[0].main)}
                                         description={weatherData.weather[0].description}
                            />
                        </Tile>

                        <Tile title="Wind"
                              colspan={1}
                              rowspan={1}>

                            <WindTile direction={windDirection(weatherData.wind.deg)}
                                      speed={freedomToNormal(weatherData.wind.speed)}
                                      icon={windDirectionIconMapper(weatherData.wind.deg)}
                            />
                        </Tile>

                        <Tile title="Luchtvochtigheid"
                              colspan={1}
                              rowspan={1}>

                            <HumidityTile

                            />
                        </Tile>

                        <Tile title="Locatie"
                              colspan={1}
                              rowspan={1}>

                            <LocationTile location={weatherData.name}
                                          lon={weatherData.coord.lon}
                                          lat={weatherData.coord.lat}
                                          country={weatherData.sys.country}
                            />

                        </Tile>

                        <Tile title="Zontijden"
                              colspan={1}
                              rowspan={1}>
                            <SundetailTile sunRise={timeConverter(weatherData.sys.sunrise)}
                                           sunSet={timeConverter(weatherData.sys.sunset)}
                            />
                        </Tile>

                        <Tile title="Neerslag"
                              colspan={1}
                              rowspan={1}>
                            <PercipitationTile

                            />
                        </Tile>
                    </div>
                </>}
        </>
    );
}

export default Home;