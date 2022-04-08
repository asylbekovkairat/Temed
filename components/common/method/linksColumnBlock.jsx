import React from "react";
import cn from "./../../../styles/method.module.css";
import Link from "next/link";

function LinksColumnBlock() {
  return (
    <div className={cn.links_column}>
      <p>Содержание статьи</p>
      <div className={cn.links}>
        {" "}
        <Link href="/">Пути лечения грыжи</Link>
        <Link href="/">Что такое резорбция межпозвонковой грыжи диска</Link>
        <Link href="/">Механизм резорбции грыжи позвоночника</Link>
        <Link href="/">Насколько эффективна резорбция</Link>
        <Link href="/">Сколько по времени занимает резорбция</Link>
        <Link href="/">Негативные факторы для резорбции</Link>
        <Link href="/">Успешные примеры</Link>
      </div>
    </div>
  );
}

export default LinksColumnBlock;
