import css from './CamperItemReviews.module.css'
import StarRating from '../StarRating/StarRating';
import PropTypes from 'prop-types'
import BookForm from '../BookForm/BookForm';

const CamperItemReviews = ({ reviews }) => {
    return (
        <div className={css.reviews}>
            <ul className={css.reviewsContainer}>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <li key={index} className={css.reviewItem}>
                        <div className={css.reviewer}>
                            <div className={css.reviewerImg}>
                                {review.reviewer_name.charAt(0).toUpperCase()}
                            </div>
                            <div className={css.ratingBox}>
                            <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
                            <StarRating rating={review.reviewer_rating} />
                            </div>
                        </div>
                        <p className={css.comment}>{review.comment}</p>
                    </li>
                ))
            ) : (
                <p className={css.noReviews}>No reviews available</p>
            )}
            </ul>
            <BookForm />
        </div>
    );
};

CamperItemReviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            reviewer_name: PropTypes.string.isRequired,
            reviewer_rating: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            comment: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CamperItemReviews;