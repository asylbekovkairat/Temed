import React from "react";
import cn from "./../../../styles/method.module.css";

function RezorbtionTextImage() {
  return (
    <div className={cn.article_rezorbtion}>
      <div className="container">
        <div className={cn.rezorbtion_header}>
          Что такое Резорбция межпозвонковой грыжи диска?
        </div>
        <div className={cn.rezorbtion_text}>
          Ваш организм может справиться с грыжей сам
        </div>
        <div className={cn.treatment_way_main_content}>
          <div className={cn.treatment_way_main_content_text}>
            <div>
              Резорбция межпозвонковой грыжи (частичная или полная) — частичное
              уменьшение размеров или полное исчезновение грыжи межпозвонкового
              диска без хирургического вмешательства.
            </div>
            <div>
              {" "}
              Само слово «резорбция» происходит от лат. «resorbeo» — поглощать,
              растворять. И в данном контексте процесс резорбции грыжи диска
              подразумевает самопроизвольное рассасывание грыжи.
            </div>
            <div>
              Первые научные статьи, в которых упоминалась спонтанная резорбция
              грыжи, приходится на конец 1984 – начало 1985 годов.
            </div>
            <div>
              Развитие компьютерной и магнитно-резонансной томографии позволило
              зафиксировать это явление, и в 1990 году появилась статья с
              описанием спонтанной резорбции грыжи по результатам МРТ и КТ.
              Более глубокие исследования данного процесса начались в России в
              2012 году. За последние 10 лет совместная командная работа
              российских и зарубежных учёных продвинула изучение данного
              процесса на совершенно новый уровень.
            </div>
          </div>
          <div className={cn.treatment_way_main_content_img}>
            <img
              src="https://thumb.tildacdn.com/tild3539-3562-4763-a137-366264343337/-/resize/560x/-/format/webp/noroot.png"
              alt=""
            />
            <em>gettyimages.com</em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RezorbtionTextImage;
