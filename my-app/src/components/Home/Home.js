import React from "react";
import styles from "./Home.module.css";
import ProductItem from "../molecules/ProductItem/ProductItem";
import Row from "../atoms/Row/Row";
import Container from "../atoms/Container/Container";
import SectionTitle from "../molecules/SectionTitle/SectionTitle";
import HalfCard from "../layouts/HalfCard/HalfCard";
import Col from "../atoms/Col/Col";
import Img from "../atoms/Img/Img";
import Link from "../atoms/Link/Link";
import Button from "../atoms/Button/Button";
import commonStyle from "../../styles/commonStyle.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.latestProducts}>
        <Container>
          <Row>
            <SectionTitle title="Latest Products" span="view all products>" />
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div classNameName={styles.bestFeatures}>
        <Container>
          <Row className={styles.pd60}>
            <SectionTitle title="About Sixteen Clothing" />
            <Col className={commonStyle.col6}>
              <div className={styles.leftContent}>
                <h4>Looking for the best products?</h4>
                <p className={commonStyle.p}>
                  <Link>This template</Link> is free to use for your business
                  websites. However, you have no permission to redistribute the
                  downloadable ZIP file on any template collection website.{" "}
                  <Link>Contact us</Link> for more info.
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
              <Img
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
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
                  <Col className={commonStyle.textRight + " " + commonStyle.col4}>
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
