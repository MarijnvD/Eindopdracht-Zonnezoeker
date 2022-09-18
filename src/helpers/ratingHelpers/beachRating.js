import createRating from "./createRating";
import roundNumber from "../roundNumber";

function beachRating(temperature, windSpeed, rain) {
    const temperatureRating = createRating(temperature, 23, 20)
    const windRating = createRating(windSpeed, 1, 10)
    const rainRating = rain !== 0 ? 0 : 10

    return roundNumber((temperatureRating + windRating + rainRating) / 3, 2)

}

export default beachRating;