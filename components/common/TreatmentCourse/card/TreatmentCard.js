import { useState } from "react";
import TreatmentForm from "./../form/TreatmentForm";
import TreatmentModal from "./../modal/TreatmentModal";

export default function TreatmentCard({id,setId,index,...props}) {
  const [modalActive, setModalActive] = useState(false);
  
  const active = () => {
    
    setModalActive(true)
    setId(index)
    document.body.style.overflowY = "hidden"
    
}
  return (
    <div>
      <div className="tr-block">
        <div className="scaleImg">
          {" "}
          <img src={props.card.img} className="scaleImg" />
        </div>
        <div className="treatmentCards position-rage">
          <strong className="card-title">{props.card.headerText}</strong>
          <div className="card-body">{props.card.mainText}</div>
        </div>
        <div className="button-container">
          <button onClick={active}>Подробнее</button>
        </div>

        <TreatmentModal  active={modalActive} setActive={setModalActive}>
          <TreatmentForm id={id}/>
        </TreatmentModal>
      </div>
    </div>
  );
}
