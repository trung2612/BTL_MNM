import styles from "./Img.module.css";

const Img = (props) => {
  const classes = styles.imgWrapper + " " + props.className;

  return (
    <div className={classes}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Img;
