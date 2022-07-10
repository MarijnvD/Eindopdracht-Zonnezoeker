import createRating from "./createRating";
import roundNumber from "../roundNumber";

function windSurfRating(temperature, windSpeed, rain) {
    const temperatureRating = 8
    const windRating = windSpeed < 2 ? 0 : createRating(windSpeed, 4, 5)
    const rainRating = 8

    return roundNumber((temperatureRating + windRating + rainRating) / 3, 2)
}

export default windSurfRating