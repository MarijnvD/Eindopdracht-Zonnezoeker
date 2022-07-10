import React from 'react';
import {useEffect} from "react";
import {fetchData} from "../helpers/apiCalls";
import PredictionTile from "../components/tiles/PredictionTile";
import {useContext} from "react";
import {TempContext} from "../context/TempProvider";
import timeConverter from "../helpers/timeConverter";
import convertHumidity from "../helpers/convertHumidity";
import convertPressure from "../helpers/convertPressure";
import windDirectionIconMapper from "../helpers/windDirectionIconMapper";

function Hours({predictiveWeatherData, setPredictiveWeatherData}) {

    useEffect(() => {
            async function refreshData() {
                let lat = 52.092876
                let lon = 5.104480

                const data = await fetchData(lat, lon)
                setPredictiveWeatherData(data.data);
            }

            refreshData()
        }
        , []);

    const hourPrediction = predictiveWeatherData.hourly
    const {kelvinToMetric} = useContext(TempContext);

    return (
        <>
            {Object.keys(predictiveWeatherData).length > 0 &&
                <>
                    <h2>Voorspelling voor de volgende 48 uur</h2>
                    <div className="GeneralPage">
                        {hourPrediction.map((hourArray) => {
                            return <PredictionTile
                                key={hourArray.dt}
                                temp={kelvinToMetric(hourArray.temp)}
                                title={timeConverter(hourArray.dt)}
                                feelsLike={kelvinToMetric(hourArray.feels_like)}
                                pressure={convertPressure(hourArray.pressure)}
                                humidity={convertHumidity(hourArray.humidity)}
                                icon={windDirectionIconMapper(hourArray.wind_deg)}
                                windtest={hourArray.wind_deg}
                                colspan={1}
                                rowspan={1}
                            />
                        })}
                    </div>
                </>}
        </>
    );
}

export default Hours;