import PhoneInput from "react-phone-input-2"
import css from "../../../styles/callback.module.css"

export default function Callback() {
    return (
        <div className={css.wrapper}>
            <div className={css.title_wrapper}>
                <div className={css.title}>Мы перезвоним!</div>
                <div>Расскажем о лечении и запишем на консультацию к массажисту</div>
            </div>
            <div className={css.lower}>
                <div><img src="https://thumb.tildacdn.com/tild6536-3031-4334-b161-323833373661/-/format/webp/image22.png" /></div>
                <div className={css.inputs  + " callback_wrapper"}>
                    <div className="consultation-card">
                        <PhoneInput
                            country={"ru"}
                            value={"phone"}
                            onChange={(phone) => setPhone({ phone })}
                        />
                    </div>
                    <input className={css.input} placeholder="Имя" />
                    <button className="big-btn btn btn-blue">
                        Жду звонка!
                    </button>
                    <div >Нажимая на кнопку, вы даете <span>согласие на обработку персональных данных</span></div>
                </div>
            </div>
        </div>
    )
}
