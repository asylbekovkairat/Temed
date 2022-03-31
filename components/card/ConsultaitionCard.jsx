import PhoneInput from "react-phone-input-2";
import css from "../../styles/ConsultaitionCard.module.css"
import { useState } from "react";

const Card = () => {
  const [phone, setPhone] = useState('');
  return (
    <div className={`container ${css.card}`}>
      <div className={css.image}></div>
      <div className={css.null_first}></div>
      <div className={css.internal}>
        <div className={css.null}></div>

        <div className={css.title}>
          <h3>Запишитесь на консультацию невролога</h3>
          <p>Прием длится 60 минут, включает в себя диагностику, анализ вашего МРТ и составление плана лечения, проходит как в очном формате, так и онлайн.</p>
          <div className={css.t_input}>
            {/* <input type="tel" /> */}
            <div className={css.input}>
              <PhoneInput country={'ru'} value="phone" onChange={phone => setPhone({ phone })} />
            </div>
            <button>Перезвоните мне</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
