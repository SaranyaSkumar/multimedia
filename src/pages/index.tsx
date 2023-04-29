import React from "react";
import Head from "next/head";
import Home from "@/views/Home";
import Services from "@/views/Services";

export default function App() {
  return (
    <>
      <Head>
        <title>My Next Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <Services />
    </>
  );
}
