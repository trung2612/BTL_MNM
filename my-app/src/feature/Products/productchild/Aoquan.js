import React from "react";
import productClothesItemDummyData from "../../../dummy-data/productsClothes.json";

import Col from "../../../components/atoms/Col/Col";
import ProductItem from "../../../components/molecules/ProductItem/ProductItem";
import commonStyle from "../../../styles/commonStyle.module.css";


function AoQuan() {
    return (
      <>
      {productClothesItemDummyData.map((data) => (
                <Col key={data.id} className={commonStyle.col4}>
                  <ProductItem
                    src={data.imgUrl}
                    title={data.title}
                    price={data.price}
                    content={data.content}
                    star={data.star}                
                    review={data.review}
                  />
                </Col>
        ))}                                      
      </>
    )
  }
  export default AoQuan;