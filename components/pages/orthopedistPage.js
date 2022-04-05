import React from 'react';
import Consultcardorthoped from '../common/ConsultCardOrthoped.js/ConsultCardOrthoped';
import css from "../../styles/ConsultCardOrthoped.module.css";
import DoctorCard from '../common/DoctorCard/DoctorCard';
import { OrthopedistList } from '../constants/orthopedistsList';
import Callback from "../common/Callback/Callback";
import ArticleCard from "../common/ArticleCard/ArticleCard.js"
import { articleOrthopedList } from './../constants/articleOrthopedList';
import { whatInjuryList } from './../constants/whatInjuryList';



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
    <div className="container orthopedist_card_title">Стоимость массажа</div>
    <DoctorCard list={OrthopedistList} />
    <div className="container orthopedist_card_title">Стоимость массажа</div>
    <div className="container orthopedist_price">
      <div className="orthopedist_priceWrapper">
        <div>
          <div>
            Прием врача ортопеда- травматолога  <br /> первичный
          </div>
          <div>от 1 500 руб.</div>
        </div>
        <div>
          <div>
            Прием врача ортопеда- травматолога  <br /> первичный
          </div>
          <div>от 1 500 руб.</div>
        </div>
      </div>
    </div>
      <div
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <button className="big-btn btn btn-white">Смотреть все цены</button>
      </div>
    <div style={{ background: "#f5f7fa"}}>
      <div className="container orthopedist_situation">
        <div className="container orthopedist_card_title">Показания для обращения к травматологу-ортопеду</div>
        <div>К травматологу обращаются при различных симптомах, среди которых:</div>
        <div>
          <div>
            <div>Хруст в костях и суставах</div>
            <div>Боли конечностях или позвоночнике</div>
            <div>Скованность движений</div>
            <div>Ломота и боль в мышцах</div>
            <div>Судороги в ногах по ночам</div>
            <div>Онемение конечностей</div>
            <div>Деформация осанки и грудной клетки</div>
          </div>
       </div>
      </div>
    </div>
    <div className="container whatinjury">
      <h2>Какие травмы и заболевания лечит травматолог-ортопед</h2>
      <div>Ортопед-травматолог лечит травмы и заболевания опорно-двигательного аппарата:</div>
    </div>
    <div className="container injuryWrapper">
      {
        whatInjuryList.map((e)=>
          <div key={e.id}>
            <img src={e.img}/>
            <div>{e.text}</div>
          </div>
        )
      }
    </div>
    <div className="container">
      <div className="container orthopedist_card_title">Статьи по теме</div>
      <ArticleCard list={ articleOrthopedList }/>
    </div>
    <Callback/>
    </>
  );
}

export default Orthopedistpage;
