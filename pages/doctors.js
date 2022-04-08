import Head from "next/head";
import React from "react";
import { Doctors } from "../components/pages/Doctors";

const doctors = () => {
  return (
    <div>
      <Head>
        <title>Специалисты</title>
        <meta name="description" content=""/>
      </Head>
      <Doctors />
    </div>
  );
};

export default doctors;