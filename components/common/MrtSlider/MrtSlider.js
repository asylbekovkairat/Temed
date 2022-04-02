import Slider from "react-slick/lib/slider";
import mrtList from "../../constants/mrt-slider-card-list";
import { SampleNextArrow, SamplePrevArrow } from "../../constants/sample-arrows";

export default function MrtSlider({setActiveSlide}) {

    const settings = {
        focusOnSelect: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '80px',
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        afterChange: current => setActiveSlide(current),
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "115px"
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1 ,
                    centerPadding: '80px'
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "60px"
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    mrtList.map((e) =>
                        <div key={e.title} className="mrt-card-wrapper">
                            <img src={e.img} />
                            <div>{e.title}</div>
                        </div>
                    )
                }
            </Slider>
            
        </div>
    )
}
