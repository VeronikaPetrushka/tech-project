import PropTypes from 'prop-types';
import Icon from '../Icon';
import css from './StarRating.module.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={css.starRating}>
      {[...Array(fullStars)].map((_, index) => (
          <Icon
              key={index}
              width={'16'}
              height={'16'}
              iconName="rating"
              styles={css.starIcon} />
      ))}
      {halfStar && <Icon iconName="half_star" styles={css.starIcon} />}
      {[...Array(emptyStars)].map((_, index) => (
          <Icon
              key={index}
              width={'16'}
              height={'16'}
              iconName="empty-rating"
              styles={css.starIcon} />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StarRating;
