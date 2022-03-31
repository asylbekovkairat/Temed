import React from 'react'
import Slider from 'react-slick/lib/slider'
import { SampleNextArrow, SamplePrevArrow } from '../../constants/sample-arrows'
import youtubeList from "../../constants/youtube-video-list"

export default function YouTubeSlider({ setYouTubeActive, setYouTubeUrl }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }
    const openYoutubeModal = (el)=>{
        setYouTubeActive(true)
        setYouTubeUrl(el)
        document.body.style.overflowY = "hidden"
    }
    return (
        <div className="youtube-slider">
            <Slider {...settings}>
                {
                    youtubeList.map((e) =>
                        <div className="youtube-right-cards" key={e}>
                            <img onClick={() => { openYoutubeModal(e.url) }} src={e.img} />
                            <div>{e.title}</div>
                            <div>{e.des}</div>
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}
