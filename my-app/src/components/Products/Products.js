import React from "react";

import { Container } from "react-bootstrap";
import {NavLink, Outlet } from 'react-router-dom';
import Row from "../../components/atoms/Row/Row";
import Col from "../../components/atoms/Col/Col";

import StyleProducts from "./Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";






const Products = () => {
  return (
    <>
      <Container>
        <Row>
              <Col>
              <div className={StyleProducts.filters}>
                <ul className={StyleProducts.ul}>
                    <li ><NavLink className="" to="/products"  activeClassName={StyleProducts.active} exact >Áo Quần</NavLink></li>
                    <li ><NavLink className="" to="/products/vay" activeClassName={StyleProducts.active} >Áo Len nè</NavLink></li>
                    <li ><NavLink className="" to="/products/phukien" activeClassName={StyleProducts.active} >Phụ Kiện</NavLink></li>
                    <li ><NavLink className="" to="/products/khac" activeClassName={StyleProducts.active} >Khác</NavLink></li>
                </ul>
              </div>  
              </Col>       
        </Row>
        <Row>
            <Outlet/>
        </Row>
        <Row>
          <Col>
              <div className={StyleProducts.navigate}>
                <ul className={StyleProducts.pages}>
                  <li><div>1</div></li>
                  <li className={StyleProducts.active}><div>2</div></li>
                  <li><div>3</div></li>
                  <li><div>4</div></li>
                  <li><div><FontAwesomeIcon icon={faAngleRight} color="#121212" /></div></li>
                </ul>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default Products;

