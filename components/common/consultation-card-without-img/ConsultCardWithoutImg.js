import css from "../../../styles/ConsultCardWithoutImg.module.css"
import PhoneInput from "react-phone-input-2"
import {useState} from "react"

export default function ConsultCardWithoutImg(props) {
    const [phone, setPhone] = useState("");
    return (
        <div className={css.wrapper}>
            <div className={" consultation-card"}>
                <div className={css.title}>
                    {props.title}
                </div>
                <div className={css.des}>
                    {props.des}
                </div>
                <div className={css.input}>
                    <div className="consultation-card">
                        <PhoneInput country={'ru'} value="phone" onChange={phone => setPhone({ phone })} />
                    </div>
                    <button className="btn btn-red">Перезвоните мне</button>
                </div>
            </div>
        </div>
    )
}
