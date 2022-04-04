import Head from 'next/head';
import React from 'react';
import Header from '../components/common/header/Header'
import Footer from '../components/common/footer/Footer'
import Commentpage from '../components/pages/CommentPage';

const Comment = () => {
    return (
        <div>
            <Head>
                <title>FAQ</title>
            </Head>
            <Header/>
            <Commentpage/>
            <Footer/>
        </div>
    );
}

export default Comment;