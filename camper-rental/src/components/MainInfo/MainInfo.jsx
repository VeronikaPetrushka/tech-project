import css from './MainInfo.module.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const MainInfo = () => {
    return (
        <main className={css.Container}>

            <section className={css.Hero}>
                <div className={css.Overlay} style={{backgroundColor:  'rgba(0, 0, 0, 0.4)'}}></div>
                <h1 className={css.mainTitle}>Welcome to our camper rental company in Ukraine!</h1>
                <p className={css.mainDesc} style={{ marginTop: '70px' }}>
                    Our company specializes in providing high quality campers for rent so you can
                    enjoy the freedom of travel and the comfort of home wherever you are.
                </p>
            </section>

            <div className={css.AboutUsWrapper}>
                    <div className={css.line}></div>
                    <h2 className={css.title}>About us</h2>
                    <p className={css.mainDesc}>
                        We are a team of professionals in love with travel and adventure. We understand
                        how important it is to have reliable transport and a cozy place to relax while traveling.
                        That is why we offer our customers modern and fully equipped campsites that will meet all your needs.
                    </p>
                    <div className={css.line}></div>
            </div>

            <section className={css.OuterWrapper}>

                <div className={css.ServiceWrapper}>
                    <h2 className={css.title} style={{color: 'white'}}>Our services</h2>
                    <div className={css.InnerWrapper}>
                        <ul className={css.mainList}>
                            <li>
                                <span>Rental of campers:</span> In our fleet you will find a variety of models of campers, from 
                                compact for two to spacious family options. All our campsites are equipped with everything you
                                need for a comfortable journey.
                            </li>
                            <li>
                                <span>Customer support:</span> Our team is always ready to help you with any questions and provide
                                 support during your rental.
                            </li>
                            <li>
                                <span>Flexible rental conditions:</span> We offer a variety of rental options, from short-term to 
                                long-term, so you can choose the one that best suits your needs.
                            </li>
                            <li>
                                <span>Accessories:</span> We provide rental accessories such as bicycles, tourist furniture,
                                navigation systems and more to make your trip even more comfortable and enjoyable.
                            </li>
                    </ul>
                    <ul className={css.decorPics}>
                        <li className={`${css.picsBox} ${css.camper}`}></li>
                        <li className={`${css.picsBox} ${css.support}`}></li>
                        <li className={`${css.picsBox} ${css.bicycle}`}></li>
                    </ul>
                    </div>
                </div>

                <div className={css.Wrapper}>
                    <h2 className={css.title}>Why choose us ?</h2>
                    <div className={css.InnerWrapper}>
                        <ul className={css.decorPics}>
                            <li className={`${css.picsBox} ${css.quality}`}></li>
                            <li className={`${css.picsBox} ${css.price}`}></li>
                            <li className={`${css.picsBox} ${css.booking}`}></li>
                        </ul>
                        <ul className={css.mainList}>
                            <li>
                                <span>High quality:</span> All our campsites are regularly inspected andined to ensure your
                                 comfort and safety.
                            </li>
                            <li>
                                <span>Affordable prices:</span> We offer competitive prices for campers without hidden charges.
                            </li>
                            <li>
                                <span>Boking convenience:</span> You can easily book a campsite online on our website or contact 
                                us for an individual consultation.
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div className={css.guideWrapper}>
                    <h2 className={css.title}>How it works</h2>
                         <ul className={css.guideList}>
                            <li className={css.guideItem}>
                                <div className={css.Overlay}>
                                <div>
                                    <span>Choose camper:</span> Check out our offers and choose the camper that best suits your needs.
                                </div>
                                </div>
                            </li>
                            <li className={css.guideItem}>
                                <div className={css.Overlay}>
                                <div>
                                    <span>Book online:</span> Fill out a simple booking form on our website or call us.
                                </div>
                                </div>
                            </li>
                            <li className={css.guideItem}>
                                <div className={css.Overlay}>
                                <div>
                                    <span>Take your camper:</span> After confirming your reservation, come to us and we will prepare the camper for your trip.
                                </div>
                                </div>
                            </li>
                            <li className={css.guideItem}>
                                <div className={css.Overlay}>
                                <div>
                                    <span>Enjoy your trip:</span> Explore Ukraine with the comfort and convenience of our camper.
                                </div>
                                </div>
                            </li>
                        </ul>
                        <p className={css.scrollText}>Scroll <MdOutlineKeyboardDoubleArrowRight style={{ fontSize: '20px', color: '#475467' }}/></p>
                </div>

            </section>
        </main>
    )
}

export default MainInfo;