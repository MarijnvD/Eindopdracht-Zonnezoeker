import React from 'react';
import {useEffect} from "react";
import {fetchData} from "../helpers/apiCalls";
import PredictionContent from "../components/tiles/PredictionContent";
import {useContext} from "react";
import {TempContext} from "../context/TempProvider";
import timeConverter from "../helpers/timeConverter";
import convertHumidity from "../helpers/convertHumidity";
import convertPressure from "../helpers/convertPressure";
import windDirectionIconMapper from "../helpers/windDirectionIconMapper";

function Hours({predictiveWeatherData, setPredictiveWeatherData, toggleToast, setToastText}) {

    useEffect(() => {
            async function refreshData() {

                try {
                    let lat = 52.092876
                    let lon = 5.104480

                    const data = await fetchData(lat, lon)
                    setPredictiveWeatherData(data.data);
                } catch (e) {
                    toggleToast(true)
                    setToastText("Er is iets verkeerd gegaan bij het refreshen van de data, check je connectie!")
                }
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
                            return <PredictionContent
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