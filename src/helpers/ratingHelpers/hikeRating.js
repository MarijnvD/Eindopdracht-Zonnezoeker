import createRating from "./createRating";
import roundNumber from "../roundNumber";

function hikeRating(temperature, windSpeed, rain) {
    const temperatureRating = createRating(temperature, 17, 20)
    const windRating = createRating(windSpeed, 1, 10)
    const rainRating = createRating(rain, 0, 6)

    return roundNumber((temperatureRating + windRating + rainRating) / 3, 2)
}

export default hikeRating