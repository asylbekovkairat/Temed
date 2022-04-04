import Head from 'next/head'
import Header from "../components/common/header/Header"
import ArticlesPage from '../components/pages/ArticlesPage'
import Footer from "../components/common/footer/Footer"

 export default function articles() {
  return (
    <div>
        <Head>
            <title>Статьи</title>
        </Head>
        <Header/>
        <ArticlesPage/>
        <Footer/>
    </div>
  )
}
