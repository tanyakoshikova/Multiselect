import {FC, useState} from "react";
import "./MultiselectDropdown.scss";
import Button from "../Button/Button";
import {cities} from "./MultiselectDropdown.props";
import DataFields from "../DataFields/DataFields";

const MultiselectDropdown: FC = () => {

    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedStates, setSelectedStates] = useState<Record<string, boolean>>(
        cities.reduce((obj, state) => ({...obj, [state.abbreviation]: false}), {}));
    const [searchText, setSearchText] = useState('');

    const toggleDropdown = () => {
        if (isDropdownDisplayed) {
            setIsDropdownDisplayed(false);
            setSelectedStates(prevState => {
                const resetState: Record<string, boolean> = {};
                Object.keys(prevState).forEach(key => {
                    resetState[key] = false;
                });
                return resetState;
            });
        } else {
            setIsDropdownDisplayed(true);
        }
    };

    const buttonText = Object.keys(selectedStates).filter((key: string) =>
        selectedStates[key]).join(', ') || "Cities";
    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className="multiselect_dropdown">
            <Button onClick={() => {
                toggleDropdown();
                setSearchText('');
            }} buttonText={buttonText} isDropdownDisplayed={isDropdownDisplayed} />
            {isDropdownDisplayed && (
                    <div className="panel">
                    <input className="searchText"
                           type="text"
                           value={searchText}
                           onChange={(e) => setSearchText(e.target.value)}
                           placeholder="Search"
                    />
                    {searchText ? (
                        filteredCities.map(city => (
                            <DataFields state={city} selectedStates={selectedStates}
                                        setSelectedStates={setSelectedStates} />
                        ))
                    ) : (
                        cities.map(city => (
                            <DataFields state={city} selectedStates={selectedStates}
                                        setSelectedStates={setSelectedStates} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default MultiselectDropdown;