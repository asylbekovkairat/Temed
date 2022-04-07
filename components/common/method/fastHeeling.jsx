import React from "react";
import cn from "./../../../styles/method.module.css";

function FastHeeling() {
  return (
    <div className={cn.fastHeeling}>
      <div className="container">
        <div className={cn.first_treatment_ways}>
          <p>Ускорение заживления</p>
          <div className={cn.second_treatment_ways}>
            <p>Создание условий для модулирования резорбции</p>
          </div>
        </div>
        <div className={cn.treatment_way_main_content}>
          <div className={cn.treatment_way_main_content_img}>
            <img
              src="https://thumb.tildacdn.com/tild3564-3437-4637-b566-346333346465/-/resize/460x/-/format/webp/noroot.png"
              alt=""
            />
            <em>gettyimages.com</em>
          </div>
          <div className={cn.treatment_way_main_content_text}>
            <div>
              Резорбция грыжи диска является естественным процессом. Но это не
              означает, что она может наступить во всех случаях. И зачастую
              этому процессу спонтанной резорбции нужна помощь извне. За годы
              практики врачи нашей клиники научились создавать условия, которые
              её ускоряют или стимулируют, другими словами
              <strong> модулировать резорбцию.</strong>
            </div>
            <div>
              {" "}
              Основная часть метода Ткачева-Епифанова состоит из комплекса
              процедур, направленных на улучшение метаболизма и кровоснабжения
              пораженного участка. Ведь чем лучше обмен веществ и
              кровоснабжение, тем больше клеток иммунитета и питательных веществ
              попадёт к грыже, и тем скорее произойдёт её рассасывание.
            </div>
            <div>
              В метод модулируемой резорбции Ткачева-Епифанова включены
              лазеротерапия, иглорефлексотерапия, инновационная магнитотерапия.
              Для лечения боли используются препараты и дозировки,
              соответствующие международным фармацевтическим стандартам. Всё
              подбирается в индивидуальном порядке и только при очном осмотре.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastHeeling;
