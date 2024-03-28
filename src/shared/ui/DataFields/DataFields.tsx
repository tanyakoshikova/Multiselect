import {FC} from "react";
import "./DataFields.scss";
import CitySelection from "../StateCheckbox/CitySelection";
import {CityProps} from "../../interfaces/types";

const DataFields: FC<CityProps> = ({
                                             state,
                                             selectedStates,
                                             setSelectedStates
                                         }) => {
    return (
        <fieldset className={selectedStates[state.abbreviation] ? "selected ": ''}>
            <CitySelection key={state.abbreviation} state={state} selectedStates={selectedStates}
                           setSelectedStates={setSelectedStates} />
        </fieldset>
    );
}
export default DataFields;