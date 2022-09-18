function windDirection(windDegrees) {

    const direction = (windDegrees + 11.25) % 360

    if (direction <= 22.5) {
        return windDegrees + "°  N"
    } else if (direction <= 45) {
        return windDegrees + "°  NNO";
    } else if (direction <= 67.5) {
        return windDegrees + "°  NO";
    } else if (direction <= 90) {
        return windDegrees + "°  ONO";
    } else if (direction <= 112.5) {
        return windDegrees + "°  O";
    } else if (direction <= 135) {
        return windDegrees + "°  OZO";
    } else if (direction <= 157.5) {
        return windDegrees + "°  ZO";
    } else if (direction <= 180) {
        return windDegrees + "°  ZZO";
    } else if (direction <= 202.5) {
        return windDegrees + "°  Z";
    } else if (direction <= 225) {
        return windDegrees + "°  ZZW";
    } else if (direction <= 247.5) {
        return windDegrees + "°  ZW";
    } else if (direction <= 270) {
        return windDegrees + "°  WZW";
    } else if (direction <= 292.5) {
        return windDegrees + "°  W";
    } else if (direction <= 315) {
        return windDegrees + "°  WNW";
    } else if (direction <= 337.5) {
        return windDegrees + "°  NW";
    } else {
        return windDegrees + "°  NNW";
    }
}

export default windDirection;