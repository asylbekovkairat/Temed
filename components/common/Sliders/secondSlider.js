import Link from 'next/link'
import {useState,useEffect} from "react"

export default function SecondSlider() {
    const [offset, setOffset] = useState();
    const handleScroll = () => setOffset(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return (
        <div className=" secondSlider">
            <img style={offset < 291 ? { top: ` ${259 - offset / 2}px` } : { top: "117px" }} src='https://thumb.tildacdn.com/tild3366-6137-4864-a639-666262616331/-/resize/526x/-/format/webp/----05_07_2021_02.png' />
            <img style={offset < 231 ? { top: ` ${100 + offset / 2}px` } : {top: "215px"}} src='https://thumb.tildacdn.com/tild6432-6339-4531-a361-356564353939/-/resize/608x/-/format/webp/----05_07_2021_01.jpg' />
            <div style={offset < 81 ? { top: ` ${-211 + offset / 2}px` } : { top: "-170px" }} className='round-pink-border-wrapper'>
                    <div className='round-border-under-wrapper'>
                        <div style={{ borderColor: "#ff685a" }} className='round-border'>

                        </div>
                    </div>
                </div>
            <div style={offset < 161 ? { top: ` ${384 - offset / 2}px` } : { top: "305px" }} className='round-blue-border-wrapper'>
                    <div className='round-border-under-wrapper'>
                        <div style={{ borderColor: "#0e7496" }} className='round-border'>

                        </div>
                    </div>
                </div>
            <div style={{ top: ` ${292 + offset / 2}px` }} className='round-mini-blue-border-wrapper'>
                    <div className='round-border-under-wrapper'>
                        <div style={{ borderColor: "#0e7496" }} className='round-border-mini'>

                        </div>
                    </div>
                </div>
            <div className='secondSliderWrapper'>
                <div className='secondSliderText'>
                    Даём предварительный прогноз по МРТ
                </div>
                <div className='secondSliderSecondText'>
                    Отправьте МРТ исследование и получите наше экспертное мнение о возможности лечения
                </div>
                <Link href="/offemrt">
                    <button className='slick-btn'>
                        Отправить онлайн
                    </button>
                </Link>
               
            </div>

        </div>
    )
}
