import Head from 'next/head'
import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import Kurs_fizicheskoy_terapii from '../components/pages/Kurs_fizicheskoy_terapii'

export default function kurs_fizicheskoy_terapii() {
  return (
    <div>
        <Head>
              <title>Записаться на прием к физическому терапевту в Москве в клинике Ткачева и Епифанова | Купить курсы физической терапии по выгодной цене</title>
        </Head>
        <Header/>
        <Kurs_fizicheskoy_terapii/>
        <Footer/>
    </div>
  )
}
