import css from './Filters.module.css'
import Icon from '../Icon';
import { useState } from 'react';
import PropTypes from 'prop-types'

const equipmentLabels = {
  airConditioner: 'AC',
  transmission: 'Automatic',
  kitchen: 'Kitchen',
  TV: 'TV',
  shower: 'Shower/WC'
};

const typeLabels = {
        panelTruck: 'Van',
        fullyIntegrated: 'Fully Integrated',
        alcove: 'Alcove',
};

const Filter = ({ locations, onLocationChange, onEquipmentChange, onTypeChange, onSearch }) => {

    const [location, setLocation] = useState("");
    const [selectedEquipment, setSelectedEquipment] = useState({
        airConditioner: false,
        transmission: false,
        kitchen: false,
        TV: false,
        shower: false
    });
    const [selectedType, setSelectedType] = useState({
        panelTruck: false,
        fullyIntegrated: false,
        alcove: false,
    })

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        onLocationChange(e.target.value)
    };

    const handleEquipmentChange = (key) => {
        setSelectedEquipment(prev => ({
        ...prev,
        [key]: !prev[key]
        }));
        onEquipmentChange({ [key]: !selectedEquipment[key] });
    };

    const handleTypeChange = (key) => {
        setSelectedType(prev => ({
        ...prev,
        [key]: !prev[key]
        }));
        onTypeChange({ [key]: !selectedType[key] });
    };

    return (
        <div className={css.container}>
            <div className={css.locationWrapper}>
                <label htmlFor="locationInput" className={css.locationLabel}>Location</label>
                <div className={css.inputWrapper}>
                    <Icon
                        width={'18'}
                        height={'20'}
                        iconName="location"
                        styles={css.locationIcon}
                    />
                    <select id="locationInput"
                        value={location}
                        onChange={handleLocationChange}
                        className={css.locationInput}
                        placeholder="Choose location">
                        <option value="">All locations</option>
                        {locations.map(location => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                </div>
            </div>
            <p className={css.filtersTitle}>Filters</p>
            <div className={css.filter}>
                <h2 className={css.filterTitle}>Vehicle equipment</h2>
                <div className={css.line}></div>
                <ul className={css.filtersList}>
                    {Object.keys(equipmentLabels).map(key => (
                        <li
                            className={`${css.filtersItem} ${selectedEquipment[key] ? css.selected : ''}`}
                            key={key}
                            onClick={() => handleEquipmentChange(key)}
                        >
                            <Icon width={'32'} height={'32'} iconName={key} styles={css.featureIcon} />
                            {equipmentLabels[key]}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={css.filter}>
                <h2 className={css.filterTitle}>Vehicle type</h2>
                <div className={css.line}></div>
                <ul className={css.filtersList}>
                    {Object.keys(typeLabels).map(key => (
                        <li
                            className={`${css.filtersItem} ${selectedType[key] ? css.selected : ''}`}
                            key={key}
                            onClick={() => handleTypeChange(key)}
                        >
                            <Icon width={'40'} height={'28'} iconName={key} styles={css.featureIcon} />
                            {typeLabels[key]}
                        </li>
                    ))}
                </ul>
            </div>
            <button className={css.searchBtn} onClick={onSearch}>Search</button>
        </div>
    )
};

Filter.propTypes = {
    locations:
        PropTypes.arrayOf(PropTypes.string).isRequired,
        onLocationChange: PropTypes.func.isRequired,
        onEquipmentChange: PropTypes.func.isRequired,
        onTypeChange: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired,
}

export default Filter;