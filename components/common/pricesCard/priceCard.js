import React from 'react'

export default function PriceCard({priceHead, priceReason, price}) {
  return (
    <>
        <div className="priceCard">
            <div className="priceHead">
                <span>{priceHead}</span>
                <div>Цена Руб.</div>
            </div>
            <div className="line"></div>
            <div className="priceReason_wrapper">
                {
                    priceReason.map((item) => <div className="priceReason">{item}</div>)
                }
            </div>
        </div>
    </>
  )
}
