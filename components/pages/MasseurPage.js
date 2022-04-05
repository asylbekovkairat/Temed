import css from "../../styles/masseur.module.css"
import Link from "next/link"
import ConsultCardWithoutImg from "../common/consultation-card-without-img/ConsultCardWithoutImg"
import DoctorCard from "../common/DoctorCard/DoctorCard"
import DoctorList from "../constants/DoctorList"
import TechnicsList from "../constants/technicsList"
import ArticleCard from "../common/ArticleCard/ArticleCard"
import articleList from "../constants/articleList"
import Callback from "../common/Callback/Callback"

export default function MasseurPage() {
  return (
    <div>
      
        <div className={css.main + " container"}> <Link href="/"><span>Главная </span></Link> / Массаж</div>
      <div style={{ background: "#f5f7fa" }}>
        <div className={css.title + " container"}>
          <div className={css.title_left}>
            <div>Записаться
              на массаж</div>
          </div>
          <div className={css.title_right}>
            <img src='https://thumb.tildacdn.com/tild3432-6562-4634-b632-646633613238/-/format/webp/SFOT4927_1_1.jpg' />
          </div>
        </div>
        </div>
        <div className="container">
        <div className={css.admission}>
          <div>Как проходит прием</div>
          <div>
            Массаж может быть частью комплексной терапии или отдельной
            процедурой. Можно записаться на <Link href="/prices"><span>курс массажа</span></Link> или на одно посещение.
          </div>
          <div>
            Массажисты владеют 11 техниками массажа от мягкой мануальной
            терапии до метода сухой иглы и ударно-волновой терапии.
            Наши массажисты специализируются на массаже при заболеваниях
            опорно-двигательного аппарата, реабилитации, восстановлении после травм.
          </div>
        </div>
        <ConsultCardWithoutImg title={"Запишитесь на сеанс лечебного массажа"} des={"Сеанс массажа длится от 25 минут."} />
        <div className={css.doctor_card_title}>Массажисты клиники</div>
        <div className="container">
          <DoctorCard list={DoctorList}/>
        </div>
        <div className={css.price}>
          <div className={css.doctor_card_title}>Стоимость массажа</div>
          <div>
            <div>Массаж при заболеваниях <br /> позвоночника</div>
          <div>от 1 200 руб.</div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <button className="big-btn btn btn-white">Смотреть все цены</button>
          </div>
        </div>
      </div>
      <div style={{ background: "#f5f7fa"}}>
        <div className={css.situation + " container"}>
          <div className={css.doctor_card_title}>В каких случаях обращаются к массажисту</div>
          <div>Массаж убирает напряжение и боль при травмах и хронических заболеваниях. К массажисту обращаются для работы с:</div>
          <div>
            <div>
              <div>Скелетно-мышечными болями</div>
              <div>Головными болями</div>
              <div>Состоянии после травм</div>
              <div>Хронических болевых синдромах</div>
              <div>Спортивных травмах</div>
              <div>Нарушениях осанки</div>
              <div>Миофасциальным синдромом</div>
              <div>Триггерными точками</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={css.technicians}>
          <div className={css.doctor_card_title}>Техники, которыми владеют наши специалисты</div>
          <div className={css.technics}>
           {
             TechnicsList.map((e)=>
             <div key={e.id}>
                <img src={e.img}/>
                <div>{e.text}</div>
             </div>)
           }
          </div>
        </div>
        <div>
          <div className={css.doctor_card_title}>Статьи по теме</div>
         <ArticleCard list={ articleList }/>
        </div>
      </div>
      <div style={{ background: "#f5f7fa"}}>
        <Callback/>
      </div>
    </div>
  )
}
