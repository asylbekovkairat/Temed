import React from 'react'
import cn from "./../../../styles/method.module.css";

function ImportantBlock() {
  return (
    <div className={cn.important_block}>
    <div className="container">
      <div className={cn.important_block_container}>
        <div className={cn.important_block_img}>
          <img
            src="https://thumb.tildacdn.com/tild3461-3932-4265-a539-633132306132/-/cover/560x550/center/center/-/format/webp/IMG_4518web111.jpg"
            alt=""
          />
        </div>
        <div className={cn.important_block_text}>
          <div className={cn.important_block_header_text}>Важно!</div>
          <div className={cn.important_block_header_main_text}>
            В любом лечении принципиальное значение имеет специалист. Важен
            опыт и интуиция, ведь каждый случай индивидуален: подход к
            лечению одного пациента может не подойти и даже навредить
            другому. В клинике Ткачева-Епифанова работают врачи с большим
            опытом борьбы с межпозвонковыми грыжами. Здесь прошли лечение
            более тысячи пациентов. Наши специалисты могут предварительно
            посмотреть Ваши снимки МРТ и сообщить о вероятности резорбции и
            возможности лечения в нашей клинике.
          </div>
          <div className={cn.important_block_header_footer_text}>
            Мы можем оценить состояние позвоночника по снимкам МРТ и
            сообщить о возможности лечения
          </div>
          <button className={cn.important_block_btn}>
            Получить бесплатную консультацию
            </button>
            {/* <button className="btn slick-btn btn-important">Получить бесплатную консультацию</button> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ImportantBlock