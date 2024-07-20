import css from './CampersList.module.css'
import { selectCampers } from "../../redux/selectors.js"
import { useDispatch, useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem.jsx';
import { useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/operations.js';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch]);

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

  const visibleCampers = campers.slice(0, itemsPerPage);

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
      {campers.length > itemsPerPage && (
        <button className={css.loadMoreBtn} onClick={handleLoadMore}>Load More</button>
      )}
      {campers.length > 4 && (
        <button className={css.loadMoreBtn} onClick={handleShowLess}>Show less</button>
      )}
      </div>
    </div>
  )
}

export default CampersList;