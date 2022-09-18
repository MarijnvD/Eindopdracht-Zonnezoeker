import {fetchDailyData} from "../helpers/apiCalls";
import React, {useContext, useEffect} from 'react';
import Tile from "../components/tiles/Tile";
import SummaryContent from "../components/tiles/SummaryContent";
import iconMapper from "../helpers/iconMapper";
import WindContent from "../components/tiles/WindContent";
import HumidityContent from "../components/tiles/HumidityContent";
import LocationContent from "../components/tiles/LocationContent";
import timeConverter from "../helpers/timeConverter";
import windDirection from "../helpers/windDirection";
import windDirectionIconMapper from "../helpers/windDirectionIconMapper";
import {TempContext} from "../context/TempProvider";
import convertPressure from "../helpers/convertPressure";
import convertHumidity from "../helpers/convertHumidity";
import SundetailsContent from "../components/tiles/SundetailsContent";
import PercipitationContent from "../components/tiles/PercipitationContent";

function Home({weatherData, setWeatherData, toggleToast, setToastText}) {

    const {kelvinToMetric} = useContext(TempContext);
    const {freedomToNormal} = useContext(TempContext);

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

                    <h2>Home</h2>
                    <main className="GeneralPage">

                        <Tile title="Samenvatting"
                              colspan={2}
                              rowspan={2}>

                            <SummaryContent temp={kelvinToMetric(weatherData.main.temp)}
                                            feelsAs={kelvinToMetric(weatherData.main.feels_like)}
                                            icon={iconMapper(weatherData.weather[0].main)}
                                            description={weatherData.weather[0].description}
                            />
                        </Tile>

                        <Tile title="Wind"
                              colspan={1}
                              rowspan={1}>

                            <WindContent direction={windDirection(weatherData.wind.deg)}
                                         speed={freedomToNormal(weatherData.wind.speed)}
                                         icon={windDirectionIconMapper(weatherData.wind.deg)}
                            />
                        </Tile>

                        <Tile title="Luchtvochtigheid"
                              colspan={1}
                              rowspan={1}>

                            <HumidityContent humidity={convertHumidity(weatherData.main.humidity)}
                                             pressure={convertPressure(weatherData.main.pressure)}
                            />
                        </Tile>

                        <Tile title="Locatie"
                              colspan={1}
                              rowspan={1}>

                            <LocationContent location={weatherData.name}
                                             lon={weatherData.coord.lon}
                                             lat={weatherData.coord.lat}
                                             country={weatherData.sys.country}
                            />

                        </Tile>

                        <Tile title="Zontijden"
                              colspan={1}
                              rowspan={1}>
                            <SundetailsContent sunRise={timeConverter(weatherData.sys.sunrise)}
                                           sunSet={timeConverter(weatherData.sys.sunset)}
                            />
                        </Tile>

                        <Tile title="Neerslag"
                              colspan={1}
                              rowspan={1}>
                            <PercipitationContent precipitation={weatherData.rain }

                            />
                        </Tile>
                    </main>
                </>}
        </>
    );
}

export default Home;