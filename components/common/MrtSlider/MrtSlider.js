import Slider from "react-slick/lib/slider";
import mrtList from "../../constants/mrt-slider-card-list";
import {useState} from "react"

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
