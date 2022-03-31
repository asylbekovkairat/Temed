import Slider from "react-slick";
import FirstSlider from "./firstSlider";
import SecondSlider from "./secondSlider";
import ThirdSlider from "./thirdSlider";
import { SampleNextArrow, SamplePrevArrow } from "../../constants/sample-arrows";

export default function MainSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        swipe: false,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />

    };
    return (
        <div className="slider-wrapper" >
            <Slider {...settings}>
               <FirstSlider/>
               <SecondSlider/>
               <ThirdSlider/>               
            </Slider>
        </div>
    )
}
