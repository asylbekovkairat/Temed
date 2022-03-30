import TreatmentCard from "../card/TreatmentCard";
import { useState} from "react"

export default function TreatmentCourse({id,setId,...props}) {
  const treatmentCards = [
    {
      id: 0,
      img: "https://thumb.tildacdn.com/tild6162-3930-4766-a364-383839346139/-/cover/360x350/center/center/-/format/webp/IMG_3759.jpg",
      headerText: "Лазеротерапия",
      mainText:
        "облегчение боли, воспаления, отека, ускорение процесса заживания",
        title: "Лазеротерапия",
        description:
          "Роботизированная многоволновая система - MLS 6 - терапевтический лазер последнего поколени",
        content:
          "Комбинация двух разных длин волн и двух разных типов излучения позволяет сочетать и усиливать  желаемые лечебные эффекты во время одного сеанса лечения.Врач чётко регулирует параметры воздействия.Создаются индивидуальные программы лечения, в которых будет преобладать обезболивающий, противовоспалительный или противоотёчный эффект, в зависимости от патологии и её стадии.Роботизация лазера позволяет сделать процедуру точной, воспроизводимой, безопасной.Система получила международный патент и самый строгий в мире сертификат качества от FDA(FDA - управление по санитарному надзору за качеством пищевых продуктов, медикаментов и медицинских изделий США).Существуют противопоказания, проконсультируйтесь со специалистом.",    
    },
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild3765-3233-4263-b432-316561626637/-/cover/360x350/center/center/-/format/webp/noroot.png",
      headerText: "Магнитотерапия",
      mainText:
        "облегчение боли, мышечного напряжения, укрепление мышц, повышение подвижности суставов",
    },
    {
      id: 2,
      img: "https://thumb.tildacdn.com/tild3163-6665-4833-b939-333162363461/-/cover/360x350/center/center/-/format/webp/IMG_3677.jpg",
      headerText: "Иглорефлексотерапия",
      mainText:
        "облегчение боли, снятие мышечного напряжения, стимуляция трофики тканей ",
    },
    {
      id: 3,
      img: "https://thumb.tildacdn.com/tild3462-6263-4431-b238-326430373234/-/cover/360x350/center/center/-/format/webp/kak-2_5.jpg",
      headerText: "Фармакопунктура",
      mainText: "стимуляция физиологического воспаления, укрепление связок ",
    },
    {
      id: 4,
      img: "https://thumb.tildacdn.com/tild6338-6238-4530-a333-373665373831/-/cover/360x350/center/center/-/format/webp/WhatsApp-Image-2020-.jpeg",
      headerText: "PRP (обогащенная плазма)",
      mainText:
        "стимуляция физиологического воспаления, обезболивания и регенерации ",
    },
    {
      id: 5,
      img: "https://thumb.tildacdn.com/tild3337-6165-4534-b438-636665303039/-/cover/360x350/center/center/-/format/webp/94567666666.jpg",
      headerText: "Медикаменты",
      mainText:
        "облегчение острой и хронической боли, регуляция факторов влияющих на ощущение боли (сон, эмоциональное состояние и т.д.) ",
    },
  ];

  return (
    <>
      {treatmentCards.map((card) => (
        <TreatmentCard setId={setId} id={id} index={card.id} card={card} key={card.id}>
          {card.card}
        </TreatmentCard>
      ))}
    </>
  );
}
