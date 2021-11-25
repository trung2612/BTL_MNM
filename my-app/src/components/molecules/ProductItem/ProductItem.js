import React from "react";
import style from "./ProductItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductItem = (props) => {
  return (
    <div className={style.productItem}>
      <img src={props.src} alt="" />
      <div className={style.downContent}>
        <h4>{props.title}</h4>
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
        <span className={style.review}>Review(24)</span>
      </div>
    </div>
  );
};

export default ProductItem;
