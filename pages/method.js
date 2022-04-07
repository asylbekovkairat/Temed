import Head from "next/head";
import React from "react";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import MethodPage from "../components/pages/MethodPage";

const Method = () => {
  return (
    <div>
      <Head>
        <title>Резорбция грыжи межпозвонкового диска: что такое, отзывы, метод резорбции позвоночной грыжи</title>
        <meta name="description" content="Беспокоит боль в спине и суставах❓ Резорбция грыжи - уменьшение грыжи без операции ✅ Центр лечения позвоночника и суставов - клиника Ткачева Епифанова. ☎ 8 (499) 322-30-10"/>
          </Head>
          <Header/>
          <MethodPage />
          <Footer/>
    </div>
  );
};

export default Method;