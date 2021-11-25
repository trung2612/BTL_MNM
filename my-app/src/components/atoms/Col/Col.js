import styles from "./Col.module.css";

const Col = (props) => {
  const classes = styles.col + " " + props.className;
  
  return <div className={classes}>{props.children}</div>;
};

export default Col;
