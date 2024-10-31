import {useNavigate} from "react-router-dom";
import {IPersonResult} from "./interfaces";

export function goExternal(url: string) {
    window.open(url);
}

export function fullPerson(item: IPersonResult) {
    const bj: boolean = item.geboortejaar !== undefined && item.geboortejaar !== "";
    const dj: boolean = item.overlijdensjaar !== undefined && item.overlijdensjaar !== "";
    const name = item.geslachtsnaam + ', ' + item.voornaam + ' ' + item.tussenvoegsel;
    if (bj && dj) {
        return name + " ( " + item.geboortejaar + " - " + item.overlijdensjaar + " )";
    } else {
        if (bj) {
            return name + " ( " + item.geboortejaar + " -  )";
        } else {
            if (dj) {
                return name + " (  - " + item.overlijdensjaar + " )";
            } else {
                return name;
            }
        }
    }
}


export function fd(str: string | undefined) {
    let elements = [];
    if (str !== undefined) {
        elements = str.split('-');
        if (elements.length === 3) {
            return elements[2] + "-" + elements[1] + "-" + elements[0];
        } else {
            return str;
        }
    } else {
        return str;
    }
}

export function get_gender(str: string) {
    switch(str) {
        case 'M':
            return "Male";
        case "F":
            return "Female";
        default:
            return "Unknown";
    }
}

export function get_entity(str: string) {
    switch(str) {
        case 'Y':
            return "Organisation";
        case "N":
            return "Person";
        default:
            return "Unknown";
    }
}