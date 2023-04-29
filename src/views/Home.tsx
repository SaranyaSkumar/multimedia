import React from "react";
import Head from "next/head";
import Navbar from "./NavBar";
import { Box } from "@mui/material";
import styles from "../styles/VideoContainer.module.css";

export default function Home() {
  return (
    <>
       <div className="videoContainer">
        <video className="fullScreenVideo" autoPlay loop muted playsInline>
          <source src="/off.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.textOverlay}>
          <h1 className={styles.heading}>Dive into a World of Visuals</h1>
          <p className={styles.subheading}>
            Immerse Yourself in Captivating Videos and Stunning Content
          </p>
        </div>
      </div>
      <Navbar />
    </>
  );
}
