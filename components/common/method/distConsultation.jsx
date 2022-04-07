import React from "react";
import cn from "./../../../styles/method.module.css";


function DistConsultation() {
  return (
    <div className={cn.distConsultation}>
      <div className={cn.distConsultationTextHeader}>
        <div>
          <p>Получите дистанционную консультацию по МРТ позвоночника</p>
        </div>
        <div className={cn.distConsultationText}>
          <p>
            Отправьте МРТ исследование и получите наше экспертное мнение о
            возможности лечения
          </p>
        </div>
        <div className={cn.distBtn}>
          <button>Получить консультацию</button>
        </div>
      </div>
      <div className={cn.distConsultationImg}>
        <img
          src="https://thumb.tildacdn.com/tild6163-6239-4962-a264-373231633264/-/format/webp/spine-MRI_G_17542765.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default DistConsultation;
