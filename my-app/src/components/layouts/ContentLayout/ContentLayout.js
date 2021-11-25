import styles from "./ContentLayout.module.css";

const ContentLayout = (props) => {
    return <div className={styles.layout}>{props.children}</div>
};

export default ContentLayout;