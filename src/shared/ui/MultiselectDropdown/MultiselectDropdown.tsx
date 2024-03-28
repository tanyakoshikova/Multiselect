import React, {FC, useEffect, useState, useRef} from "react";
import "./MultiselectDropdown.scss";
import Button from "../Button/Button";
import DataFields from "../DataFields/DataFields";
import {MultiselectDropdownProps} from "./MultiselectDropdown.props";

const MultiselectDropdown: FC<MultiselectDropdownProps> = ({cities}) => {

    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedStates, setSelectedStates] = useState<Record<string, boolean>>({});
    const [searchText, setSearchText] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownDisplayed(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownDisplayed(prevState => !prevState);
    };

    const buttonText = Object.keys(selectedStates).filter((key: string) =>
        selectedStates[key]).join(', ') || "Cities";
    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchText.toLowerCase().trim()));

    return (
        <div className="multiselectDropdown" ref={dropdownRef}>
            <Button onClick={() => {
                toggleDropdown();
                setSearchText('');
            }} buttonText={buttonText} isDropdownDisplayed={isDropdownDisplayed}/>
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
                            <DataFields key={city.abbreviation} state={city} selectedStates={selectedStates}
                                        setSelectedStates={setSelectedStates}/>
                        ))
                    ) : (
                        cities.map(city => (
                            <DataFields key={city.abbreviation} state={city} selectedStates={selectedStates}
                                        setSelectedStates={setSelectedStates}/>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default MultiselectDropdown;