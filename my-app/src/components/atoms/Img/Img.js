import styles from "./Img.module.css";

const Img = (props) => {
  return (
    <div className={styles.imgWrapper}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Img;
