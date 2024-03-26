import React from "react";

export interface CitySelectionProps {
    state: StateType;
    selectedStates: Record<string, boolean>;
    setSelectedStates: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

interface StateType {
    abbreviation: string;
    name: string;
    icon: string;
}