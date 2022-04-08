import React from "react";
import cn from "./../../../styles/method.module.css";
import Link from "next/link";

function RezorbtionImageText() {
  return (
    <div className={cn.treatment_way_main_content}>
      <div className={cn.treatment_way_main_content_img}>
        <img
          src="https://thumb.tildacdn.com/tild3335-3032-4235-b732-383337663361/-/resize/560x/-/format/webp/noroot.png"
          alt=""
        />
        <em>gettyimages.com</em>
      </div>
      <div className={cn.treatment_way_main_content_text}>
        <div>
          <Link href="https://temed.ru/tpost/33h3mhxh16-lechenie-grizhi-pozvonochnika">
            Грыжа межпозвонкового диска
          </Link>
          - весьма распространённое заболевание среди населения Земли. Является
          одной из основных причин возникновения болей в спине. Зачастую
          сопровождается сильной стреляющей болью в спине и ногах, онемением
          конечностей.
        </div>
        <div>
          {" "}
          При грыже межпозвонкового диска есть два основных пути решения
          проблемы – отправиться на операцию или получить консервативное
          лечение.
        </div>
        <div>
          Операция считается самым быстрым способом избавиться от грыжи
          позвоночника, но и самым рискованным. К тому же операция не всегда
          помогает избавить человека от болезненной симптоматики и не исключает
          рецидивов. Поэтому ложиться на стол нейрохирурга рекомендуют в крайних
          случаях.
        </div>
        <div>
          К сожалению, ещё очень много людей до сих пор не верят, что от грыжи
          диска можно избавиться ещё каким-нибудь способом, кроме оперативного
          вмешательства. А фраза «резорбция грыжи диска» вызывает полный
          скептицизм.
        </div>
        <div>
          Поэтому предлагаем разобраться в этом процессе и разложить все по
          полочкам.
        </div>
      </div>
    </div>
  );
}

export default RezorbtionImageText;
