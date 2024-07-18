import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const buildLinkClass = (isActive) => {
        return `${css.navLink} ${isActive ? css.active : ''}`;
    };

    return (
        <nav className={css.Navigation}>
            <NavLink className={buildLinkClass(true)} to="/">
                Home
            </NavLink>
            <NavLink className={buildLinkClass(false)} to="/catalog">
                Catalog
            </NavLink>
        </nav>
    );
};

export default Navigation;
