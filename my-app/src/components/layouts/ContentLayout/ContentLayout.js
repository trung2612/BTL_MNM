import React from "react";
import styles from "./ContentLayout.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "../../molecules/Banner/Banner";

const ContentLayout = (props) => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className={styles.layout}>{props.children}</div>
      <Footer />
    </>
  );
};

export default ContentLayout;
