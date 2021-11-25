import styles from "./Link.module.css";

const Link = (props) => {
    return <span className={styles.link}>{props.children}</span>
};

export default Link;