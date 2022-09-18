import React, {useState} from 'react';
import './SearchBar.css';
import {fetchDailyData, fetchData, fetchLocationData} from "../../helpers/apiCalls";

function SearchBar({setWeatherData, setPredictiveWeatherData, toggleToast, setToastText}) {

    const [query, setQuery] = useState('');

    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            const [lat, lon] = await fetchLocationData(query)
            const data = await fetchDailyData(lat, lon)

            setWeatherData(data.data)

            const predictiveData = await fetchData(lat, lon)

            setPredictiveWeatherData(predictiveData.data)
        } catch (e) {
            toggleToast(true)
            setToastText("Huidige plaatsnaam niet gevonden! Controleer de spelling van de plaatsnaam. ")
        }
    }

    return (
        <form className="searchbar" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek een stad in Nederland"
            />

            <button type="submit"> Zoek</button>
        </form>
    );
}

export default SearchBar;