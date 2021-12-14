import { Link } from "react-router-dom";
import cx from "clsx";
import Container from "../../atoms/Container/Container";
import Row from "../../atoms/Row/Row";
import Col from "../../atoms/Col/Col";
import commonStyle from "../../../styles/commonStyle.module.css";
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className={commonStyle.col12}>
            <div className={cx(styles.innerContent, commonStyle.textCenter)}>
              <p className={cx(commonStyle.uppercase, commonStyle.p)}>
                Bản quyền thuộc về HT Store © 2020  - Design: Duy, Hà, Trung, Tuân,{" "}
                <Link to="/" className={commonStyle.cTemplateRed}> HT Store</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
