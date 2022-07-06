import React from 'react';
import {useEffect} from "react";
import {fetchData} from "../helpers/apiCalls";
import Tile from "../components/tiles/Tile";


function Hours({predictiveWeatherData, setPredictiveWeatherData}) {

    useEffect(() => {
            async function refreshData()
            {
                let lat = 52.092876
                let lon = 5.104480

                const data = await fetchData(lat, lon)
                setPredictiveWeatherData(data.data);

            }
            refreshData()
        }
        , []);

    return (
        <>
            {Object.keys(predictiveWeatherData).length > 0 &&
                <>
                    <h2>Voorspelling per uur</h2>
                    <div className="GeneralPage">

                        <Tile title="Samenvatting"
                              colspan={1}
                              rowspan={1}>

                            <p>WIP</p>
                        </Tile>
                    </div>
                </>}
        </>
    );
}

export default Hours;