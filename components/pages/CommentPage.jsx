import css from "../../styles/commentpage.module.css"
import Link from 'next/link'
import LeaveCom from "../common/card-LeaveComment/CardLeaveComment";
import Card_comment from "../constants/card-comment";
import CommentCard from "../common/comment_card/Comment_Card";
import Callme from "../common/Block_CallMe/callMe";
import YandexCom from "../constants/comment_yandex_card";
import Commentyandexcard from "../common/comment-yandex_card/CommentYandexCard";
import reviewCard from "../constants/review-card";

const Commentpage = () => {
  return (
    <div>
      <div className={css.title}><h1 className='container' >Отзывы пациентов</h1></div>
      <div className={`container ${css.link}`}>
        <Link href={'/'}>Главная</Link>
        <p>/</p>
        <Link href={'/comment'}>Отзывы пациентов</Link>
      </div>
      <div className={`container `}>
        <LeaveCom />
      </div>
      <div className={css.subtitle}><h2 className='container' >Отзывы с порталов</h2></div>
      <div className="container">
        {
          Card_comment.map((item) => <CommentCard
            title={item.title}
            title2={item.title2}
            num_com={item.num_com}
            place={item.place}
            des={item.des}
          />)
        }
      </div>
      <div className={css.subtitle}><h2 className='container' >Отзывы с Яндекс. Карты </h2></div>
      <div className={`container ${css.yandex}`}>

        {
          YandexCom.map((item) => <Commentyandexcard
            title={item.title}
            point={item.point}
            num_comm={item.num_comm}
            grade={item.grade}
            name={item.name}
            date={item.date}
            img={item.img}
            imgstar={item.imgstar}
            imgstar_half={item.imgstar_half}
            des={item.des}
            end={item.end}
          />)
        }

      </div>
      <div className={css.subtitle}><h2 className='container mb-5' >Отзывы из Инстаграм </h2></div>
      <div className={`container ${css.revievBlock}`}>
        {
          reviewCard.map((e) =>
            <div key={e.id} className={css.revievCard}>
              
                <div className={css.revievImg}>
                  <img src={e.img}></img>
                </div>
                <div className={css.rev__first__block}>
                  <div className={css.revievCom}>
                    {e.comment}
                  </div>
                  <div className={css.revievName}>
                    <Link href={e.insta}>
                      {e.instaName}
                    </Link>
                  </div>
                  <div className={css.revievDate}>
                    {e.date}
                  </div>
                </div>
              
            </div>
          )
        }

      </div>
      <Callme />
    </div>
  );
}

export default Commentpage;
