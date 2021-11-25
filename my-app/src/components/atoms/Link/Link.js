import styles from "./Link.module.css";

const Link = (props) => {
    const classes = styles.link + " " + props.className;
    
    return <span className={classes}>{props.children}</span>
};

export default Link;