import {ReactComponent as East} from "../assets/icons/wind-e.svg";
import {ReactComponent as North} from "../assets/icons/wind-n.svg";
import {ReactComponent as NorthEast} from "../assets/icons/wind-ne.svg";
import {ReactComponent as NorthWest} from "../assets/icons/wind-nw.svg";
import {ReactComponent as South} from "../assets/icons/wind-s.svg";
import {ReactComponent as SouthEast} from "../assets/icons/wind-se.svg";
import {ReactComponent as SouthWest} from "../assets/icons/wind-sw.svg";
import {ReactComponent as West} from "../assets/icons/wind-w.svg";
import {ReactComponent as Default} from "../assets/icons/logoZonnezoeker.svg";
import React from "react";
import windDirection from "./windDirection";

function windDirectionIconMapper(windDegrees) {

    const banaan = windDirection(windDegrees)
    const druiven = banaan.split(" ")
    const input = druiven[2]

    switch (input) {
        case 'N':
        case 'NNO':
            return <North/>;
        case 'NO':
        case 'ONO':
            return <NorthEast/>;
        case 'O':
        case 'OZO':
            return <East/>;
        case 'ZO':
        case 'ZZO':
            return <SouthEast/>;
        case 'Z':
        case 'ZZW':
            return <South/>;
        case 'ZW':
        case 'WZW':
            return <SouthWest/>;
        case 'W':
        case 'WNW':
            return <West/>;
        case 'NW':
        case 'NNW':
            return <NorthWest/>;
        default:
            return <Default/>;
    }
}

export default windDirectionIconMapper;