import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import style from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={style.productItem}>
      <Link to="/product-detail">
        <img className={style.banner} src={props.src} alt={props.alt} />
      </Link>
      <div className={style.downContent}>
        <Link to="/product-detail">
          <h4>{props.title}</h4>
        </Link>
        <h6>{props.price}k</h6>
        <p>{props.content}</p>

        <ul className={style.start}>
          {[...Array(props.star)].map((item,index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faStar} color="#f33f3f" />
            </li>
          ))}
        </ul>
        <Link to="/product-detail" className={style.review}>
          Review({props.review})
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
