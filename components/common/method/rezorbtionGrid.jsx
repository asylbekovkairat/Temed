import React from "react";
import cn from "./../../../styles/method.module.css";

function RezorbtionGrid() {
  const rezorbtionTreatmentGridArea = [
    {
      img: "https://thumb.tildacdn.com/tild3434-3530-4163-a166-363535663466/-/cover/150x150/center/center/-/format/webp/1.png",
      text: " Начало или появление грыжи. Мозг чувствует боль!",
    },
    {
      img: "https://thumb.tildacdn.com/tild3739-3366-4131-b064-666466366466/-/cover/150x150/center/center/-/format/webp/2.png",
      text: "Организм приступает к решительным действиям!В ответ на образование грыжи в организме запускается воспаление. В месте образования грыжи вырабатывается большое количество особых веществ — цитокинов. Они заманивают клетки иммунитета в место, где сформировалась грыжа",
    },
    {
      img: "https://thumb.tildacdn.com/tild3439-3432-4139-b334-353261623235/-/cover/150x150/center/center/-/format/webp/3.png",
      text: "В очаг повреждения посылается отряд особого назначения из иммунных клеток! Доминирующим типом клеток в данном процессе являются – макрофаги. Они играют центральную роль в разрешении воспаления и тканевом ремоделировании, связанного с заживлением раны",
    },
    {
      img: "https://thumb.tildacdn.com/tild3264-3937-4766-b763-326338633162/-/cover/150x150/center/center/-/format/webp/4.png",
      text: " Организм постоянно контролирует этот процесс и оптимизирует работу своих солдат",
    },
    {
      img: "https://thumb.tildacdn.com/tild6131-3039-4933-b862-313735376462/-/cover/150x150/center/center/-/format/webp/5.png",
      text: "В межпозвонковом диске нет сосудов, и чтобы солдатам добраться до отдаленных мест грыжи, сосуды вначале должны туда прорасти, и на это нужно некоторое время",
    },
    {
      img: "https://thumb.tildacdn.com/tild6366-3966-4665-a434-653834306430/-/cover/150x150/center/center/-/format/webp/6.png",
      text: "Иммунные клетки начинают поедать грыжу",
    },
    {
      img: "https://thumb.tildacdn.com/tild6330-3730-4263-b763-303939313866/-/cover/150x150/center/center/-/format/webp/7.png",
      text: "На некоторое время межпозвонковая грыжа может стать больше в размере за счет отека и количества солдат иммунной системы. Именно на этом этапе обостряется болевой синдром. Многие врачи и пациенты принимают это за отрицательную динамику. Не паникуйте!",
    },
    {
      img: "https://thumb.tildacdn.com/tild3661-3638-4238-b439-353333633137/-/cover/150x150/center/center/-/format/webp/8.png",
      text: "Затем грыжа диска будет уменьшаться. Она становится менее плотной по структуре. На МРТ такой этап обычно отмечается более светлым цветом грыжи",
    },
    {
      img: "https://thumb.tildacdn.com/tild3465-3165-4464-a264-323562303732/-/cover/150x150/center/center/-/format/webp/9.png",
      text: "Становиться все меньше и меньше. Теперь иммунные клетки начинают подавлять воспалительную реакцию в пораженном диске и боль, выделяют факторы роста — сигнальные молекулы, которые сообщают клеткам, что нужно начинать деление.Запускается процесс восстановления и заживления ткани, ремоделирование, который может длиться до года",
    },
    {
      img: "https://thumb.tildacdn.com/tild6664-6537-4431-b438-373037323365/-/cover/150x150/center/center/-/format/webp/10.png",
      text: " Когда организм понимает, что резорбция уже закончена, образуется рубец на месте выхода грыжи",
    },
    {
      img: "https://thumb.tildacdn.com/tild6534-3131-4235-b330-336535323562/-/cover/150x150/center/center/-/format/webp/11.png",
      text: " А потом наступает счастье пациента и нашей клиники",
    },
  ];
  return (
    <div>
      <div className={cn.first_treatment_ways}>
        <p>Лечение грыжи</p>
        <div className={cn.second_treatment_ways}>
          <p>Этапы Резорбции: от появления грыжи до полного исцеления</p>
        </div>
      </div>
      <div className={cn.rezorbtionTreatmentGrid}>
        {" "}
        {rezorbtionTreatmentGridArea.map((item) => (
          <div className={cn.rezorbtionTreatmentGridArea} key={item.id}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RezorbtionGrid;
