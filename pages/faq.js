import Head from 'next/head';
import React from 'react';
import Header from '../components/common/header/Header'
import Footer from '../components/common/footer/Footer'
import  Faqpage from '../components/pages/FAQPage'

const Faq = () => {
    return (
        <div>
            <Head>
                <title>FAQ</title>
            </Head>
            <Header/>
            <Faqpage/>
            <Footer/>
        </div>
    );
}

export default Faq;
