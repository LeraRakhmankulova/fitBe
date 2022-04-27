import styles from '../PersonalArea/PersonalArea.module.sass';
import { observer } from "mobx-react";
import no_avatar from '../../assets/images/no_avatar.png'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import {useParams} from "react-router-dom";
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';


const PersonalArea = observer(() => {
    let { name } = useParams();
    // setCurrentModal(<Modal children={<ModalWelcome ccal={0} />} />)
    return (
        <div>
            <Header />
            <section className={styles.wrapper}>
                <div className={styles.user_avavtar}>
                    <div className={styles.avatar}>
                        <img src={no_avatar} />
                    </div>
                    <div className={styles.button}>
                        <MainCustomBtn>EDIT AVATAR</MainCustomBtn>
                    </div>
                </div>
                <div className={styles.user_info}>
                    <h2>{name}</h2>
                    <p>Ivan Ivanov</p>
                    <div className={styles.blocks}>
                        <div className={styles.item}>
                            <h3>CURRENT WEIGHT</h3>
                            <p>75</p>
                        </div>
                        <div className={styles.item}>
                            <h3>CALORIES</h3>
                            <p>1750</p>
                        </div>
                        <div className={styles.item}>
                            <h3>HOURS SPENT</h3>
                            <p>50</p>
                        </div>
                        <div className={styles.item}>
                            <h3>WATER</h3>
                            <p>250</p>
                        </div>
                    </div>
                    <div className={styles.lower_button_wrapper}>
                        <MainCustomBtn>MARK THE WORKOUT</MainCustomBtn>
                        <NavLink to='/track'>
                            <MainCustomBtn>WEIGH YOURSELF</MainCustomBtn>
                        </NavLink>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
})
export default PersonalArea;