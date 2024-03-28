import React from "react";

export interface City {
    name: string;
    abbreviation: string;
    icon?: string;
}

export interface CityProps {
    state: City;
    selectedStates: Record<string, boolean>;
    setSelectedStates: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}











