import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { useState } from 'react';
import css from "../../../styles/Consultcardorthoped.module.css"

const Consultcardorthoped = (props) => {
    return (
      <>
        <div className={css.consultation_card}>
          <div className={css.title}>{props.title}</div>
          <div className={css.des}>{props.des}</div>
          <div className={css.input}>
            <div className="consultation-card">
              <PhoneInput
                country={"ru"}
                value="phone"
                onChange={(phone) => setPhone({ phone })}
              />
            </div>
            <button className="btn btn-red">Перезвоните мне</button>
          </div>
        </div>
      </>
    );
}

export default Consultcardorthoped;
