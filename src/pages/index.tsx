import React from "react";
import Head from "next/head";
import Home from "@/views/Home";
import YoutubeContents from "@/views/YoutubeContents";
import Services from "@/views/Services";
import Footer from "@/views/Footer";

export default function App() {
  return (
    <>
      <Head>
        <title>Multimedia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <Services />
      <YoutubeContents />
      <Footer />
    </>
  );
}
