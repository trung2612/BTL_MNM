import React from "react";
import Col from "../../../components/atoms/Col/Col";
import ProductItem from "../../molecules/ProductItem/ProductItem";
import commonStyle from "../../../styles/commonStyle.module.css";

 function Vay(){
  return(
     <>
        <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://cf.shopee.vn/file/c38bdbc92d533b870b654ad004229cd8"
                    title="Áo Len Nữ Cổ Lọ Tay Dài Basic"
                    price="359.000đ"
                    content="YODY - Look good. Feel good."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://my-test-11.slatic.net/p/cb041b1f19503aa8cf004a4ea680e302.jpg_600x600q80.jpg"
                    title="Áo Len Nữ Cổ Lọ Vặn Thừng"
                    price="459.000đ"
                    content="YODY - Look good. Feel good."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://cf.shopee.vn/file/fd0f409f9950d9433b1c94195cb85b2c"
                    title="Áo Len Nữ Cổ Tròn Thổ Cẩm"
                    price="499.000đ"
                    content="YODY - Look good. Feel good."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://my-test-11.slatic.net/p/cb041b1f19503aa8cf004a4ea680e302.jpg_600x600q80.jpg"
                    title="Áo Len Nữ Mỏng Tay Lỡ Có Cổ"
                    price="389.000đ"
                    content="YODY - Look good. Feel good."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://cf.shopee.vn/file/5cadc9ad8c42f7b29ba5225169f52c7d"
                    title="Áo Len Nữ Mỏng Cổ Cao 5cm"
                    price="359.000đ"
                    content="YODY - Look good. Feel good."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrC6akKZmFgYEEoi7bOBNl1NTRgW-svKIjEoWIY6E2cRiBQytlePqo7Yel5teTDIoSST0&usqp=CAU"
                    title="Áo Len Nữ Thời Trang Cổ Tim"
                    price="499.000đ"
                    content="YODY - Look good. Feel good."
                  />
                </Col>           
     </>
  )
 }

 export default Vay;