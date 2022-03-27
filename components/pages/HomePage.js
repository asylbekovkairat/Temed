import MainSlider from "../common/Sliders/MainSlider";
import Link from "next/link"
import { useState, useEffect } from "react"
import mainSliderCardList from "../constants/main-slider-card-list";
import MrtSlider from "../common/MrtSlider/MrtSlider";
import mrtDesList from "../constants/mrt-slider-card-des";


export default function HomePage() {
    const [activeSlide, setActiveSlide] = useState(0)
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
                <div className='cards-wrapper adap-cards'>
                    {
                        mainSliderCardList.map((e) =>
                            <div style={{ backgroundColor: e.color }} key={e.text} className="cardWrapper adap-card">
                                <div className="adap-title-wrapper">
                                    <img src={e.img} />
                                    <span className="adap-card-first-text">{e.firstText}</span>
                                </div>
                                <div className="adap-text-wrapper">

                                    <div className="adap-card-text">{e.text}
                                        <span className="adap-card-last-text">
                                            {e.lastText}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="mrt">
                        <img src="https://static.tildacdn.com/tild3962-3363-4530-b466-386339303338/chiropractor-concept.jpg" />
                        <div className="mrt-text-wrapper">
                            <div className="mrt-text">
                            <h3>
                                Получите онлайн-консультацию по снимкам МРТ
                            </h3>
                            <div>
                                Вы узнаете можно ли вылечить грыжу без операции в нашей клинике
                            </div>
                        </div>
                        <button className="slick-btn btn-mrt">Показать МРТ врачу</button>
                        </div>
                        
                    </div>

                    <div className="mrt-title-slider-wrapper">
                        <div className="mrt-title">
                            <h1>
                                Наши результаты, которыми мы гордимся
                            </h1>
                            <div>
                                Уже более 3 000 довольных пациентов избавились
                                от боли в спине и уменьшили грыжу без операции!
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
                                    <div key={e} className="mrt-before-des-text">
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
                                    <div key={e} className="mrt-after-des-text">
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
        </div>
    )
}
