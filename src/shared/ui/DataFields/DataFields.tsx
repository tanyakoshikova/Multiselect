import {FC} from "react";
import "./DataFields.scss";
import CitySelection from "../StateCheckbox/CitySelection";
import {DataFieldsProps} from "./DataFields.props";

const DataFields: FC<DataFieldsProps> = ({
                                             state,
                                             selectedStates,
                                             setSelectedStates
                                         }) => {
    return (
        <fieldset key={state.abbreviation}
                  className={selectedStates[state.abbreviation] ? "selected ": ''}>
            <CitySelection state={state} selectedStates={selectedStates}
                           setSelectedStates={setSelectedStates} />
        </fieldset>
    );
}
export default DataFields;