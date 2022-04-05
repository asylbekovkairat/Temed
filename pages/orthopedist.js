import Head from 'next/head';
import React from 'react';
import Header from '../components/common/header/Header';
import Footer from "../components/common/footer/Footer";
import Orthopedistpage from '../components/pages/orthopedistPage';


const Orthopedist = () => {
    return (
        <>
        <Head>
            <title>Записаться к ортопеду-невропатологу</title>      
        </Head>   
        <Header/>
        <Orthopedistpage/>
        <Footer/>
        </>
    );
}

export default Orthopedist;
