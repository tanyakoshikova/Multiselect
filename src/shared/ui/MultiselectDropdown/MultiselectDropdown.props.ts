import moscow from "./icons/moscow.svg";
import saintPetersburg from "./icons/saintPetersburg.svg";
import novosibirsk from "./icons/novosibirsk.svg";
import {City} from "../../interfaces/types";

export interface MultiselectDropdownProps {
    cities: City[];
}

export const cities: City[] = [
    {
        name: "Москва",
        abbreviation: "Мск",
        icon: moscow
    }, {
        name: "Санкт-Петербург",
        abbreviation: "Спб",
        icon: saintPetersburg
    }, {
        name: "Новосибирск",
        abbreviation: "Нск",
        icon: novosibirsk
    }
];