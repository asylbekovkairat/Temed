import React from "react";
import cn from "./../../../styles/method.module.css";
import MoreExamplesSlider from "./moreExamplesSlider";

function MoreExampleBlock() {
  return (
    <div className={cn.more_example_block}>
      <div className="container">
        <div className={cn.first_treatment_ways}>
          <p style={{ color: "white", marginTop: "30px" }}>
            Больше примеров Резорбций
          </p>
          <div className={cn.second_treatment_ways}>
            <p style={{ color: "white" }}>Галерея клинических случаев</p>
          </div>
        </div>
        <div className={cn.exampleText}>
          <p>
            Как резорбция грыжи межпозвонкового диска выглядит на практике,
            можно посмотреть на снимках ниже. Разница между снимками справа и
            слева всего три месяца. Слева видна грыжа 1,6 на 1,9 см (помечена
            зелеными линиями). Справа — остаточный рубец диаметром 5 мм. За три
            месяца грыжа уменьшилась в три раза. На языке врачей это называется
            «практически полная резорбция».
          </p>
        </div>
        <MoreExamplesSlider />
        <div className={cn.exampleTextFooter}>
          <p>Пример резорбции грыжи в пояснично-крестцовом отделе</p>
        </div>
        <div className={cn.more_example_btn}>
          <button className={cn.more_example_block_btn}>
            Больше примеров тут
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoreExampleBlock;
