import React from "react";
import styles from "./Home.module.css";
import ProductItem from "../molecules/ProductItem/ProductItem";
import Row from "../atoms/Row/Row";
import Container from "../atoms/Container/Container";
import SectionTitle from "../molecules/SectionTitle/SectionTitle";
import HalfCard from "../layouts/HalfCard/HalfCard";
import Img from "../atoms/Img/Img";

const Home = () => {
  return (
    <>
      <div className={styles.latestProducts}>
        <Container>
          <Row>
            <SectionTitle title="Latest Products" span="view all products>" />
            <div className={styles.item}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </div>
            <div className={styles.item}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </div>
            <div className={styles.item}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </div>
            <div className={styles.item}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </div>
            <div className={styles.item}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </div>
            <div className={styles.item}>
              <ProductItem
                src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg"
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </div>
          </Row>
        </Container>
      </div>

      <div classNameName={styles.bestFeatures}>
        <Container>
          <Row>
          <SectionTitle title="About Sixteen Clothing" />
            <HalfCard>
              <div className="leftContent">
                <h4>Looking for the best products?</h4>
                <p>
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-546-sixteen-clothing"
                    target="_parent"
                  >
                    This template
                  </a>{" "}
                  is free to use for your business websites. However, you have
                  no permission to redistribute the downloadable ZIP file on any
                  template collection website.{" "}
                  <a rel="nofollow" href="https://templatemo.com/contact">
                    Contact us
                  </a>{" "}
                  for more info.
                </p>
                <ul className="featured-list">
                  <li>
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="#">Consectetur an adipisicing elit</a>
                  </li>
                  <li>
                    <a href="#">It aquecorporis nulla aspernatur</a>
                  </li>
                  <li>
                    <a href="#">Corporis, omnis doloremque</a>
                  </li>
                  <li>
                    <a href="#">Non cum id reprehenderit</a>
                  </li>
                </ul>
                <a href="about.html" className="filled-button">
                  Read More
                </a>
              </div>
            </HalfCard>
            <HalfCard>
              <Img src="https://www.aboutboot.com/wp-content/uploads/2018/05/How-to-Remove-Tar-from-Shoes.jpg" alt="abc"/>
            </HalfCard>
          </Row>
        </Container>
      </div>

      <div className="call-to-action">
        <Container>
          <Row>
            <div className="col-md-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8">
                    <h4>
                      Creative &amp; Unique <em>Sixteen</em> Products
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque corporis amet elite author nulla.
                    </p>
                  </div>
                  <div className={styles.item}>
                    <a href="#" className="filled-button">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
