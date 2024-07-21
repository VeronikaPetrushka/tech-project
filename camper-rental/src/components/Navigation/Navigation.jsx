import css from './Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    const buildLinkClass = ({ isActive }) => {
        return `${css.navLink} ${isActive ? css.active : ''}`;
    };

    const shouldShowFavorites = location.pathname.startsWith('/catalogue') || location.pathname.startsWith('/favorites');

    return (
        <nav className={css.Navigation}>
            <NavLink className={buildLinkClass} to="/">
                Home
            </NavLink>
            <NavLink className={buildLinkClass} to="/catalogue">
                Catalogue
            </NavLink>
            {shouldShowFavorites && (
                <NavLink className={buildLinkClass} to="/favorites">
                    Favorites
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;