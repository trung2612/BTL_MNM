import React from "react";
import { Link } from "react-router-dom";
import cx from "clsx";
import productDummyData from "../../dummy-data/products.json";
import ProductItem from "../../components/molecules/ProductItem/ProductItem";
import Row from "../../components/atoms/Row/Row";
import Container from "../../components/atoms/Container/Container";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Col from "../../components/atoms/Col/Col";
import Img from "../../components/atoms/Img/Img";
import Button from "../../components/atoms/Button/Button";
import dummyCarouselHome from "../../dummy-data/carouselHome.json";
import Banner from "../../components/molecules/Banner/Banner";
import commonStyle from "../../styles/commonStyle.module.css";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Banner datas={dummyCarouselHome.home} />
      <div className={styles.latestProducts}>
        <Container>
          <Row>
            <SectionTitle title="Latest Products" right="view all products >" />
            {productDummyData.map((data) => (
              <Col key={data.id} className={commonStyle.col4}>
                <ProductItem
                  key={data.id}
                  src={data.imgUrl}
                  alt={data.alt}
                  title={data.title}
                  price={data.price}
                  content={data.content}
                  star={data.star}
                  review={data.review}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className={styles.bestFeatures}>
        <Container>
          <Row className={styles.pd60}>
            <SectionTitle title="About Sixteen Clothing" />
            <Col className={commonStyle.col6}>
              <div className={styles.leftContent}>
                <h4>Looking for the best products?</h4>
                <p className={commonStyle.p}>
                  <Link to="/">This template</Link> is free to use for your
                  business websites. However, you have no permission to
                  redistribute the downloadable ZIP file on any template
                  collection website. <Link to="/Contact">Contact us</Link> for
                  more info.
                </p>
                <ul className={commonStyle.ul}>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur an adipisicing elit</li>
                  <li>It aquecorporis nulla aspernatur</li>
                  <li>Corporis, omnis doloremque</li>
                  <li>Non cum id reprehenderit</li>
                </ul>
                <Link to="/About">
                  <Button className={styles.filledButton}>Read More</Button>
                </Link>
              </div>
            </Col>
            <Col className={commonStyle.col6}>
              <Img
                className={styles.bestFeaturesImg}
                src="https://anhdepfree.com/wp-content/uploads/2018/08/bo-hinh-nen-may-tinh-4k-cuc-dep-20.jpg"
                alt="abc"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="call-to-action">
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <div className={styles.innerContent}>
                <Row>
                  <Col className={commonStyle.col8}>
                    <h4>
                      Creative &amp; Unique <em>Sixteen</em> Products
                    </h4>
                    <p className={commonStyle.p}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque corporis amet elite author nulla.
                    </p>
                  </Col>
                  <Col className={cx(commonStyle.textRight, commonStyle.col4)}>
                    <Button>Purchase Now</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
