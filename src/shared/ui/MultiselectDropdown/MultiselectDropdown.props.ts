import city from "./icons/city.svg";
import one from "./icons/one.svg";
import scape from "./icons/scape.svg";

export interface City {
    name: string;
    abbreviation: string;
    icon: string;
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