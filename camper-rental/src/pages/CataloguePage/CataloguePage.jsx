import css from './CataloguePage.module.css'
import Navigation from '../../components/Navigation/Navigation'
import CampersList from '../../components/CamperList/CamperList'

const CataloguePage = () => {
    return (
        <div className={css.page}>
            <Navigation />
            <CampersList />
        </div>
    )
}

export default CataloguePage;