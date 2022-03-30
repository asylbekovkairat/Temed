import PhoneInput from "react-phone-input-2";
import Link from "next/link";

const Callme = () => {
  return (
    <>
      <div className="container-block-callMe">
        <div className="container">
          <div className="callMe-form-block">
            <div className="callMe-form-header-text">
              Хотите, мы Вам перезвоним?
            </div>
            <div className="callMe-form-text-description">
              Как уменьшить грыжу без операции и избавиться от боли в спине?
              Расскажем о лечении и запишем на консультацию к специалисту
            </div>
            <div className="callMe-form-phone-number">
              <div className="callMe-form-phone-number-input">
                <div>
                  Имя <br />
                  <input
                    className="callMe-form-name-input"
                    placeholder="Иванов Иван"
                  ></input>
                </div>
                <div>
                  Телефон * <br />
                  <PhoneInput
                    className="callMe-form-name-input"
                    placeholder="Номер телефона"
                    country={"kg"}
                    value={"phone"}
                    onChange={(phone) => setPhone({ phone })}
                  />
                </div>
                <div>
                  <Link href="/">
                    <button className="callMe-form-btn">Заказать звонок</button>
                  </Link>
                </div>
              </div>
              <div className="callMe-form-footer">
                Нажимая на кнопку Заказать звонок, я подтверждаю, что ознакомлен
                и согласен с условиями
                <br />
                <Link href="/">
                  политики конфиденциальности и правилами обработки персональных
                  данных
                </Link>
              </div>
            </div>
          </div>
          <div className="callMe-form-img">
            <img
              src={
                "https://thumb.tildacdn.com/tild6561-3366-4464-b336-656330336231/-/resize/407x/-/format/webp/noroot_1.png"
              }
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Callme;
