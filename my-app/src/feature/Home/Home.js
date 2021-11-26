import React from "react";
import { Link } from "react-router-dom";
import cx from "clsx";
import styles from "./Home.module.css";
import ProductItem from "../../components/molecules/ProductItem/ProductItem";
import Row from "../../components/atoms/Row/Row";
import Container from "../../components/atoms/Container/Container";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Col from "../../components/atoms/Col/Col";
import Img from "../../components/atoms/Img/Img";
import Button from "../../components/atoms/Button/Button";
import commonStyle from "../../styles/commonStyle.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.latestProducts}>
        <Container>
          <Row>
            <SectionTitle title="Latest Products" right="view all products >" />
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://img5.thuthuatphanmem.vn/uploads/2021/08/25/hinh-nen-may-tinh-4k-sa-mac_084707368.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://img.thuthuatphanmem.vn/uploads/2018/09/27/wallpaper-4k_105912678.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://img5.thuthuatphanmem.vn/uploads/2021/08/25/hinh-nen-may-tinh-windows-4k_084711105.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://www.anphatpc.com.vn/media/news/0812_wp4676574-4k-pc-wallpapers.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://bloghay.vn/wp-content/uploads/2021/10/Wallpaper-4k-Hi%CC%80nh-ne%CC%82%CC%80n-4k-hi%CC%80nh-a%CC%89nh-ve%CC%82%CC%80-vu%CC%83-tru%CC%A3-cu%CC%9B%CC%A3c-de%CC%A3p-scaled.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuA8ZKd_4Up28DdrKzjJdScVOuogUfAfb49A&usqp=CAU"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
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
                  <Link to="/">This template</Link> is free to use for your business
                  websites. However, you have no permission to redistribute the
                  downloadable ZIP file on any template collection website.{" "}
                  <Link to="/Contact">Contact us</Link> for more info.
                </p>
                <ul className={commonStyle.ul}>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur an adipisicing elit</li>
                  <li>It aquecorporis nulla aspernatur</li>
                  <li>Corporis, omnis doloremque</li>
                  <li>Non cum id reprehenderit</li>
                </ul>
                <Button className={styles.filledButton}>Read More</Button>
              </div>
            </Col>
            <Col className={commonStyle.col6}>
              <Img className={styles.bestFeaturesImg}
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
