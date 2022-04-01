import Head from 'next/head';
import React from 'react';
import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import Resultspage from '../components/pages/ResultsPage';

const Result = () => {
    return (
        <div>
            <Head>
                <title>Библиотека резорбций</title>
            </Head>
            <Header/>
            <Resultspage/>
            <Footer/>
        </div>
    );
}

export default Result;
