import React from "react";
import cn from "./../../../styles/doctors.module.css";
import { articles } from "./UsersData";

function Articles() {
  
  return (
    <div  className={cn.articleBlock}>
      {articles.map((article) => (
        <div key={article.id} className={cn.articleCard}>
          <div className={cn.articleImg}>
            <img src={article.img}></img>
          </div>
          <div className={cn.date}>{article.date}</div>
          <div className={cn.articleTextHeader}>
            {article.header}
          </div>
          <div className={cn.articleText}>{article.main}</div>
        </div>
      ))}
    </div>
  );
}

export default Articles;
