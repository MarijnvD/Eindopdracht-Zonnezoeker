import roundNumber from "./roundNumber";

function meterToFeet(value){
    return `${roundNumber(value * 0.3048, 2)} f/s`;
}

export default meterToFeet;
