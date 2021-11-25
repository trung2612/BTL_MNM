import { Carousel } from "react-bootstrap";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="https://img5.thuthuatphanmem.vn/uploads/2021/08/25/hinh-nen-may-tinh-4k-anime_084703472.jpg"
          alt="First slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3>Last Minute</h3>
          <p>Grab last minute deals</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="https://img5.thuthuatphanmem.vn/uploads/2021/08/25/hinh-nen-3d-cho-may-tinh-4k_084701936.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3>Best Offer</h3>
          <p>New Arrivals On Sale</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/250472.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3>Last Minute</h3>
          <p>Grab last minute deals</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
