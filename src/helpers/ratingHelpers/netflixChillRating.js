import createRating from "./createRating";
import roundNumber from "../roundNumber";

function netflixChillRating(temperature, windSpeed, rain) {
    const temperatureRating = temperature < 10 ? 10 : createRating(temperature, 10, 20)
    const windRating = windSpeed > 5 ? 10 : createRating(windSpeed, 5, 10)
    const rainRating = rain > 5 ? 10 : createRating(rain, 5, 10)

    return roundNumber((temperatureRating + windRating + rainRating) / 3, 2)
}

export default netflixChillRating