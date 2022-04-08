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
import Callme from "../common/Block_CallMe/callMe";
import {useState, useEffect} from "react"
import Mrt from "../common/mrt/mrt";
import RegToWeb from "./../common/RegToWeb/RegToWeb";
import cityAddressList from "../constants/city-address-list"
import Card from "../common/card/ConsultaitionCard";

export default function HomePage() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [youtubeActive, setYouTubeActive] = useState(false)
    const [youtubeUrl, setYouTubeUrl] = useState("")
    const [id, setId] = useState(0)
    
    const closeModalYouTube = ()=>{
        setYouTubeActive(false);
        setYouTubeUrl("");
        document.body.style.overflowY = "visible"
    }

    return (
        <div>
            <MainSlider />
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
                    </div>
                </div>
                
                <div className="cards-wrapper adap-cards">
                    {mainSliderCardList.map((e) => (
                        <div
                            style={{ backgroundColor: e.color }}
                            key={e.id}
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
                                mrtDesList[activeSlide].before.map((e) =>
                                    <div key={e.id} className="mrt-before-des-text">
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
                                mrtDesList[activeSlide].after.map((e) =>
                                    <div key={e.id} className="mrt-after-des-text">
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
                   
                </div>
            </div>
            <div onClick={closeModalYouTube} className={"youtube-modal-wrapper " + (youtubeActive ? "youtube-modal-active" : "")}>
                <iframe width="740" height="400" src={youtubeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div><svg onClick={() => { setYouTubeActive(false) }} style={{ cursor: "pointer" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.754014 27.4806L27.0009 1.32294" stroke="black"></path> <path d="M26.9688 27.5665L0.757956 1.39984" stroke="black"></path> </svg></div>

            </div>
            <div className="container youtube">

                <div className="youtube-left-block">
                    <img className="youtube-clipboard" src="./clipboard.gif" />
                    <div className="youtube-title">
                        <a href="https://www.youtube.com/channel/UCg4dLRPl2WhDcK5nKJkG5lQ" target="_blank" rel="noopener noreferrer"><span>YouTube </span></a>
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
                            key={e.id}
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
            {
                <div>
                    <Card/>
                </div>
            }

            <div className='container card_specialists'>

                <div className='card_specialists_block1'>
                    <p id="title">Специалисты нашей клиники</p>
                    <button id="button">Записатья к врачу</button>
                </div>

                <div className="container cardList_specialists_wrapper">
                    {
                        cardList_specialists.map((e) =>
                            <Card_specialists
                                key={e.id}
                                {...e}
                            />
                        )
                    }
                </div>
            </div>


            <div className="Reviews-Wrapper">
                <h2> Отзывы и рейтинги</h2>
            </div>
           
            <div className="container">
                <div className="review-main-content">
                    <div className="review-main-content-container">
                        {
                            reviewCard.map((e) =>
                                <div key={e.id} className="review-main-content-first-info">
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
                    <Link href="/comment">
                        <button className="btn btn-blue">Больше отзывов</button>
                    </Link>
                </div>
            </div>
            <div className="RegToWeb-Wrapper">
                <RegToWeb />
            </div>
            <Callme/>
        </div>

    )
}
