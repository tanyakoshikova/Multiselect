import city from "./icons/city.svg";
import one from "./icons/one.svg";
import scape from "./icons/scape.svg";
import {City} from "../../interfaces/types";

export interface MultiselectDropdownProps {
    cities: City[];
}

export const cities: City[] = [
    {
        name: "Москва",
        abbreviation: "Москва",
        icon: city
    }, {
        name: "Санкт-Петербург",
        abbreviation: "Санкт-Петербург",
        icon: one
    }, {
        name: "Новосибирск",
        abbreviation: "Новосибирск",
        icon: scape
    }
];