import React from "react";
import cn from "./../../../styles/doctors.module.css";
import { useState } from "react";
import { handleToggle } from "./Utils";

function CheckBox({ list, handleFilters }) {
  const [checkedArray, setCheckedArray] = useState([]);

  const onChangeHandler = (checkboxId) => {
    const newState = handleToggle(checkboxId, checkedArray);
    setCheckedArray(newState);
    handleFilters(newState.map((id) => list[id].value));
  };

  return (
    <div className={cn.sideBarCity}>
      {list.map((item, index) => (
        <div key={index}>
          <div className={cn.sideBarCheckBox}>
            <input
              id={item.name}
              type="checkbox"
              onChange={() => onChangeHandler(item.id)}
              checked={checkedArray.indexOf(item.id) !== -1}
            />
            <label htmlFor={item.name}>{item.name}</label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckBox;
