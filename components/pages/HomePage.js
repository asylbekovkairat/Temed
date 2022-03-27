import MainSlider from "../common/Sliders/MainSlider";
import Link from "next/link"


export default function HomePage() {
    return (
        <div>
            <div className="authors">
                <h2>Авторы метода модулируемой резорбции</h2>
            </div>
            <div className="container authorWrapper">
                <div className="upperBlock">
                    <img className="doctor" src="https://thumb.tildacdn.com/tild3831-3232-4332-b363-333637323532/-/cover/455x450/center/center/-/format/webp/Untitled-7_1.jpg" alt="doctor"/>
                    <div className="description">
                        <Link href="/">
                            <div className="doctorName">Александр Ткачев
                                <img className="arrowRight" src="https://static.tildacdn.com/tild3764-6535-4965-b831-613230383538/right-arrow1.svg" alt="arrow"/>
                            </div>
                        </Link>
                        <div className="doctorProf">
                            Невролог, рефлексотерапевт, физиотерапевт
                        <br/>
                        </div>
                        <div className="doctorDes">
                            Практик и ученый занимающийся исследованием дискогенной боли и механизмов резорбции грыжи.
                            <br/>
                            <br/>
                            Занимается исследованием резорбции межпозвонковой грыжи диска с 2012 года.
                            <br/>
                            <br/>
                            Регулярно публицируется в научных журналах. Активный участник авторитетных российский и международных медицинских сообществ (IASP, NASS, ESP)
                        </div>
                        <div className="companies">
                            <img src="https://thumb.tildacdn.com/tild3365-3432-4031-b039-633231623065/-/resize/107x/-/format/webp/noroot.png" alt="ESR"/>
                            <img src="https://thumb.tildacdn.com/tild6538-6166-4763-b436-323039643633/-/resize/158x/-/format/webp/IASP20Logo20270X98_1.png" alt="IASP"/>
                            <img src="https://thumb.tildacdn.com/tild6536-3564-4531-b633-373637323363/-/resize/159x/-/format/webp/ECMSgEyQj69J36Botvgu.jpg" alt="NASS"/>
                        </div>
                    </div>
                </div>
                <div className="lowerBlock">
                    <div className="description">
                        <Link href="#">
                            <div className="doctorName">Антон Епифанов
                                <img className="arrowRight" src="https://static.tildacdn.com/tild3764-6535-4965-b831-613230383538/right-arrow1.svg" alt="arrow"/>
                            </div>
                        </Link>
                        <div className="doctorProf">
                            Невролог, спортивный врач, мануальный терапевт
                        <br/>
                        </div>
                        <div className="doctorDes">
                            Специализируется на лечении неспецифических болей в спине, суставов, восстановлении после спортивных травм.
                        <br/>
                        <br/>
                            Активный популяризатор медицинской науки. Успешный блогер: за 5 лет более 30 млн. просмотров на ютуб-канале
                        </div>
                        <Link href="https://www.youtube.com/channel/UCg4dLRPl2WhDcK5nKJkG5lQ">
                            <div className="youtube_links">
                                <img className="doctor" src="https://thumb.tildacdn.com/tild3730-3834-4330-b336-663430313134/-/resize/66x/-/format/webp/kisspng-computer-ico.png" alt="yt"/>
                                558k
                                <br/>
                                подписчиков
                            </div>
                        </Link>
                    </div>
                    <img src="https://thumb.tildacdn.com/tild6361-3039-4665-a566-303862663031/-/cover/455x450/center/center/-/format/webp/Untitled-8_1.jpg" alt=""/>

                </div>
            </div>
        </div>
    )
}
