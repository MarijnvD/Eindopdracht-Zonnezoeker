import axios from "axios";

// const API_KEY = "1924980abbef0fe303317049776d697d";
// // const API_KEY = "c5967feb556c940f18f444b9d0685e6e";

export async function fetchData(lat, lon) {

    try {
        const predictiveWeatherData = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
        console.log("data return APICALL", predictiveWeatherData);
        return predictiveWeatherData

    } catch (e) {
        console.error(e);
    }
}

export async function fetchDailyData(lat, lon) {

    try {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
        console.log("data return APICALL2", weatherData);
        return weatherData

    } catch (e) {
        console.error(e);
    }
}

export async function fetchLocationData(searchCity) {

    try {
        let LocationResult = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity},NL&appid=${process.env.REACT_APP_API_KEY}`);
        console.log("Location result ;",LocationResult);
        return [LocationResult.data[0].lat, LocationResult.data[0].lon];

    } catch (e) {
        console.error(e);
    }
}
