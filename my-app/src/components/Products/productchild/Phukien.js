import React from "react";
import Col from "../../../components/atoms/Col/Col";
import ProductItem from "../../molecules/ProductItem/ProductItem";
import commonStyle from "../../../styles/commonStyle.module.css";

function PhuKien(){
  return(
    <>
        <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://thejulius.cdn.vccloud.vn/wp-content/uploads/2020/10/avt-1.jpg"
                    title="Đồng Hồ Nữ Julius Hàn Quốc"
                    price="790.000 ₫"
                    content="JULIUS thương hiệu đăng ký đầu tiên tại Seoul Hàn Quốc, công nghệ Nhật Bản với máy Nhật nhập khẩu 100%."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://thejulius.cdn.vccloud.vn/wp-content/uploads/2020/02/1220C.jpg"
                    title="Đồng Hồ Nữ JA-1220C Julius "
                    price="989.000 ₫"
                    content="JULIUS thương hiệu đăng ký đầu tiên tại Seoul Hàn Quốc, công nghệ Nhật Bản với máy Nhật nhập khẩu 100%."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://thejulius.cdn.vccloud.vn/wp-content/uploads/2019/11/JA-1129C.jpg"
                    title="Đồng Hồ Nữ JA-1129C Julius "
                    price="1.219.000 ₫"
                    content="JULIUS thương hiệu đăng ký đầu tiên tại Seoul Hàn Quốc, công nghệ Nhật Bản với máy Nhật nhập khẩu 100%."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://thejulius.cdn.vccloud.vn/wp-content/uploads/2021/11/02-4.jpg"
                    title="Đồng Hồ Nam VC-080M"
                    price="3.599.000 ₫"
                    content="JULIUS thương hiệu đăng ký đầu tiên tại Seoul Hàn Quốc, công nghệ Nhật Bản với máy Nhật nhập khẩu 100%."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://thejulius.cdn.vccloud.vn/wp-content/uploads/2019/11/JAH-107C-768x768.jpg"
                    title="Đồng Hồ Nam JAH-107C Julius"
                    price="1.499.000 ₫"
                    content="JULIUS thương hiệu đăng ký đầu tiên tại Seoul Hàn Quốc, công nghệ Nhật Bản với máy Nhật nhập khẩu 100%."
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://thejulius.cdn.vccloud.vn/wp-content/uploads/2021/07/hhh.jpg"
                    title="Đồng Hồ JA-1317A và Nhẫn "
                    price="849.000 ₫"
                    content="JULIUS thương hiệu đăng ký đầu tiên tại Seoul Hàn Quốc, công nghệ Nhật Bản với máy Nhật nhập khẩu 100%."
                  />
                </Col>   
    </>
  )
}

export default PhuKien;