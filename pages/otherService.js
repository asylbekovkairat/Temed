import React from 'react'
import Head from 'next/head';
import Header from "../components/common/header/Header";
import Footer from '../components/common/footer/Footer';
import Callme from '../components/common/Block_CallMe/callMe';
import Mrt from '../components/common/mrt/mrt';
import OtherServicePage from './../components/pages/otherServicePage';


export default function otherService() {
  return (
    <>
      <Head>
        <title>Другие услуги </title>
      </Head>
      <Header/>
      <OtherServicePage/>
      <Mrt/>
      <Callme/>
      <Footer/>
    </>
  )
}
