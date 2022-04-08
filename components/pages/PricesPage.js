import React from 'react'
import Callme from '../common/Block_CallMe/callMe'
import Mrt from '../common/mrt/mrt'
import { PriceCardList } from '../constants/priceCardList';
import PriceCard from './../common/pricesCard/priceCard';

export default function PricesPage() {
  return (
    <>
      <div className="container allPricePage">
        <div className="staticPath">
          <div>Главная / стоимость услуг</div>
        </div>
        <div className="priceListCity">
          <div>Прайс-лист г. Бишкек</div>
        </div>
        <div className="PricesCard_wrapper">
          {PriceCardList.map((item) => (
            <PriceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Mrt />
      <Callme />
    </>
  );
}
