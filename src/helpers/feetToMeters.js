import roundNumber from "./roundNumber";

function meters(value){
    return `${roundNumber(value, 2)} m/s`;
}

export default meters;