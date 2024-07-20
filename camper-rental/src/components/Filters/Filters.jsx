import css from './Filters.module.css'
import Icon from '../Icon';

const Filter = () => {
    // const [camper, setCamper] = useState([]);
    // const [filters, setFilters] = useState({
    //     'equipment': [],
    //     'type': [],
    // })
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
                <input
                    id="locationInput"
                    type="text"
                    placeholder="Enter location"
                    className={css.locationInput}
                />
            </div>
            </div>
            <p className={css.filters}>Filters</p>
            <div className={css.equipmentFilter}>
                <h2 className={css.filterTitle}>Vehicle equipment</h2>
                <div className={css.line}></div>
                <ul className={css.filtersList}>
                    <li className={css.filtersItem}>
                        <Icon
                        width={'32'}
                        height={'32'}
                        iconName="ac"
                        styles={css.featureIcon}
                        />
                        AC
                    </li>
                    <li className={css.filtersItem}>
                        <Icon
                        width={'32'}
                        height={'32'}
                        iconName="transmission"
                        styles={css.featureIcon}
                        />
                        Automatic
                    </li>
                    <li className={css.filtersItem}>
                        <Icon
                        width={'32'}
                        height={'32'}
                        iconName="kitchen"
                        styles={css.featureIcon}
                        />
                        Kitchen
                    </li>
                    <li className={css.filtersItem}>
                        <Icon
                        width={'32'}
                        height={'32'}
                        iconName="tv"
                        styles={css.featureIcon}
                        />
                        TV
                    </li>
                    <li className={css.filtersItem}>
                        <Icon
                        width={'32'}
                        height={'32'}
                        iconName="shower"
                        styles={css.featureIcon}
                        />
                        Shower/WC
                    </li>
                </ul>
            </div>
            <div className={css.typeFilter}>
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
            <button type='submit' className={css.searchBtn}>Search</button>
        </div>
    )
}

export default Filter;