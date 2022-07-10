import createRating from "./createRating";
import roundNumber from "../roundNumber";

function bikeRating(temperature, windSpeed, rain) {
    const temperatureRating = createRating(temperature, 18, 10)
    const windRating = createRating(windSpeed, 0, 5)
    const rainRating = createRating(rain, 0, 5)

    return roundNumber((temperatureRating + windRating + rainRating) / 3, 2)

}

export default bikeRating;