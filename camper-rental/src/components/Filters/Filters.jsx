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

const Filter = ({ locations, onLocationChange, onEquipmentChange, onSearch }) => {

    const [location, setLocation] = useState("");
    const [selectedEquipment, setSelectedEquipment] = useState({
        airConditioner: false,
        transmission: false,
        kitchen: false,
        TV: false,
        shower: false
    });

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        onLocationChange(e.target.value)
    };

    const handleEquipmentChange = (e) => {
        const { name, checked } = e.target;
            setSelectedEquipment(prev => ({
            ...prev,
            [name]: checked
        }));
        onEquipmentChange({ [name]: checked });
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
                    {['transmission', 'airConditioner', 'kitchen', 'TV', 'shower'].map(key => (
                        <li className={css.filtersItem} key={key}>
                            <label>
                                <input
                                    type="checkbox"
                                    name={key}
                                    checked={selectedEquipment[key]}
                                    onChange={handleEquipmentChange}
                                    />
                                <Icon width={'32'} height={'32'} iconName={key} styles={css.featureIcon} />
                                {equipmentLabels[key]}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={css.filter}>
                <h2 className={css.filterTitle}>Vehicle type</h2>
                <div className={css.line}></div>
                <ul className={css.filtersList}>
                    <li className={css.filtersItem}>
                        <Icon
                            width={'40'}
                            height={'28'}
                            iconName="van"
                            styles={css.featureIcon}
                        />
                        Van
                    </li>
                    <li className={css.filtersItem}>
                        <Icon
                            width={'40'}
                            height={'28'}
                            iconName="van-2"
                            styles={css.featureIcon}
                        />
                        Fully Integrated
                    </li>
                    <li className={css.filtersItem}>
                        <Icon
                            width={'40'}
                            height={'28'}
                            iconName="van-3"
                            styles={css.featureIcon}
                        />
                        Alcove
                    </li>
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
        onSearch: PropTypes.func.isRequired,
}

export default Filter;