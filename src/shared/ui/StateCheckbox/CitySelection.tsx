import {FC} from "react";
import {CitySelectionProps} from "./CitySelection.props"
import "./CitySelection.scss"

const CitySelection: FC<CitySelectionProps> = ({ state, setSelectedStates, selectedStates}) => {

    return (
        <div
            onClick={() => setSelectedStates((prevState: Record<string, boolean>) =>
                ({...prevState, [state.abbreviation]: !prevState[state.abbreviation]}))}>
            <div className={`checkbox ${selectedStates[state.abbreviation] ? "checked" : ''}`}
                 id={`input-${state.abbreviation}`}/>
            <img src={state.icon} alt="City Icon"/>
            <label htmlFor={`input-${state.abbreviation}`}>{state.name}</label>
        </div>
    );
}

export default CitySelection;



