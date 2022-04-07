import React from "react";
import cn from "./../../../styles/method.module.css";

function Termin_of_rezorbtion() {
  return (
    <div className={cn.termin_rezorbtion}>
      <div className={cn.termin_header}>Термин Резорбция</div>
      <div className={cn.termin_header_text}>Появление и авторы</div>
      <div className={cn.termin_youtube_content}>
        <div className={cn.youtube_content}>
          <iframe src="https://youtube.com/embed/DZrNrvPb0-c?rel=0&fmt=18&html5=1&showinfo=0"></iframe>
        </div>
        <div className={cn.termin_main_text}>
          <div>
            Термин резорбция грыжи диска был впервые введён в русский интернет
            Ткачевым Александром Михайловичем и Епифановым Антоном
            Вячеславовичем.
          </div>
          <br />
          <div>
            Появление в декабре 2017 года первого ролика с докладом Александра
            Ткачева о резорбции грыжи диска на YouTube-канале Антона Епифанова
            можно официально считать точкой отсчёта популяризации данного
            термина.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Termin_of_rezorbtion;
