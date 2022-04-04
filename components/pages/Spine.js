import Link from "next/link";
import React from "react";
import Slider from "react-slick/lib/slider";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import { SampleNextArrow, SamplePrevArrow } from "../constants/sample-arrows";

const Spine = () => {
  const terapyBlock = [
    {
      img: "https://thumb.tildacdn.com/tild3736-3363-4463-a231-383063393835/-/resize/80x/-/format/webp/001-laser.png",
      terapyName: "Лазеротерапия",
      intervalOfTerapy: "Длительность процедуры: 20 мин. Курс: до 12 процедур",
      mainText:
        "Лазерное излучение — это биологический катализатор процессов восстановления и заживления. Роботизированный лазер MLS M6 ускоряет данные процессы в очаге воспаления. Мощность составляет на выходе 6 Вт, что в 200 раз больше обычных физиотерапевтических лазеров. Глубина проникновения луча около 7 см. Процедура безболезненная и никак не ощущается пациентом.",
    },
    {
      img: "https://thumb.tildacdn.com/tild6361-3561-4461-a436-383633303739/-/resize/80x/-/format/webp/003-back.png",
      terapyName: "Иглорефлексотерапия",
      intervalOfTerapy:
        "Длительность процедуры: от 20 мин. Курс: до 12 процедур",
      mainText:
        "Эффективность акупунктуры базируется на стимуляции нервных волокон, идущих к патологическому очагу, что приводит к изменению интенсивности обменных процессов и усилению восстановления в поврежденных клетках межпозвонкового диска и других анатомических структур позвоночника. Также оказывает выраженный обезболивающий эффект, что было подтверждено в ходе многочисленных исследований. Проводится по методам «dry needle» и пекинской школы акупунктуры.",
    },
    {
      img: "https://thumb.tildacdn.com/tild3466-6563-4631-a432-663462386131/-/resize/80x/-/format/webp/002-syringe.png",
      terapyName: "Медикаментозное лечение",
      intervalOfTerapy: "Индивидуальный подбор препарата и дозировки",
      mainText:
        "Современные международные стандарты лечения болевого синдрома, которые соответствуют принципам доказательной медицины, позволяют индивидуально подобрать медикаментозную терапию, которая будет контролировать болевой синдром в процессе лечения и наблюдения.",
    },
  ];
  const spineSlider = [
    {
      img: "https://thumb.tildacdn.com/tild3931-3336-4966-a234-316136333938/-/contain/860x550/center/center/-/format/webp/01-0318.jpg",
      imgText: "Результат за 4 месяца",
    },
    {
      img: "https://static.tildacdn.com/tild3534-3638-4166-b338-356530633262/03-0518.jpg",
      imgText: "Результат за 3 месяца",
    },
    {
      img: "https://static.tildacdn.com/tild3734-6439-4665-a339-643333666639/03-0615.jpg",
      imgText: "Результат за 5 месяца",
    },
    {
      img: "https://static.tildacdn.com/tild6534-6366-4137-b037-346261653431/03-0618.jpg",
      imgText: "Результат за 4 месяца",
    },
    {
      img: "https://static.tildacdn.com/tild3532-3036-4165-b834-616162363064/0317-0318.jpg",
      imgText: "Результат за 3 месяца",
    },
    {
      img: "https://static.tildacdn.com/tild3731-3034-4230-b662-393564366535/04-0518.jpg",
      imgText: "Результат за 4 месяца",
    },
    {
      img: "https://static.tildacdn.com/tild6135-6139-4364-b636-613364343236/0417-0518.jpg",
      imgText: "Результат за 6 месяца",
    },
    {
      img: "https://static.tildacdn.com/tild6136-3039-4637-a564-376166613566/05-0718.jpg",
      imgText: "Результат за 5 месяца",
    },
    {
      img: "https://static.tildacdn.com/tild3037-6430-4038-a238-326436396137/05-0818.jpg",
      imgText: "Результат за 4 месяца",
    },
  ];
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
  return (
    <div>
      <div className="container">
        <div className="container-spine">   
          <Header/>
        </div>
      </div>
      <div className="spine-block-header">
        <div className="container">
          <p>Лечение позвоночника</p>
        </div>
      </div>
      <div className="container">
        <div className="spine-block-nav">here must be main/ back treatment</div>
        <div className="spine-onlineConsultation-block">
          here will be existing component of this block
        </div>
      </div>
      <div className="spine-block-second-header">
        <div className="container">
          <p>Особенности лечения грыжи позвоночника без операции</p>
        </div>
      </div>
      <div className="container">
        <div className="spine-main-text">
          <div>
            Первый шаг в лечении грыжи позвоночника - это диагностика. Осмотр{" "}
            <Link href="https://temed.ru/doctors">врача невролога</Link> + МРТ
            исследования являются золотым стандартом при диагностике заболеваний
            позвоночника и позволяют максимально точно определить причину боли в
            спине.
          </div>
          <div style={{ paddingTop: "40px" }}>
            Второй шаг - это лечение. В основе метода Ткачева-Епифанова
            применяется комплексная и современная физиотерапия, которая
            используется по разработанным нами протоколам для каждой патологии.
            Это безопасные процедуры, для прохождения которых вам не потребуется
            ложиться в больницу. Лечение грыжи позвоночника без операции
            проходит амбулаторно и займет 25-50 минут в день.
          </div>
          <div style={{ paddingTop: "40px" }}>
            Курс лечения может назначаться пациентам как с грыжами диска, так и
            с протрузиями, а также в качестве профилактики развития
            дегенеративно-дистрофических изменений позвоночника.
          </div>
          <div style={{ paddingTop: "40px" }}>
            В курсовое лечение грыжи диска входит: Роботизированный MLS лазер +
            Иглорефлексотерапия.
          </div>
          <div style={{ paddingTop: "40px" }}>
            Дополнительные методы терапии (
            <Link href="https://temed.ru/recovery">
              Инновационная магнитотерапия BTL SIS, УВТ и Массаж
            </Link>{" "}
            назначаются на усмотрение лечащего врача после осмотра пациента,
            анамнеза заболевания и анализа дополнительных обследований (МРТ,
            анализы крови). Более подробно обо всех вариантах лечения, вам
            расскажет наш врач на первичном приеме.
          </div>
        </div>
        <div className="terapy-block">
          {terapyBlock.map((e) => (
            <div key={e.terapyName} className="terapy-block-wrapper">
              <div>
                <img src={e.img} />
              </div>
              <div className="terapy-name">{e.terapyName}</div>
              <div className="terapy-interval">{e.intervalOfTerapy}</div>
              <div className="terapy-mainText">{e.mainText}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="terapy-video-header">Чем мы лучше других</div>
        <div className="container">
          <iframe
            className="terapy-video"
            src="https://youtube.com/embed/usgoX67ECc8?rel=0&fmt=18&html5=1&showinfo=0"
          ></iframe>
        </div>
      </div>
      <div className="terapy-result">
        <div className="container">
          <div className="terapy-result-header">Реальные результаты</div>
          <div className="terapy-result-mainText">
            Ниже представлены результаты наших пациентов, которые прошли курс
            безоперационного лечения грыжи в центре Ткачева-Епифанова: снимки
            МРТ до и после лечения
          </div>
          <div className="spine-main-slider">
            <Slider {...settings}>
              {spineSlider.map((e) => (
                <div key={e.img} >
                  <div className="spine-slider"><img src={e.img} /></div>
                  <div className="spine-imgText">{e.imgText}</div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Spine;
