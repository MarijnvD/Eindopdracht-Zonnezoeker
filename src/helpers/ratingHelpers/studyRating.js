import createRating from "./createRating";
import roundNumber from "../roundNumber";

function studyRating(temperature, windSpeed, rain) {
    const temperatureRating = createRating(temperature, 11, 30)
    const windRating = windSpeed > 5 ? 10 : createRating(windSpeed, 5, 10)
    const rainRating = rain > 5 ? 10 : createRating(rain, 5, 10)

    return roundNumber((temperatureRating + windRating + rainRating) / 3, 2)
}

export default studyRating