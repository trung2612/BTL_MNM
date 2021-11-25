import React from "react";
import anh1 from '../../assets/images/product_01.jpg'
import anh2 from '../../assets/images/product_02.jpg'
import anh3 from '../../assets/images/product_03.jpg'
import anh4 from '../../assets/images/product_04.jpg'
import anh5 from '../../assets/images/product_05.jpg'
import anh6 from '../../assets/images/product_06.jpg'
import { Container } from "react-bootstrap";
import Row from "../../components/atoms/Row/Row";
import Col from "../../components/atoms/Col/Col";
import ProductItem from "../../components/molecules/ProductItem/ProductItem";
import commonStyle from "../../styles/commonStyle.module.css";
import StyleProducts from "./Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";


const Products = () => {
  return (
    <>
    <Container>
      <Row>
            <Col>
            <div className={StyleProducts.filters}>
              <ul className={StyleProducts.ul}>
                  <li className={StyleProducts.active} >All Products</li>
                  <li >Featured</li>
                  <li >Flash Deals</li>
                  <li >Last Minute</li>
              </ul>
            </div>  
            </Col>       
      </Row>
      <Row>
          <Col className={commonStyle.col4}>
              <ProductItem
                src={anh1}
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src={anh2}
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src={anh3}
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src={anh4}
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src={anh5}
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
            <Col className={commonStyle.col4}>
              <ProductItem
                src={anh6}
                title="Tittle goes here"
                price="$30.25"
                content="Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur."
              />
            </Col>
    </Row>
    <Row>
      <Col>
          <div className={StyleProducts.navigate}>
            <ul className={StyleProducts.pages}>
              <li><div>1</div></li>
              <li className={StyleProducts.active}><div>2</div></li>
              <li><div>3</div></li>
              <li><div>4</div></li>
              <li><div><FontAwesomeIcon icon={faChevronCircleRight} color="#f33f3f" /></div></li>
            </ul>
          </div>
      </Col>
    </Row>
    </Container>
     </>
  );
};

export default Products;
