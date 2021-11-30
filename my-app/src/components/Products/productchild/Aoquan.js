import React from "react";
import Col from "../../../components/atoms/Col/Col";
import ProductItem from "../../molecules/ProductItem/ProductItem";
import commonStyle from "../../../styles/commonStyle.module.css";

function AoQuan() {
    return (
      <>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://cf.shopee.vn/file/875ec8b4aefea5fe8091981b6adf1c3c"
                    title="Đồ Ngủ Ngon Hình Con Ếch"
                    price="135.200đ"
                    content="🌴🌴Đi ngủ, đi chơi, đi du lịch Siêu gọn - nhẹ - siêu mát mẻ - ko nhăn ko lo nóng, bí!"
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://vn-live-05.slatic.net/p/c5b829924d86925c4d5e403268a73f13.jpg_720x720q80.jpg_.webp"
                    title="Đồ Ngủ Ngon Màu Tím"
                    price="135.200đ"
                    content="🌴🌴Đi ngủ, đi chơi, đi du lịch Siêu gọn - nhẹ - siêu mát mẻ - ko nhăn ko lo nóng, bí!"
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://vn-live-05.slatic.net/p/2a0b5cc11fcacb1f4ff99453814cd76f.jpg_720x720q80.jpg_.webp"
                    title="Đồ Ngủ Ngon Màu Xanh Lá"
                    price="135.200đ"
                    content="🌴🌴Đi ngủ, đi chơi, đi du lịch Siêu gọn - nhẹ - siêu mát mẻ - ko nhăn ko lo nóng, bí!"
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://vn-live-05.slatic.net/p/b23043bd11cbe5a6e190732c2b8d6f99.jpg_720x720q80.jpg_.webp"
                    title="Đồ Ngủ Ngon Màu Vàng"
                    price="135.200đ"
                    content="🌴🌴Đi ngủ, đi chơi, đi du lịch Siêu gọn - nhẹ - siêu mát mẻ - ko nhăn ko lo nóng, bí!"
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://cf.shopee.vn/file/86013e60801b03a1fbd9b379b229eac1"
                    title="Đồ Ngủ Ngon Màu Vịt"
                    price="135.200đ"
                    content="🌴🌴Đi ngủ, đi chơi, đi du lịch Siêu gọn - nhẹ - siêu mát mẻ - ko nhăn ko lo nóng, bí!"
                  />
                </Col>
                <Col className={commonStyle.col4}>
                  <ProductItem
                    src="https://cf.shopee.vn/file/5ab1a425dd10976e85750f87aecb787d"
                    title="Đồ Ngủ Ngon Màu Hộp"
                    price="135.200đ"
                    content="🌴🌴Đi ngủ, đi chơi, đi du lịch Siêu gọn - nhẹ - siêu mát mẻ - ko nhăn ko lo nóng, bí!"
                  />
                </Col>            
      </>
    )
  }
  export default AoQuan;