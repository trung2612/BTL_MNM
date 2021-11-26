import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import productItemDummyData from "../../dummy-data/carouselProductItem.json";

import Container from "../../components/atoms/Container/Container";
import Row from "../../components/atoms/Row/Row";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Col from "../../components/atoms/Col/Col";

import commonStyle from "../../styles/commonStyle.module.css";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  return (
    <div className={styles.productDetail}>
      <Container>
        <Row className={styles.pd60}>
          <SectionTitle title="Product Detail" />
          <Col className={commonStyle.col6}>
            <Carousel>
              {productItemDummyData.productItem.map((data) => (
                <Carousel.Item key={data.id} className={styles.item}>
                  <img
                    key={data.id}
                    className="d-block w-100"
                    src={data.src}
                    alt={data.alt}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col className={commonStyle.col6}>
            <div className={styles.downContent}>
              <Link to="/">
                <h4>Phillipe</h4>
              </Link>
              <h6>42.9$</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur, nunc quis consectetur ullamcorper, augue
                est mollis nisi, id. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque efficitur, nunc quis consectetur
                ullamcorper, augue est mollis nisi, id. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Pellentesque efficitur, nunc
                quis consectetur ullamcorper, augue est mollis nisi, id. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                efficitur, nunc quis consectetur ullamcorper, augue est mollis
                nisi, id.
              </p>

              <ul className={styles.start}>
                {[...Array(1)].map((item, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faStar} color="#f33f3f" />
                  </li>
                ))}
              </ul>
              <Link to="/" className={styles.review}>
                Review(15)
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
