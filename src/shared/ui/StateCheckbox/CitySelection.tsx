import {FC} from "react";
import "./CitySelection.scss"
import {CityProps} from "../../interfaces/types";

const CitySelection: FC<CityProps> = ({ state, setSelectedStates, selectedStates}) => {

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



