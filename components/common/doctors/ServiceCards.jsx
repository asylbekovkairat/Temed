import React from 'react'
import cn from "./../../../styles/doctors.module.css";
import { serviceCards } from './UsersData';

function ServiceCards() {
   
  return (
    <div className={cn.serviceCards}>
    {serviceCards.map((card) => (
      <div key={card.text} className={cn.cards}>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "300",
            lineHeight: "1.35",
            color: "#4c4c4c",
          }}
        >
          {card.text}
        </div>
        <div
          style={{
            color: "#0e7496",
            fontSize: "36px",
            fontWeight: "400",
            marginTop: "8px",
          }}
        >
          {card.price}
        </div>
      </div>
    ))}
    
  </div>
  )
}

export default ServiceCards