import React from 'react';
import Consultcardorthoped from '../common/ConsultCardOrthoped.js/ConsultCardOrthoped';
import css from "../../styles/ConsultCardOrthoped.module.css";
import DoctorCard from '../common/DoctorCard/DoctorCard';
import { OrthopedistList } from '../constants/orthopedistsList';



const Orthopedistpage = () => {
    return (
      <>
        <div className="container allRecoveryPage">
          <div className="staticPath">
            <div>Главная / Прием ортопеда-травматолога</div>
          </div>
        </div>
        <div style={{ background: "#f5f7fa" }}>
          <div className="orthopedist_title">
            <div className="orthopedist_title_left">
              <div className="container">
                Записаться на прием к травматологу-ортопеду
              </div>
            </div>
            <div className="orthopedist_title_right">
              <img src="https://thumb.tildacdn.com/tild3336-6233-4235-a634-316238663032/-/cover/560x450/center/center/-/format/webp/IMG_9697.JPG" />
            </div>
          </div>
        </div>
        <div className="container How_reception">
          <div>Как проходит прием</div>
          <br />
          <br />
          <div className="reception_desc">
            На приеме травматолог выяснит симптомы и жалобы, проведет визуальный
            осмотр и пальпацию. Врач сделает УЗИ сустава при подозрении на
            артрит, артроз, бурсит, дисплазию суставов, повреждения связок и
            сухожилий.
            <br />
            <br />В некоторых случаях травматолог может сразу поставить диагноз
            и составить план лечения. В других случаях потребуется
            дополнительные обследования.
          </div>
        </div>
        <div className="wrapper_orthopedCard">
          <Consultcardorthoped
            title={"Запишитесь на консультацию травматолога-ортопеда"}
            des={
              "Прием врача ортопеда-травматолога длится 60 минут, включает в себя диагностику, анализ вашего МРТ и составление плана лечения."
            }
          />
        </div>
        <DoctorCard list={OrthopedistList} />
        <div className={css.price}>
          <div className={css.doctor_card_title}>Стоимость массажа</div>
          <div>
            <div>
              Массаж при заболеваниях <br /> позвоночника
            </div>
            <div>от 1 200 руб.</div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <button className="big-btn btn btn-white">Смотреть все цены</button>
          </div>
        </div>
      </>
    );
}

export default Orthopedistpage;
