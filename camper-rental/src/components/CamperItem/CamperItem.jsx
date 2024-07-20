import PropTypes from 'prop-types';
import Icon from '../Icon';
import css from './CamperItem.module.css';

const CamperItem = ({ item }) => {
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
                    <p>{name}</p>
                    <div className={css.someTitleBox}>
                        <p>€ {price}</p>
                        <Icon
                        width={'38'}
                        height={'38'}
                        iconName="heart"
                        styles={css.icon}
                        />
                    </div>
                </div>
                <div className={css.addInfo}>
                    <div className={css.ratingBox}>
                        <Icon
                        width={'38'}
                        height={'38'}
                        iconName="rating"
                        styles={css.ratingIcon}
                        />
                        <p className={css.ratingText}>{rating}({reviewsCount} Reviews)</p>
                    </div>
                    <div className={css.locationBox}>
                        <Icon
                        width={'38'}
                        height={'38'}
                        iconName="rating"
                        styles={css.ratingIcon}
                        />
                        <p className={css.locationText}>{location}</p>
                    </div>
                </div>
                <p className={css.description}>{description}</p>
                <ul className={css.featuresList}>
                    <li className={css.featureItem}>{adults} adults</li>
                    <li className={css.featureItem}>{transmission}</li>
                    <li className={css.featureItem}>{engine}</li>
                    {kitchen && <li className={css.featureItem}>Kitchen</li>}
                    {beds && <li className={css.featureItem}>{beds} beds</li>}
                    {airConditioner && <li className={css.featureItem}>AC</li>}
                </ul>
                <button type='button' className={css.MoreBtn}>Show more</button>
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
};

export default CamperItem;
