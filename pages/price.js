import Footer from '../components/common/footer/Footer';
import Header from "../components/common/header/Header";
import Head from "next/head";
import PricesPage from '../components/pages/PricesPage';



export default function Price() {
  return (
    <>
        <Head>
            <title>Цены</title>
        </Head>
        <Header/>
        <PricesPage/>
        <Footer/>
    </>
  )
}
