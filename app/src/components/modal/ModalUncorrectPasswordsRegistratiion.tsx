import style from "../Layouts/ModalLayout/ModalLayout.module.sass";
import { useStore } from "../../utils/use-stores-hook";
import logo_black from '../../assets/images/logo_black.svg'


export const ModalUncorrectPasswordsRegistratiion = () => {
    const { modalStore: { clearCurrentModal } } = useStore()
    return (
        <div>
            <div className={style.wrapper_title}>
                <div className={style.welcome_text}>
                    <div className={style.content_suggest}>Passwords do not match</div>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.button_wrapper}>
                    <button onClick={clearCurrentModal}>
                        UNDERSTANDABLY
                    </button>
                </div>
            </div>
        </div>
    );
}
