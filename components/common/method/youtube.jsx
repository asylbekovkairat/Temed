import React from "react";
import cn from "./../../../styles/method.module.css";

function Youtube() {
  return (
    <div className="container">
      <div className={cn.first_treatment_ways}>
        <p style={{marginTop:'30px'}}>Что думают нейрохирурги о резорбции грыжи</p>
        <div className={cn.second_treatment_ways}>
          <p style={{marginBottom:'30px'}}>Доклад на 18-ой Ассамблее «Здоровая Москва»</p>
        </div>
      </div>
      <div>
        <iframe
          className="terapy-video"
          src="https://youtube.com/embed/xMM7JmIgrSk?rel=0&fmt=18&html5=1&showinfo=0"
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube;
