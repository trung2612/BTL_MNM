import React from "react";
import styles from "./ContentLayout.module.css";
import Footer from "../Footer/Footer";

const ContentLayout = (props) => {
    return <>
                <div className={styles.layout}>{props.children}</div>
                <Footer />
            </>
};

export default ContentLayout;