import Head from "next/head";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import JointsPage from "../components/pages/JointsPage";


const Joints = () => {
    return (
      <>
        <Head>
          <title>Лечение суставов</title>
        </Head>
        <Header />
        <JointsPage/>
        <Footer/>
      </>
    );
}

export default Joints;
