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
        abbreviation: "Мск",
        icon: city
    }, {
        name: "Санкт-Петербург",
        abbreviation: "Спб",
        icon: one
    }, {
        name: "Новосибирск",
        abbreviation: "Нск",
        icon: scape
    }
];