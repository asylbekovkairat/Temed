import React from "react";
import cn from "./../../../styles/method.module.css";

function RezorbtionTimeImage() {
  const rezorbtonTimeImage = [
    {
      id: 1,
      image:
        "https://thumb.tildacdn.com/tild3765-3835-4165-a362-376536623130/-/resize/300x200/-/format/webp/L4-L5_112.jpg",
      text: "L4-L5/112дней",
    },
    {
      id: 2,
      image:
        "https://thumb.tildacdn.com/tild3063-3237-4934-a164-663961353434/-/resize/300x200/-/format/webp/L4-L5__-_78_.jpeg",
      text: "L4-L5/78 дней",
    },
    {
      id: 3,
      image:
        "https://thumb.tildacdn.com/tild6539-3736-4461-b439-656263356435/-/resize/300x200/-/format/webp/L4-L5____-___1__.JPG",
      text: "L4-L5 (почти полный стеноз) - результат после 1 курса лечения",
    },
    {
      id: 4,
      image:
        "https://thumb.tildacdn.com/tild3839-6666-4462-b730-356364333465/-/resize/300x200/-/format/webp/___35__1__.JPG",
      text: "Секвестр ушёл за 35 дней (1 курс лечения)",
    },
    {
      id: 5,
      image:
        "https://thumb.tildacdn.com/tild3834-6461-4235-b839-656465393036/-/resize/300x200/-/format/webp/L4-L5_1_.jpg",
      text: "L4-L5 1 курс",
    },
    {
      id: 6,
      image:
        "https://thumb.tildacdn.com/tild3263-3033-4363-a432-643262633466/-/resize/300x200/-/format/webp/1__11__2019__8__2019.jpg",
      text: "1 месяц (11 мая 2019 – 8 июня 2019/12 дней)",
    },
    {
      id: 7,
      image:
        "https://thumb.tildacdn.com/tild6665-6365-4534-a339-643161343836/-/resize/300x200/-/format/webp/L5-S1_15___16___18_.jpg",
      text: "L5-S1, 1,5 курса",
    },
    {
      id: 8,
      image:
        "https://thumb.tildacdn.com/tild3834-3365-4837-b932-366337353262/-/resize/300x200/-/format/webp/_6_.jpg",
      text: "6 месяцев (Ноябрь 2017 - Май 2018)",
    },
  ];
  return (
    <div className="container">
      <div className={cn.rezorbtion_time_image}>
        {rezorbtonTimeImage.map((timeImage) => (
          <div key={timeImage.id}>
            <div className={cn.time_img}>
              <img src={timeImage.image} alt="" />
            </div>
            <div className={cn.timeText}>{timeImage.text}</div>
          </div>
        ))}
      </div>
      <div className={cn.time_image_footer_text}>
        Таким образом, в среднем модулируемая резорбция занимает 4–6 месяцев. Но
        есть случаи рассасывания грыжи за 1–2 месяцев. Лечение сложных грыж
        может растянуться от 6 месяцев до года.
      </div>
    </div>
  );
}

export default RezorbtionTimeImage;
