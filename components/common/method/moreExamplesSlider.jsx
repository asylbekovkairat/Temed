import React from "react";
import Slider from "react-slick/lib/slider";
import { SampleNextArrow, SamplePrevArrow } from "./../../constants/sample-arrows"

function MoreExamplesSlider() {
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
    nextArrow: <SampleNextArrow />,
  };
  const spineSlider = [
    {
      img: "https://thumb.tildacdn.com/tild3931-3336-4966-a234-316136333938/-/contain/860x550/center/center/-/format/webp/01-0318.jpg",
    },
  
    {
      img: "https://static.tildacdn.com/tild3734-6439-4665-a339-643333666639/03-0615.jpg",
    },
    {
      img: "https://static.tildacdn.com/tild3532-3036-4165-b834-616162363064/0317-0318.jpg",
    },
    {
      img: "https://static.tildacdn.com/tild3731-3034-4230-b662-393564366535/04-0518.jpg",
    },
    {
      img: "https://static.tildacdn.com/tild6135-6139-4364-b636-613364343236/0417-0518.jpg",
    },
    {
      img: "https://static.tildacdn.com/tild6136-3039-4637-a564-376166613566/05-0718.jpg",
    },
    {
      img: "https://static.tildacdn.com/tild3037-6430-4038-a238-326436396137/05-0818.jpg",
    },
  ];
  return (
    <div className="spine-main-slider">
      <Slider {...settings}>
        {spineSlider.map((e) => (
          <div key={e.img}>
            <div className="spine-slider">
              <img src={e.img} />
            </div>
            <div className="spine-imgText">{e.imgText}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MoreExamplesSlider;
