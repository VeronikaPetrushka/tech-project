import css from './CampersList.module.css'
// import { selectCampers } from "../../redux/selectors.js"
// import { useDispatch, useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem.jsx';
import {
  // useEffect,
  useState
} from 'react';
// import { fetchCampers } from '../../redux/operations.js';
import PropTypes from 'prop-types'

const CampersList = ({filteredCampers}) => {
  // const dispatch = useDispatch();
  // const campers = useSelector(selectCampers);

  // useEffect(() => {
  //   dispatch(fetchCampers())
  // }, [dispatch]);

 const [itemsPerPage, setItemsPerPage] = useState(() => {
    const savedItemsPerPage = localStorage.getItem('itemsPerPage');
    return savedItemsPerPage ? parseInt(savedItemsPerPage, 10) : 4;
  });

  const handleLoadMore = () => {
    setItemsPerPage(prevItemsPerPage => {
      const newItemsPerPage = prevItemsPerPage + 4;
      localStorage.setItem('itemsPerPage', newItemsPerPage);
      return newItemsPerPage;
    });
  }

  //   const handleShowLess = () => {
  //   setItemsPerPage(prevItemsPerPage => {
  //     const newItemsPerPage = prevItemsPerPage - 4;
  //     localStorage.setItem('itemsPerPage', newItemsPerPage);
  //     return newItemsPerPage;
  //   });
  // }

  const handleShowLess = () => {
    setItemsPerPage(4);
    localStorage.setItem('itemsPerPage', 4)
  }

  const visibleCampers = filteredCampers.slice(0, itemsPerPage);

  return (
    <div className={css.container}>
      <ul className={css.campersList}>
        {visibleCampers.map(item => (
          <li className={css.camperItem} key={item._id}>
            <CamperItem item={item} />
          </li>
        ))}
      </ul>
      <div className={css.btnBox}>
      {filteredCampers.length > itemsPerPage && (
        <button className={css.loadMoreBtn} onClick={handleLoadMore}>Load More</button>
      )}
      {itemsPerPage > 4 && (
        <button className={css.loadMoreBtn} onClick={handleShowLess}>Show less</button>
      )}
      </div>
    </div>
  )
}

CampersList.propTypes = {
  filteredCampers:
    PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
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
        form: PropTypes.string.isRequired,
        length: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        // heigth: PropTypes.oneOfType([
        //     PropTypes.string,
        //     PropTypes.number
        // ]).isRequired,
        tank: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        consumption: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
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
)}

export default CampersList;