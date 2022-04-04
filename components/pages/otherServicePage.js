import React from 'react' 
import OtherServiceCard from '../common/otherServiceCard/otherServiceCard';
import { otherServiceCardList } from '../constants/otherServiceCardList';

export default function OtherServicePage() {
  return (
    <>
      <div className="recoveryTitle">
        <div className="container">Другие услуги</div>
      </div>
      <div className="container allRecoveryPage">
        <div className="staticPath">
          <div>Главная / Другие услуги</div>
        </div>
      </div>
      <div className="container treatment_methods">
          <div className="treatments_wrapper recoveryCard">
            {
              otherServiceCardList.map((item, index) => <OtherServiceCard  key={index} {...item}/>)
            }
          </div>
        </div>
    </>
  )
}
