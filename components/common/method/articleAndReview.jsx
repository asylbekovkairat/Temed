import React from "react";
import cn from "./../../../styles/method.module.css";

function ArticleAndReview() {
  return (
    <div className="container">
      <div className={cn.rezorbtion_article}>
        <p>Статьи о резорбции</p>
      </div>
      <div className={cn.patients_review}>
        <div className={cn.patients_review_text}>Отзывы пациентов</div>
        <div>
          <button className={cn.patients_review_btn}>
            Читать отзывы наших пациентов
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleAndReview;
