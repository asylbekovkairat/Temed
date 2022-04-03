import React from 'react'
import Callme from '../common/Block_CallMe/callMe'
import Mrt from '../common/mrt/mrt'
import { PriceCardList } from '../constants/priceCardList';
import PriceCard from './../common/pricesCard/priceCard';

export default function PricesPage() {
  return (
    <>
        <div className="container">
            <div className="PricesCard_wrapper">
                {
                    PriceCardList.map((item) => <PriceCard {...item}/>)
                }
            </div>
        </div>
        <Mrt/>
        <Callme/>         
    </>
  )
}
