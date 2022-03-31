import MainSlider from "../common/Sliders/MainSlider";
import Link from "next/link"
import { useState, useEffect } from "react"
import Card from "../card/ConsultaitionCard";


export default function HomePage() {
    const [adap, setAdap] = useState(false);
    useEffect(() => {
        if (window.innerWidth > 980) {
            setAdap(true)
        }
        else {
            setAdap(false)
        }
    }, []);
    const cardList = [
        {
            img: "https://static.tildacdn.com/tild6562-3863-4463-b165-396165333238/001-doctor.svg",
            firstText: "Боли или прострелы",
            text: "в спине, онемение или покалывание в руке или ноге?",
            lastText: " Причиной может быть грыжа диска",
            color: "white"
        },
        {
            img: "https://static.tildacdn.com/tild6135-3734-4430-b433-343339353563/002-rank.svg",
            firstText: "13 лет",
            text: "лечим боли в спине и грыжи дисков. 9 из 10 пациентов",
            lastText: " вылечились без операции",
            color: "white"
        },
        {
            img: "https://static.tildacdn.com/tild3538-3061-4638-a139-386237333131/003-diagnostic.svg",
            firstText: "Подтверждаем ",
            text: "результаты лечения с помощью снимков",
            lastText: " МРТ до и после",
            color: "white"
        },
        {
            img: "https://static.tildacdn.com/tild3966-3832-4634-a261-663764316238/004-x-ray.svg",
            firstText: "Знаем все о резорбции:",
            text: "проводим исследования, публикуем доклады, участвуем в конференциях",
            lastText: "",
            color: "white"
        }
    ]
    return (
        <div>
            {
                (adap ? <MainSlider /> : <div>
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
                            cardList.map((e) =>
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
                </div>)

            }
            {
                <div>
                    <Card/>
                </div>
            }


        </div>
    )
}
