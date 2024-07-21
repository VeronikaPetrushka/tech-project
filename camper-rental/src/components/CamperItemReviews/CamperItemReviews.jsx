// import css from './CamperItemReviews.module.css'
// import Icon from '../Icon'
import PropTypes from 'prop-types'

const CamperItemReviews = ({ reviews }) => {
    return (
        <p>{reviews}</p>
    )
}

CamperItemReviews.propTypes = {
    reviews: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
    ]).isRequired,
}

export default CamperItemReviews;