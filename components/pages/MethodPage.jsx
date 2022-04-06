import Link from "next/link";
import React from "react";
import DistConsultation from "../common/method/distConsultation";
import Effectivity from "../common/method/effectivity";
import FastHeeling from "../common/method/fastHeeling";
import ImportantBlock from "../common/method/importantBlock";
import LinksColumnBlock from "../common/method/linksColumnBlock";
import Mechanism_resorbtion from "../common/method/mechanism_resorbtion";
import NegativeFactors from "../common/method/negativeFactors";
import RezorbtionGrid from "../common/method/rezorbtionGrid";
import RezorbtionImageText from "../common/method/rezorbtionImageText";
import RezorbtionTextImage from "../common/method/rezorbtionTextImage";
import RezorbtionTimeBlock from "../common/method/rezorbtionTimeBlock";
import RezorbtionTimeImage from "../common/method/rezorbtionTimeImage";
import Termin_of_rezorbtion from "../common/method/termin_of_rezorbtion";
import Mrt from "../common/mrt/mrt";
import cn from "./../../styles/method.module.css";
import MoreExampleBlock from "../common/method/moreExampleBlock";
import Youtube from "../common/method/youtube";
import ArticleAndReview from "../common/method/articleAndReview";

const MethodPage = () => {
  return (
    <div>
      <div className={cn.method_container}>
        <div className="container">
          <p>Специалисты клиники</p>
        </div>
      </div>
      <div className="container">
        <div className={cn.method_links}>
          <Link href="/">Главная / </Link>
          <Link href="/"> Резорбция грыжи</Link>
        </div>
        <Mrt />
        <LinksColumnBlock />
        <div className={cn.line}></div>
        <div className={cn.first_treatment_ways}>
          <p>Пути лечения грыжи</p>
          <div className={cn.second_treatment_ways}>
            <p>Операция или консервативное лечение?</p>
          </div>
        </div>
        <RezorbtionImageText />
      </div>
      <RezorbtionTextImage />
      <div className="container">
        <div
          className="RegToWeb-Content"
          style={{ width: "100%", marginBottom: "30px" }}
        >
          <img src="https://thumb.tildacdn.com/tild6638-3738-4462-b136-636165383531/-/resize/251x/-/format/webp/webinar-concept-illu.png" />
          <div className="regToWeb-Desc">
            <p className="About-Therapy">
              Узнайте больше о лечении от самих пациентов!
            </p>
          </div>
          <button className="RegToWebinar-btn">Записаться на вебинар</button>
        </div>
        <Termin_of_rezorbtion />
        <Mechanism_resorbtion />
        <DistConsultation />
        <RezorbtionGrid />
      </div>
      <FastHeeling />
      <Effectivity />
      <ImportantBlock />
      <RezorbtionTimeBlock />
      <RezorbtionTimeImage />
      <NegativeFactors />
      <MoreExampleBlock />
      <Youtube />
      <ArticleAndReview />
    </div>
  );
};

export default MethodPage;
