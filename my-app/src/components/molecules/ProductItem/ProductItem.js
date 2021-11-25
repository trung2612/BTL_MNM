import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import style from "./ProductItem.module.css";


const ProductItem = (props) => {
  return (
    <div className={style.productItem}>
      <Link to="/">
      <img src={props.src} alt="" />
      </Link>
      <div className={style.downContent}>
        <Link to="/"><h4>{props.title}</h4></Link>
        <h6>{props.price}</h6>
        <p>{props.content}</p>

        <ul className={style.start}>
          <li>
            <FontAwesomeIcon icon={faStar} color="#f33f3f"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} color="#f33f3f"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} color="#f33f3f"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} color="#f33f3f"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} color="#f33f3f"/>
          </li>
        </ul>
        <Link to="/" className={style.review}>Review(24)</Link>
      </div>
    </div>
  );
};

export default ProductItem;