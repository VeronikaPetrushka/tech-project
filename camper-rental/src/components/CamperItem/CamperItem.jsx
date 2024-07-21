import PropTypes from 'prop-types';
import Icon from '../Icon';
import css from './CamperItem.module.css';

const CamperItem = ({ item, onShowMore }) => {
    const {
        gallery = [],
        name,
        price,
        rating,
        location,
        description,
        adults,
        transmission,
        engine,
        details = {},
        reviews = [],
    } = item;

    const {
        kitchen,
        beds,
        airConditioner,
    } = typeof details === 'object' ? details : {};

    const reviewsCount = reviews.length;

    return (
        <div className={css.card}>
            <div className={css.imageBox}>
                {gallery.length > 0 && <img src={gallery[0]} alt={name} className={css.image} />}
            </div>
            <div className={css.cardInfo}>
                <div className={css.cardTitle}>
                    <p className={css.cardName}>{name}</p>
                    <div className={css.someTitleBox}>
                        <p>€ {price}</p>
                        <Icon
                        width={'24'}
                        height={'24'}
                        iconName="heart"
                        styles={css.heartIcon}
                        />
                    </div>
                </div>
                <div className={css.addInfo}>
                    <div className={css.ratingBox}>
                        <Icon
                        width={'16'}
                        height={'16'}
                        iconName="rating"
                        styles={css.ratingIcon}
                        />
                        <p className={css.ratingText}>{rating}({reviewsCount} Reviews)</p>
                    </div>
                    <div className={css.locationBox}>
                        <Icon
                        width={'16'}
                        height={'16'}
                        iconName="location"
                        styles={css.locationIcon}
                        />
                        <p className={css.locationText}>{location}</p>
                    </div>
                </div>
                <p className={css.description}>{description}</p>
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
                    {kitchen &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="kitchen"
                        styles={css.featureIcon}
                        />
                            Kitchen
                        </li>}
                    {beds &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="bed"
                        styles={css.featureIcon}
                        />
                            {beds} beds
                        </li>}
                    {airConditioner &&
                        <li className={css.featureItem}>
                        <Icon
                        width={'20'}
                        height={'20'}
                        iconName="airConditioner"
                        styles={css.featureIcon}
                        />
                            AC
                        </li>}
                </ul>
                <button type='button' className={css.MoreBtn} onClick={() => onShowMore(item)}>Show more</button>
            </div>
        </div>
    );
}


CamperItem.propTypes = {
    item: PropTypes.shape({
        gallery: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.string
        ]).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        rating: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
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
        details: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]),
            reviews: PropTypes.arrayOf(PropTypes.shape({
            reviewer_name: PropTypes.string,
            reviewer_rating: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            comment: PropTypes.string
        }))
    }).isRequired,
    onShowMore: PropTypes.func.isRequired,
};

export default CamperItem;
