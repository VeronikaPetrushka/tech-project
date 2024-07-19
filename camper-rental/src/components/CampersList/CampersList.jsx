import css from './CampersList.module.css'
import { selectCampers } from "../../redux/selectors.js"
import { useDispatch, useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem.jsx';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/operations.js';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

    return (
    <div className={css.container}>
      <ul className={css.campersList}>
        {campers.map(item => (
          <li className={css.camperItem} key={item._id}>
            <CamperItem item={item} />
          </li>
        ))}
            </ul>
    </div>
    )
}

export default CampersList;