import React from "react";
import cn from "./../../../styles/method.module.css";

function NegativeFactors() {
  const negativefactorsCards = [
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild3335-3639-4836-b631-663837346130/-/resize/50x/-/format/webp/001-pills.png",
      text: "Длительный прием НПВС",
    },
    {
      id: 2,
      img: "https://thumb.tildacdn.com/tild3433-3863-4935-b037-363934366131/-/resize/50x/-/format/webp/002-elderly.png",
      text: "Пожилой возраст",
    },
    {
      id: 3,
      img: "https://thumb.tildacdn.com/tild3734-3031-4362-b363-613739616231/-/resize/50x/-/format/webp/006-blood-cells.png",
      text: "Железодефицитная анемия",
    },
    {
      id: 4,
      img: "https://thumb.tildacdn.com/tild3265-3361-4961-a538-306539666664/-/resize/50x/-/format/webp/003-glucosemeter.png",
      text: "Сахарный диабет",
    },
    {
      id: 5,
      img: "https://thumb.tildacdn.com/tild6136-3534-4031-b131-633131323663/-/resize/50x/-/format/webp/004-female.png",
      text: "Постменопауза",
    },
    {
      id: 6,
      img: "https://thumb.tildacdn.com/tild6637-6631-4830-b964-316131353161/-/resize/50x/-/format/webp/005-transparency.png",
      text: "Другие факторы",
    },
  ];
  return (
    <div className="container">
      <div className={cn.first_treatment_ways}>
        <p>Негативные факторы для резорбции</p>
        <div className={cn.second_treatment_ways}>
          <p>Что мешает скорому выздоровлению?</p>
        </div>
      </div>
      <div className={cn.negative_factors}>
        <p style={{ marginBottom: "30px", marginTop: "30px" }}>
          Применение блокад, пожалуй, один из самых негативных факторов, который
          может приостановить, остановить полностью или просто не запустить
          процесс резорбции грыжи. Боль снимается путём снятия воспаления,
          которое играет самую важную роль в резорбции, а также снижения
          иммунитета в зоне введения.
        </p>
        <p>
          Остальные факторы не такие критичные, но тоже вносят свой вклад в
          вероятность резорбции:
        </p>
      </div>

      <div className={cn.negative_factors_card}>
        {negativefactorsCards.map((factorCard) => (
          <div key={factorCard.id} className={cn.factorCardBlock}>
            <div>
              <img src={factorCard.img} alt="" />
            </div>
            <div>
              <p style={{ marginTop: "13px", marginLeft: "15px" }}>
                {factorCard.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NegativeFactors;
