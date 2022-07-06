import createRating from "./createRating";
import roundNumber from "../roundNumber";


function bbqRating(temperature, windSpeed, rain) {

    const kelvinToCelsius = temperature - 273

    const temperatureRating = createRating(kelvinToCelsius, 22, 20)
    const windRating = createRating(windSpeed, 0, 10)
    const rainRating =createRating(rain, 0, 5)

    return roundNumber((temperatureRating + windRating + rainRating) / 3, 2)

}

export default bbqRating;