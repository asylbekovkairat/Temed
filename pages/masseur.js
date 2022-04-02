import Head from 'next/head'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import MasseurPage from '../components/pages/MasseurPage'

export default function masseur() {
    return (
        <div>
            <Head>
                <title>Записаться к врачу-массажисту в Москве | Прием массажиста в клинике Ткачева Епифанова</title>
            </Head>
            <Header />
            <MasseurPage />
            <Footer />
        </div>
    )
}
