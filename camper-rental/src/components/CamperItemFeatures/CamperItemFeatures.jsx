import css from './CamperItemFeatures.module.css'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const CamperItemFeatures = ({item}) => {

        const {
        adults,
        transmission,
        engine,
        form,
        length,
        width,
        height,
        tank,
        consumption,
        details = {},
    } = item;

    const {
        kitchen,
        beds,
        airConditioner,
        CD,
        radio,
        hob,
        toilet,
        shower,
        freezer,
        gas,
        water,
        microwave
    } = typeof details === 'object' ? details : {};

    return (
        <div className={css.featursWrapper}>
            <ul className={css.featuresList}>
                    <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="adults"
                        styles={css.featureIcon}
                        />
                        {adults} adults
                    </li>
                    <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="transmission"
                        styles={css.featureIcon}
                        />
                        {transmission}
                    </li>
                    <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="engine"
                        styles={css.featureIcon}
                        />
                        {engine}
                    </li>
                    {kitchen !== 0 && kitchen !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="kitchen"
                        styles={css.featureIcon}
                        />
                            Kitchen
                        </li>}
                    {beds !== 0 && beds !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="bed"
                        styles={css.featureIcon}
                        />
                            {beds} beds
                        </li>}
                    {airConditioner !== 0 && airConditioner !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="airConditioner"
                        styles={css.featureIcon}
                        />
                            air conditioner
                        </li>}
                    {CD !== 0 && CD !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="CD"
                        styles={css.featureIcon}
                        />
                        CD
                        </li>}
                    {radio !== 0 && radio !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="radio"
                        styles={css.featureIcon}
                        />
                        Radio
                        </li>}
                    <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="hob"
                        styles={css.featureIcon}
                        />
                        {hob} hob
                    </li>
                    {toilet !== 0 && toilet !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="toilet"
                        styles={css.featureIcon}
                        />
                        Toilet
                        </li>}
                    {shower !== 0 && shower !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="shower"
                        styles={css.featureIcon}
                        />
                        Shower
                        </li>}
                    {freezer !== 0 && freezer !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="freezer"
                        styles={css.featureIcon}
                        />
                        Freezer
                        </li>}
                    {gas !== 0 && gas !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="gas"
                        styles={css.featureIcon}
                        />
                        Gas
                        </li>}
                    {water !== 0 && water !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="water"
                        styles={css.featureIcon}
                        />
                        Water
                        </li>}
                    {microwave !== 0 && microwave !== '0' &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="microwave"
                        styles={css.featureIcon}
                        />
                        Microwave
                        </li>}
            </ul>
            <div className={css.detailsWrapper}>
                <h2 className={css.detailsTitle}>Vehicle details</h2>
                <div className={css.line}></div>
                <ul className={css.detailsList}>
                    <li className={css.detailsItem}>
                        Form
                        <span className={css.detailsItemValue}>{form}</span>
                    </li>
                    <li className={css.detailsItem}>
                        Length
                        <span className={css.detailsItemValue}>{length}</span>
                    </li>
                    <li className={css.detailsItem}>
                        Width
                        <span className={css.detailsItemValue}>{width}</span>
                    </li>
                    <li className={css.detailsItem}>
                        Height
                        <span className={css.detailsItemValue}>{height}</span>
                    </li>
                    <li className={css.detailsItem}>
                        Tank
                        <span className={css.detailsItemValue}>{tank}</span>
                    </li>
                    <li className={css.detailsItem}>
                        Consumption
                        <span className={css.detailsItemValue}>{consumption}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

CamperItemFeatures.propTypes = {
    item: PropTypes.shape({
        adults: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        transmission: PropTypes.string.isRequired,
        engine: PropTypes.string.isRequired,
        form: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        tank: PropTypes.string.isRequired,
        consumption: PropTypes.string.isRequired,
        details: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]),
    }).isRequired,
};


export default CamperItemFeatures