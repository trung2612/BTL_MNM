import styles from "./Row.module.css";

const Row = (props) => {
    const classes = styles.row + " " + props.className;
    return <div className={classes}>{props.children}</div>
};

export default Row;