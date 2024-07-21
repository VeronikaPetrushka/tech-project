import css from './FavoriteList.module.css';
import { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import CamperItem from "../CamperItem/CamperItem";

const FavoriteList = ({ favorites, onShowMore }) => {

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
    };

    const handleShowLess = () => {
        setItemsPerPage(prevItemsPerPage => {
            if (prevItemsPerPage > 4) {
                const newItemsPerPage = prevItemsPerPage - 4;
                localStorage.setItem('itemsPerPage', newItemsPerPage);
                return newItemsPerPage;
            }
            return prevItemsPerPage;
        });
    };

    const visibleFavorites = useMemo(() => {
        return favorites.slice(0, itemsPerPage);
    }, [favorites, itemsPerPage]);

    return (
       <div>
            {favorites.length === 0 ? (
                <p>You haven’t added any campervan to favorites yet</p>
            ) : (
        <>
            <ul className={css.FavoriteList}>
                {visibleFavorites.map(item => (
                    <li className={css.camperItem} key={item._id}>
                        <CamperItem item={item} onShowMore={() => onShowMore(item)} />
                    </li>
                ))}
            </ul>
            <div className={css.btnBox}>
                {favorites.length > itemsPerPage && (
                    <button className={css.loadMoreBtn} onClick={handleLoadMore}>Load More</button>
                )}
                {itemsPerPage > 4 && (
                    <button className={css.loadMoreBtn} onClick={handleShowLess}>Show Less</button>
                )}
            </div>
        </>
    )}
</div>

    );
};

FavoriteList.propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.shape({
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
    }).isRequired),
    onShowMore: PropTypes.func.isRequired,
};

export default FavoriteList;
