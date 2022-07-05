import React from 'react';
import {useEffect} from "react";
import {fetchData} from "../helpers/apiCalls";
import Tile from "../components/tiles/Tile";


function Days({predictiveWeatherData, setPredictiveWeatherData}) {

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
                    <h2>Day page</h2>
                    <div className="GeneralPage">

                        <Tile title="Samenvatting"
                              colspan={3}
                              rowspan={2}>

                           <p>WIP</p>
                        </Tile>



                    </div>
                </>}


        </>
    );
}

export default Days;