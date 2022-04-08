import React from "react";
import cn from "./../../../styles/method.module.css";

function Mechanism_resorbtion() {
  return (
    <div className={cn.termin_rezorbtion}>
      <div className={cn.termin_header}>Механизм Резорбции</div>
      <div className={cn.termin_header_text}>Или как возникает грыжа?</div>
      <div className={cn.mechanism_of_rezorbtion}>
        <div>
          <p style={{ marginTop: "30px" }}>
            {" "}
            Чтобы понять механизм резорбции, вспомним физиологию возникновения
            грыжи.
            <br />
            Позвоночник человека состоит из 33 позвонков и 23 межпозвонковых
            дисков. Диски скрепляют позвонки и являются своего рода
            амортизаторами, защищающие позвонки от повреждения при ходьбе. По
            своему строению диски напоминают плоскую капсулу с гелем. Внутри
            этой капсулы расположено пульпозное ядро студенистой консистенции,
            вокруг — фиброзное кольцо, а сверху и снизу — гиалиновые и
            замыкательные пластинки.
          </p>
        </div>
        <div>
          <img
            src="https://thumb.tildacdn.com/tild3738-3536-4964-b161-303835376535/-/cover/460x360/center/center/-/format/webp/p0ZGYmWrmJ4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://thumb.tildacdn.com/tild3861-3965-4436-b735-363031653931/-/cover/460x360/center/center/-/format/webp/3.jpg"
            alt=""
          />
        </div>
        <div>
          <p style={{ marginTop: "150px" }}>
            Почти любая грыжа начинается с процесса дегенерации диска или
            старения. При этом фиброзное кольцо становится менее прочным, даже
            при повседневных нагрузках может порваться, как платина, которая
            иногда не может сдержать поток воды - пульпозное ядро выпячивается
            за пределы диска. Это выпячивание и есть грыжа.
          </p>
        </div>
        <div>
          <p style={{ marginTop: "150px" }}>
            Как только она возникает, наш организм воспринимает её как инородное
            тело, и иммунитет человека начинает борьбу, результатом которой и
            может стать частичная или полная резорбция. В основе резорбции
            межпозвонковой грыжи лежит воспалительная реакция.
          </p>
        </div>
        <div>
          <img
            src="https://thumb.tildacdn.com/tild3966-3930-4230-b362-393639393132/-/cover/460x360/center/center/-/format/webp/article-img-1-interv.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Mechanism_resorbtion;
