import mainSliderCardList from "../constants/main-slider-card-list";
import MrtSlider from "../common/MrtSlider/MrtSlider";
import mrtDesList from "../constants/mrt-slider-card-des";
import cardList_terapy from "../constants/card-therapy";
import Card_terapy from "../common/card_terapy/Card_terapy";
import Link from "next/link";
import MainSlider from "../common/Sliders/MainSlider"
import cardList_specialists from "../constants/card-specialists";
import Card_specialists from "../common/card_specialists/card_specialists";
import Review from "../common/review/Review";
import ReviewList from "../constants/Reviews-info";
import YouTubeSlider from "../common/youtube-slider/YouTubeSlider";
import TreatmentCourse from "../common/TreatmentCourse/mainCard/TreatmentCourse";
import reviewCard from "../constants/review-card";
import PhoneInput from "react-phone-input-2";
import {useState, useEffect} from "react"
import Mrt from "../common/mrt/mrt";
import {db} from "../../config/firebase.js"
import RegToWeb from "../common/RegToWeb/regToWeb";


export default function HomePage() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [youtubeActive, setYouTubeActive] = useState(false)
    const [youtubeUrl, setYouTubeUrl] = useState("")
    const [id, setId] = useState(0)
    const [phone, setPhone] = useState("");

    return (
        <div>
            {/* MainSlider */}
            <MainSlider />

            {/* adap-slider */}
            <div className="adap-wrapper">
                <div className="adap">
                    <div className=" thirdSlider">
                        <div className='round-blue-border-wrapper-another'>
                            <div className='round-border-under-wrapper'>
                                <div style={{ borderColor: "#0e7496" }} className='round-border'>

                                </div>
                            </div>
                        </div>

                        <div className='secondSliderWrapper'>
                            <div className='secondSliderText'>
                                Пациенты сами рассказывают
                                о своём лечении
                            </div>
                            <Link href="/">
                                <button className='slick-btn'>
                                    Посмотреть вебинар
                                </button>
                            </Link>
                        </div>
                        <div className="third-slider-wrapper">
                            <img src='https://static.tildacdn.com/tild6563-3537-4334-b265-623866653661/video-banner-bg_copy.png' />

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
            <Mrt/>
            <section className="mrt-section">
                <div className="container">

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
                            <div><span>{mrtDesList[activeSlide].gender}</span>{mrtDesList[activeSlide].des}</div>
                        </div>
                    </div>
                    <div className="mrt-des-wrapper">
                        <div className="mrt-before-des">
                            <div className="mrt-btn mrt-red">
                                До
                            </div>
                            {
                                mrtDesList[activeSlide].before.map((e, index) =>
                                    <div key={index} className="mrt-before-des-text">
                                        <div>
                                            {e}
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                        <div className="mrt-after-des">
                            <div className="mrt-btn mrt-blue">
                                После
                            </div>

                            {
                                mrtDesList[activeSlide].after.map((e, index) =>
                                    <div key={index} className="mrt-after-des-text">
                                        <div><img src="https://static.tildacdn.com/tild3037-3031-4330-a464-353032323439/check.svg" /></div>
                                        <div>
                                            {e}
                                        </div>
                                    </div>
                                )
                            }
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
                        Мы -{" "}
                        <span>первая российская клиника</span>
                        , которая стала применять резорбцию межпозвонковой грыжи диска
                    </div>
                    <div className="second_about">
                        <span>
                            <strong>
                                Резорбция - процесс уменьшения грыжи диска за счет естественных физиологических способностей организма.
                            </strong>
                        </span>
                        Это основа эффективного лечения грыжи и 
                        <u> альтернатива операции</u>
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
                        <img className="doctor" src="https://thumb.tildacdn.com/tild3831-3232-4332-b363-333637323532/-/cover/455x450/center/center/-/format/webp/Untitled-7_1.jpg" alt="doctor" />
                        <div className="description">
                            <Link href="/">
                                <div className="doctorName">Александр Ткачев
                                    <img className="arrowRight" src="https://static.tildacdn.com/tild3764-6535-4965-b831-613230383538/right-arrow1.svg" alt="arrow" />
                                </div>
                            </Link>
                            <div className="doctorProf">
                                Невролог, рефлексотерапевт, физиотерапевт
                                <br />
                            </div>
                            <div className="doctorDes">
                                Практик и ученый занимающийся исследованием дискогенной боли и механизмов резорбции грыжи.
                                <br />
                                <br />
                                Занимается исследованием резорбции межпозвонковой грыжи диска с 2012 года.
                                <br />
                                <br />
                                Регулярно публицируется в научных журналах. Активный участник авторитетных российский и международных медицинских сообществ (IASP, NASS, ESP)
                            </div>
                            <div className="companies">
                                <img src="https://thumb.tildacdn.com/tild3365-3432-4031-b039-633231623065/-/resize/107x/-/format/webp/noroot.png" alt="ESR" />
                                <img src="https://thumb.tildacdn.com/tild6538-6166-4763-b436-323039643633/-/resize/158x/-/format/webp/IASP20Logo20270X98_1.png" alt="IASP" />
                                <img src="https://thumb.tildacdn.com/tild6536-3564-4531-b633-373637323363/-/resize/159x/-/format/webp/ECMSgEyQj69J36Botvgu.jpg" alt="NASS" />
                            </div>
                        </div>
                    </div>
                    <div className="lowerBlock">
                        <div className="description">
                            <Link href="#">
                                <div className="doctorName">Антон Епифанов
                                    <img className="arrowRight" src="https://static.tildacdn.com/tild3764-6535-4965-b831-613230383538/right-arrow1.svg" alt="arrow" />
                                </div>
                            </Link>
                            <div className="doctorProf">
                                Невролог, спортивный врач, мануальный терапевт
                                <br />
                            </div>
                            <div className="doctorDes">
                                Специализируется на лечении неспецифических болей в спине, суставов, восстановлении после спортивных травм.
                                <br />
                                <br />
                                Активный популяризатор медицинской науки. Успешный блогер: за 5 лет более 30 млн. просмотров на ютуб-канале
                            </div>
                            <Link href="https://www.youtube.com/channel/UCg4dLRPl2WhDcK5nKJkG5lQ">
                                <div className="youtube_links">
                                    <img src="https://thumb.tildacdn.com/tild3730-3834-4330-b336-663430313134/-/resize/66x/-/format/webp/kisspng-computer-ico.png" alt="yt" />
                                    558k
                                    <br />
                                    подписчиков
                                </div>
                            </Link>
                        </div>

                        <img className="lowerDoctor" src="https://thumb.tildacdn.com/tild6361-3039-4665-a566-303862663031/-/cover/455x450/center/center/-/format/webp/Untitled-8_1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className={"youtube-modal-wrapper " + (youtubeActive ? "youtube-modal-active" : "")}>
                <iframe width="740" height="400" src={youtubeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="container youtube">

                <div className="youtube-left-block">
                    <img className="youtube-clipboard" src="./clipboard.gif" />
                    <div className="youtube-title">
                        <a><span>YouTube </span></a>
                        канал доктора Епифанова
                    </div>
                    <div className="youtube-subscribers">Более 558 тыс. подписчиков</div>
                    <button> Смотреть все видео </button>
                </div>
                <div className="youtube-right-block">
                    <YouTubeSlider setYouTubeUrl={setYouTubeUrl} setYouTubeActive={setYouTubeActive} />
                </div>
            </div>
            <div className="container">
                <div className="treatmentCourseSection">
                    <div className="treatmentDescription">
                        <h1 style={{ color: "#868a91" }}>Что входит в курс лечения</h1>
                    </div>
                    <div className="treatmentText">
                        <span style={{ color: "#868a91" }}>
                            Метод модулируемой резорбции включает в себя комплекс процедур. Мы
                            лечим боль в спине и суставах используя физиотерапию. Применяем
                            медикаменты, опираясь на международные протоколы. Все процедуры и
                            манипуляции выполняют только врачи, имеющую необходимую
                            квалификацию и аккредитацию.
                        </span>
                    </div>
                    <div className="treatmentBlock">
                        <TreatmentCourse id={id} setId={setId} />
                    </div>

                </div>
            </div>
            <div className="therapy-title">Что мы лечим</div>
            <div className="container cardList_terapy_wrapper">
                {
                    cardList_terapy.map((e)=> 
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
                    />)
                }
            </div>
            <div className="clinic">
                <h3>
                    5 федеральных 
                    <Link style={{color: "#0e7496 !important"}} href="/contacts"> клиник</Link>
                </h3>
            </div>
            <div className="container city_wrapper">
                <Link href="/msk-technopark/">
                    <div className="city_address">
                        <img src="https://static.tildacdn.com/tild6363-6466-4364-a334-383764323336/_1-05-01.svg" alt="moscow"/>
                        <div>
                            г. Москва
                            <br/>
                            м. Технопарк
                        </div>
                    </div>
                </Link>
                <Link href="/msk-fonvizinskaya/">
                    <div className="city_address">
                        <img src="https://static.tildacdn.com/tild6662-6263-4366-b030-636664636265/__2-10-01.svg" alt="moscow"/>
                        <div>
                            г. Москва
                            <br/>
                            м. Фонвизинская
                        </div>
                    </div>
                </Link>
                <Link href="spb">
                    <div className="city_address">
                        <img src="https://static.tildacdn.com/tild6136-6636-4136-a231-373666376631/__-02-01.svg" alt="spb"/>
                        <div>
                            г. Санкт-Петербург
                            <br/>
                            м. Пионерская
                        </div>
                    </div>
                </Link>
                <Link href="/krasnodar">
                    <div className="city_address">
                        <img src="https://static.tildacdn.com/tild3065-6533-4030-a230-616563323438/-06-06-01.svg" alt="krasnodar"/>
                        <div>
                            г. Краснодар
                            <br/>
                            ул. Северная 
                        </div>
                    </div>
                </Link>
                <Link href="kazan">
                    <div className="city_address">
                        <img src="https://static.tildacdn.com/tild6363-3530-4265-b434-383134653932/-04-01.svg" alt="kazan"/>
                        <div>
                            г. Казань
                            <br/>
                            ул. Право-Булачная
                        </div>
                    </div>
                </Link>
            </div>

            <div className='container card_specialists'>

                <div className='card_specialists_block1'>
                    <p id="title">Специалисты нашей клиники</p>
                    <button id="button">Записатья к врачу</button>
                </div>

                <div className="container cardList_specialists_wrapper">
                    {
                        cardList_specialists.map((e) =>
                            <Card_specialists
                                key={e.button}
                                {...e}
                            />
                        )
                    }
                </div>
            </div>


            <div className="Reviews-Wrapper">
                <h2> Отзывы и рейтинги</h2>
                <div className="Reviews-Content">
                    {
                        ReviewList.map((e) =>
                            <Review
                                key={e.title}
                                img={e.img}
                                title={e.title}
                                starEmpty={e.starEmpty}
                                starFull={e.StarFull}
                                reviews={e.reviews}
                                rating={e.rating}
                                btnReview={e.btnReview}
                            />)
                    }
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=79310093200&text=" target="_blank" rel="noopener noreferrer"><img className="whatsapp" width="48px" height="48px" src="data:image/svg+xml,%3c%3fxml version='1.0' %3f%3e%3csvg id='Layer_1' style='enable-background:new 0 0 1000 1000%3b' version='1.1' viewBox='0 0 1000 1000' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cstyle type='text/css'%3e .st0%7bfill:%2325D366%3b%7d .st1%7bfill-rule:evenodd%3bclip-rule:evenodd%3bfill:white%3b%7d %3c/style%3e%3ctitle/%3e%3cg%3e%3cpath class='st0' d='M500%2c1000L500%2c1000C223.9%2c1000%2c0%2c776.1%2c0%2c500v0C0%2c223.9%2c223.9%2c0%2c500%2c0h0c276.1%2c0%2c500%2c223.9%2c500%2c500v0 C1000%2c776.1%2c776.1%2c1000%2c500%2c1000z'/%3e%3cg%3e%3cg id='WA_Logo'%3e%3cg%3e%3cpath class='st1' d='M733.9%2c267.2c-62-62.1-144.6-96.3-232.5-96.4c-181.1%2c0-328.6%2c147.4-328.6%2c328.6 c0%2c57.9%2c15.1%2c114.5%2c43.9%2c164.3L170.1%2c834l174.2-45.7c48%2c26.2%2c102%2c40%2c157%2c40h0.1c0%2c0%2c0%2c0%2c0%2c0c181.1%2c0%2c328.5-147.4%2c328.6-328.6 C830.1%2c411.9%2c796%2c329.3%2c733.9%2c267.2z M501.5%2c772.8h-0.1c-49%2c0-97.1-13.2-139-38.1l-10-5.9L249%2c755.9l27.6-100.8l-6.5-10.3 c-27.3-43.5-41.8-93.7-41.8-145.4c0.1-150.6%2c122.6-273.1%2c273.3-273.1c73%2c0%2c141.5%2c28.5%2c193.1%2c80.1c51.6%2c51.6%2c80%2c120.3%2c79.9%2c193.2 C774.6%2c650.3%2c652%2c772.8%2c501.5%2c772.8z M651.3%2c568.2c-8.2-4.1-48.6-24-56.1-26.7c-7.5-2.7-13-4.1-18.5%2c4.1 c-5.5%2c8.2-21.2%2c26.7-26%2c32.2c-4.8%2c5.5-9.6%2c6.2-17.8%2c2.1c-8.2-4.1-34.7-12.8-66-40.8c-24.4-21.8-40.9-48.7-45.7-56.9 c-4.8-8.2-0.5-12.7%2c3.6-16.8c3.7-3.7%2c8.2-9.6%2c12.3-14.4c4.1-4.8%2c5.5-8.2%2c8.2-13.7c2.7-5.5%2c1.4-10.3-0.7-14.4 c-2.1-4.1-18.5-44.5-25.3-61c-6.7-16-13.4-13.8-18.5-14.1c-4.8-0.2-10.3-0.3-15.7-0.3c-5.5%2c0-14.4%2c2.1-21.9%2c10.3 c-7.5%2c8.2-28.7%2c28.1-28.7%2c68.5c0%2c40.4%2c29.4%2c79.5%2c33.5%2c84.9c4.1%2c5.5%2c57.9%2c88.4%2c140.3%2c124c19.6%2c8.5%2c34.9%2c13.5%2c46.8%2c17.3 c19.7%2c6.3%2c37.6%2c5.4%2c51.7%2c3.3c15.8-2.4%2c48.6-19.9%2c55.4-39c6.8-19.2%2c6.8-35.6%2c4.8-39C665%2c574.4%2c659.5%2c572.4%2c651.3%2c568.2z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e" /></a>
            <a href="https://t.me/temed_ru_bot" target="_blank" rel="noopener noreferrer"><img className="telegram" src="data:image/svg+xml,%3csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z' fill='url(%23paint0_linear)'/%3e %3cpath d='M8.93825 25.1739C11.7439 23.6286 14.8757 22.3387 17.8019 21.0423C22.8361 18.9189 27.8903 16.8323 32.9955 14.8897C33.9887 14.5587 35.7735 14.2351 35.9485 15.707C35.8526 17.7906 35.4584 19.862 35.188 21.9334C34.5018 26.4886 33.7085 31.0282 32.935 35.5684C32.6685 37.0808 30.774 37.8636 29.5618 36.8958C26.6486 34.9281 23.713 32.9794 20.837 30.966C19.8949 30.0088 20.7686 28.634 21.6099 27.9504C24.0093 25.5858 26.5539 23.5768 28.8279 21.09C29.4413 19.6088 27.6289 20.8571 27.0311 21.2397C23.7463 23.5033 20.5419 25.9051 17.0787 27.8945C15.3097 28.8682 13.2479 28.0361 11.4797 27.4927C9.89431 26.8363 7.57109 26.175 8.93809 25.1741L8.93825 25.1739Z' fill='white'/%3e %3cdefs%3e %3clinearGradient id='paint0_linear' x1='32.002' y1='8.0016' x2='20.002' y2='36' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%2337AEE2'/%3e %3cstop offset='1' stop-color='%231E96C8'/%3e %3c/linearGradient%3e %3c/defs%3e %3c/svg%3e" /></a>

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
                        {
                            reviewCard.map((e) =>
                                <div key={e.name} className="review-main-content-first-info">
                                    <div className="review-main-content-avatar">
                                        <img src={e.img}></img>
                                    </div>
                                    <div>
                                        <img src="https://static.tildacdn.com/tild6164-3162-4166-a633-306431323163/photo.svg"></img>
                                    </div>
                                    <div>
                                        {e.comment}
                                    </div>
                                    <div>
                                        <Link href={e.insta}>
                                            {e.instaName}
                                        </Link>
                                    </div>
                                    <div>
                                        {e.name}
                                        <br />
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
                <div style={{ marginBottom: "25px", display: "flex", justifyContent: "center" }}>
                    <Link href="/">
                        <button className="btn btn-blue">Больше отзывов</button>
                    </Link>
                </div>
            </div>
<div className="RegToWeb-Wrapper">
                    <RegToWeb />
            </div>
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
        </div>

    )
}
