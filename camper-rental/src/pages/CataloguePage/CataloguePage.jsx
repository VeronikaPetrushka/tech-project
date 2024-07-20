import Filter from "../../components/Filters/Filters";
import CampersList from "../../components/CampersList/CampersList";
import css from './CataloguePage.module.css'

const CataloguePage = () => {

    return (
        <div className={css.page}>
            <Filter />
            <CampersList />
        </div>
    )
}

export default CataloguePage;