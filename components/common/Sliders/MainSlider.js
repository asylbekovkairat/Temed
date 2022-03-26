import Slider from "react-slick";
import FirstSlider from "./firstSlider";
import SecondSlider from "./secondSlider";
import ThirdSlider from "./thirdSlider";
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={className + " t-slds__arrow t-slds__arrow-left t-slds__arrow-withbg"} style={{ ...style, width: "50px", height: "50px", backgroundColor: "rgba(14,116,150,1)" }}> <div className="t-slds__arrow_body t-slds__arrow_body-left" style={{ width: "14px" }}> <svg style={{ display: "block" }} viewBox="0 0 15.2 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">  <desc>Left</desc> <polyline fill="none" stroke="#fafafa" strokeLinejoin="butt" strokeLinecap="butt" strokeWidth="4" points="2,2 12,12 2,22"></polyline> </svg> </div> </div>

    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={className + " t-slds__arrow t-slds__arrow-right t-slds__arrow-withbg"} style={{ ...style, width: "50px", height: "50px", backgroundColor: "rgba(14,116,150,1)" }}> <div className="t-slds__arrow_body t-slds__arrow_body-right" style={{ width: "14px" }}> <svg style={{ display: "block" }} viewBox="0 0 15.2 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <desc>Right</desc> <polyline fill="none" stroke="#fafafa" strokeLinejoin="butt" strokeLinecap="butt" strokeWidth="4" points="2,2 12,12 2,22"></polyline> </svg> </div> </div>

    );
}

export default function MainSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
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
