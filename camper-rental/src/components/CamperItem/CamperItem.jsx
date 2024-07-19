import Icon from '../Icon';
import css from './CamperItem.module.css'

const CamperItem = (item) => {
    return (
        <div className={css.card}>
            {/* <img src={item.gallery[0]} alt={item.name} /> */}
            <div className={css.cardInfo}>
                <div className={css.cardTitle}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <Icon
                    width={'38'}
                    height={'38'}
                    iconName="heart"
                    styles={css.icon}
                    />
                </div>
                <div className={css.addInfo}>
                    <Icon
                    width={'38'}
                    height={'38'}
                    iconName="rating"
                    styles={css.icon}
                    />
                    <p>{item.rating}</p>
                    <p>{item.location}</p>
                </div>
                <p className={css.description}>{item.description}</p>
                <ul className={css.featuresList}>
                    <li className={css.featureItem}>{item.adults} adults</li>
                    <li className={css.featureItem}>{item.transmission}</li>
                    <li className={css.featureItem}>{item.engine}</li>
                    {/* {item.details.kitchen === 1 &&
                        <li className={css.featureItem}>Kitchen</li>}
                    <li className={css.featureItem}>{item.details.beds} beds</li>
                    {item.details.airConditioner === 1 &&
                        <li className={css.featureItem}>AC</li>} */}
                </ul>
                <button type='button' className={css.MoreBtn}>Show more</button>
            </div>
        </div>
    )
}

export default CamperItem;