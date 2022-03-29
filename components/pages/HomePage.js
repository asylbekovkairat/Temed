import mainSliderCardList from "../constants/main-slider-card-list";
import MrtSlider from "../common/MrtSlider/MrtSlider";
import mrtDesList from "../constants/mrt-slider-card-des";
import cardList_terapy from "../constants/card-therapy";
import Card_terapy from "../common/card_terapy/Card_terapy";
import Link from "next/link";
import MainSlider from "../common/Sliders/MainSlider";
import { useState } from "react";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <MainSlider />
      <div className="adap-wrapper">
        <div className="adap">
          <div className=" thirdSlider">
            <div className="round-blue-border-wrapper-another">
              <div className="round-border-under-wrapper">
                <div
                  style={{ borderColor: "#0e7496" }}
                  className="round-border"
                ></div>
              </div>
            </div>

            <div className="secondSliderWrapper">
              <div className="secondSliderText">
                Пациенты сами рассказывают о своём лечении
              </div>
              <Link href="/">
                <button className="slick-btn">Посмотреть вебинар</button>
              </Link>
            </div>
            <div className="third-slider-wrapper">
              <img src="https://static.tildacdn.com/tild6563-3537-4334-b265-623866653661/video-banner-bg_copy.png" />
            </div>
          </div>
        </div>
        <div className="cards-wrapper adap-cards">
          {mainSliderCardList.map((e) => (
            <div
              style={{ backgroundColor: e.color }}
              key={e.text}
              className="cardWrapper adap-card"
            >
              <div className="adap-title-wrapper">
                <img src={e.img} />
                <span className="adap-card-first-text">{e.firstText}</span>
              </div>
              <div className="adap-text-wrapper">
                <div className="adap-card-text">
                  {e.text}
                  <span className="adap-card-last-text">{e.lastText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="mrt-section">
        <div className="container">
          <div className="mrt">
            <img src="https://static.tildacdn.com/tild3962-3363-4530-b466-386339303338/chiropractor-concept.jpg" />
            <div className="mrt-text-wrapper">
              <div className="mrt-text">
                <h3>Получите онлайн-консультацию по снимкам МРТ</h3>
                <div>
                  Вы узнаете можно ли вылечить грыжу без операции в нашей
                  клинике
                </div>
              </div>
              <button className="slick-btn btn-mrt">Показать МРТ врачу</button>
            </div>
          </div>

          <div className="mrt-title-slider-wrapper">
            <div className="mrt-title">
              <h1>Наши результаты, которыми мы гордимся</h1>
              <div>
                Уже более 3 000 довольных пациентов избавились от боли в спине и
                уменьшили грыжу без операции!
              </div>
            </div>
            <div className="mrt-slider">
              <MrtSlider setActiveSlide={setActiveSlide} />
            </div>
          </div>
          <div className="mrt-slider-des-wrapper">
            <img src={mrtDesList[activeSlide].img} />
            <div className="mrt-slider-des">
              <div>{mrtDesList[activeSlide].title}</div>
              <div>
                <span>{mrtDesList[activeSlide].gender}</span>
                {mrtDesList[activeSlide].des}
              </div>
            </div>
          </div>
          <div className="mrt-des-wrapper">
            <div className="mrt-before-des">
              <div className="mrt-btn mrt-red">До</div>
              {mrtDesList[activeSlide].before.map((e) => (
                <div key={e} className="mrt-before-des-text">
                  <div>{e}</div>
                </div>
              ))}
            </div>
            <div className="mrt-after-des">
              <div className="mrt-btn mrt-blue">После</div>

              {mrtDesList[activeSlide].after.map((e) => (
                <div key={e} className="mrt-after-des-text">
                  <div>
                    <img src="https://static.tildacdn.com/tild3037-3031-4330-a464-353032323439/check.svg" />
                  </div>
                  <div>{e}</div>
                </div>
              ))}
              <div className="mrt-des-duration">
                {mrtDesList[activeSlide].duration}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container about">
          <div className="first_about">
            Мы - <span>первая российская клиника</span>, которая стала применять
            резорбцию межпозвонковой грыжи диска
          </div>
          <div className="second_about">
            <span>
              <strong>
                Резорбция - процесс уменьшения грыжи диска за счет естественных
                физиологических способностей организма.
              </strong>
            </span>
            Это основа эффективного лечения грыжи и<u> альтернатива операции</u>
            .
            <br />
            <br />
            Метод модулируемой резорбции Ткачева-Епифанова позволяет
            <u> ускорить </u>
            этот
            <u> процесс, взять боль под контроль и улучшить качество жизни.</u>
          </div>
        </div>
        <div className="authors">
          <h2>Авторы метода модулируемой резорбции</h2>
        </div>
        <div className="container authorWrapper">
          <div className="upperBlock">
            <img
              className="doctor"
              src="https://thumb.tildacdn.com/tild3831-3232-4332-b363-333637323532/-/cover/455x450/center/center/-/format/webp/Untitled-7_1.jpg"
              alt="doctor"
            />
            <div className="description">
              <Link href="/">
                <div className="doctorName">
                  Александр Ткачев
                  <img
                    className="arrowRight"
                    src="https://static.tildacdn.com/tild3764-6535-4965-b831-613230383538/right-arrow1.svg"
                    alt="arrow"
                  />
                </div>
              </Link>
              <div className="doctorProf">
                Невролог, рефлексотерапевт, физиотерапевт
                <br />
              </div>
              <div className="doctorDes">
                Практик и ученый занимающийся исследованием дискогенной боли и
                механизмов резорбции грыжи.
                <br />
                <br />
                Занимается исследованием резорбции межпозвонковой грыжи диска с
                2012 года.
                <br />
                <br />
                Регулярно публицируется в научных журналах. Активный участник
                авторитетных российский и международных медицинских сообществ
                (IASP, NASS, ESP)
              </div>
              <div className="companies">
                <img
                  src="https://thumb.tildacdn.com/tild3365-3432-4031-b039-633231623065/-/resize/107x/-/format/webp/noroot.png"
                  alt="ESR"
                />
                <img
                  src="https://thumb.tildacdn.com/tild6538-6166-4763-b436-323039643633/-/resize/158x/-/format/webp/IASP20Logo20270X98_1.png"
                  alt="IASP"
                />
                <img
                  src="https://thumb.tildacdn.com/tild6536-3564-4531-b633-373637323363/-/resize/159x/-/format/webp/ECMSgEyQj69J36Botvgu.jpg"
                  alt="NASS"
                />
              </div>
            </div>
          </div>
          <div className="lowerBlock">
            <div className="description">
              <Link href="#">
                <div className="doctorName">
                  Антон Епифанов
                  <img
                    className="arrowRight"
                    src="https://static.tildacdn.com/tild3764-6535-4965-b831-613230383538/right-arrow1.svg"
                    alt="arrow"
                  />
                </div>
              </Link>
              <div className="doctorProf">
                Невролог, спортивный врач, мануальный терапевт
                <br />
              </div>
              <div className="doctorDes">
                Специализируется на лечении неспецифических болей в спине,
                суставов, восстановлении после спортивных травм.
                <br />
                <br />
                Активный популяризатор медицинской науки. Успешный блогер: за 5
                лет более 30 млн. просмотров на ютуб-канале
              </div>
              <Link href="https://www.youtube.com/channel/UCg4dLRPl2WhDcK5nKJkG5lQ">
                <div className="youtube_links">
                  <img
                    src="https://thumb.tildacdn.com/tild3730-3834-4330-b336-663430313134/-/resize/66x/-/format/webp/kisspng-computer-ico.png"
                    alt="yt"
                  />
                  558k
                  <br />
                  подписчиков
                </div>
              </Link>
            </div>

            <img
              className="lowerDoctor"
              src="https://thumb.tildacdn.com/tild6361-3039-4665-a566-303862663031/-/cover/455x450/center/center/-/format/webp/Untitled-8_1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="therapy-title">Что мы лечим</div>
      <div className="container cardList_terapy_wrapper">
        {cardList_terapy.map((e) => (
          <Card_terapy
            key={e.button}
            img={e.img}
            title={e.title}
            des1={e.des1}
            des2={e.des2}
            span1={e.span1}
            des3={e.des3}
            span2={e.span2}
            des4={e.des4}
            button={e.button}
          />
        ))}
      </div>

      <div className="container">
        <div className="review-block">
          <div className="review-block-img">
            <img src="https://static.tildacdn.com/tild6463-3338-4266-b466-653965323237/logo-light.svg"></img>
          </div>
          <div className="review-block-first-top">ТОП 20</div>
          <div className="review-block-first-text">
            частных клиник
            <br />
            Санкт-Петербурга
          </div>
          <div className="review-block-first-top">ТОП 30</div>
          <div className="review-block-first-text">
            частных клиник
            <br />
            Москвы
          </div>
        </div>
        <div className="review-main-content">
          <div className="review-main-content-container">
            <div className="review-main-content-first-info">
              <div className="review-main-content-avatar">
                <img src="https://thumb.tildacdn.com/tild3662-6135-4533-b639-333231643935/-/cover/92x92/center/center/-/format/webp/157682835_2763004638.jpg"></img>
              </div>
              <div>
                <img src="https://static.tildacdn.com/tild6164-3162-4166-a633-306431323163/photo.svg"></img>
              </div>
              <div>
                Екатерина Викторовна, я у неё лечилась. У них отличная команда.
                Я таким благодарна. У меня не большая грыжа была в шейном
                отделе, но она доставляла мне столько… Я спать боялась. А теперь
                я живу и вожу машину без страха, что голова закружится и все.
                Спасибо ⭐
              </div>
              <div>
                <Link href="https://www.instagram.com/lineshirina/">
                  @lineshirina
                </Link>
              </div>
              <div>
                Анастасия Ширина
                <br />
              </div>
            </div>
            <div className="review-main-content-first-info">
              <div className="review-main-content-avatar">
                <img src="https://thumb.tildacdn.com/tild3736-3732-4862-b364-376433626538/-/cover/92x92/center/center/-/format/webp/43913234_19513269137.jpg"></img>
              </div>
              <div>
                <img src="https://static.tildacdn.com/tild6164-3162-4166-a633-306431323163/photo.svg"></img>
              </div>
              <div>
                Сейчас прохожу лечение крестцово-поясничного отдела на
                Технопарке. Могу сказать, что третий день терапии даёт о себе
                знать, положительные результаты, Боли стали ощутимо меньше.
                Останавливаться на достигнутом я не собираюсь, дай бог
                отремонтируем поясничный отдел.
              </div>
              <div>
                <Link href="https://www.instagram.com/sasha_vinichuk/">
                  @sasha_vinichuk
                </Link>
              </div>
              <div>
                Александр Виничук
                <br />
              </div>
            </div>
            <div className="review-main-content-first-info">
              <div className="review-main-content-avatar">
                <img src="https://thumb.tildacdn.com/tild6265-3337-4639-b832-626531333261/-/cover/92x92/center/center/-/format/webp/15034647_11769711257.jpg"></img>
              </div>
              <div>
                <img src="https://static.tildacdn.com/tild6164-3162-4166-a633-306431323163/photo.svg"></img>
              </div>
              <div>
                ❤️ Я тоже лечусь у Екатерины Викторовны, да и что там говорить,
                все врачи и медсестры и администратор в клинике Марфино мне как
                родные стали. Благодарность вам невероятная. Моя огромная грыжа
                со стенозом почти ушла, а6 месяцев назад я еле ходила ⭐ ✨ ⭐
                ✨
              </div>
              <div>
                <Link href="https://www.instagram.com/vi_lu19/">@vi_lu19</Link>
              </div>
              <div>
                Victoriya Lunina
                <br />
              </div>
            </div>
            <div className="review-main-content-first-info">
              <div className="review-main-content-avatar">
                <img src="https://thumb.tildacdn.com/tild3162-6138-4665-a237-613263393431/-/cover/92x92/center/center/-/format/webp/126054518_1505842916.jpg"></img>
              </div>
              <div>
                <img src="https://static.tildacdn.com/tild6164-3162-4166-a633-306431323163/photo.svg"></img>
              </div>
              <div>
                Первый курс проходила в Волгограде, второй-в Краснодаре. После
                второго боли не уменьшились 3 недели, думала что не помогло. И
                вот спустя 3 недели боли стали уходить. Спасибо вам за вашу
                методику.
              </div>
              <div>
                <Link href="https://www.instagram.com/svet.lanap1117/">
                  @svet.lanap1117
                </Link>
              </div>
              <div>
                Светлана
                <br />
              </div>
            </div>
          </div>
          <Link href="/">
            <button className="more-reviews">Больше отзывов</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
