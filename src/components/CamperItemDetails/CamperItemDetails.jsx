import css from './CamperItemDetails.module.css'
import PropTypes from 'prop-types'
import Icon from '../Icon';
import { useState } from 'react';
import CamperItemFeatures from '../CamperItemFeatures/CamperItemFeatures';
import CamperItemReviews from '../CamperItemReviews/CamperItemReviews';

const CamperItemDetails = ({item, onClose}) => {

    const {
        gallery = [],
        name,
        price,
        rating,
        location,
        description,
        reviews = [],
    } = item;

    const reviewsCount = reviews.length;
      
    const [showFeatures, setShowFeatures] = useState(true);

    const handleToggle = (view) => {
        setShowFeatures(view === 'features');
    };

    return (
        <div className={css.modalWrapper}>
            <div className={css.topModalContainer}>
            <h2 className={css.camperName}>{name}</h2>
            <button onClick={onClose} className={css.closeBtn}>
                <Icon
                width={'32'}
                height={'32'}
                iconName="close"
                styles={css.featureIcon}
                />
            </button>
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
            <p className={css.camperPrice}>€ {price}</p>
            <ul className={css.imagesList}>
                {gallery.length > 0 && gallery.map((image, index) => (
                    <li key={index} className={css.imageBox}>
                        <img src={image} alt={`${name}-${index}`} className={css.image} />
                    </li>
                ))}
            </ul>
            <p className={css.description}>{description}</p>
            <div className={css.toggleButtons}>
                <button onClick={() => handleToggle('features')}
                    className={`${css.toggleBtn} ${showFeatures ? css.selected : css.unselected}`}>
                    Features
                </button>
                <button onClick={() => handleToggle('reviews')}
                    className={`${css.toggleBtn} ${!showFeatures ? css.selected : css.unselected}`}>
                    Reviews
                </button>
            </div>
            <div className={css.line}></div>
            {showFeatures ? <CamperItemFeatures item={item} /> : <CamperItemReviews reviews={reviews} />
            }
        </div>
    )
}

CamperItemDetails.propTypes = {
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
        reviews: PropTypes.arrayOf(PropTypes.shape({
            reviewer_name: PropTypes.string,
            reviewer_rating: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            comment: PropTypes.string
        }))
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CamperItemDetails