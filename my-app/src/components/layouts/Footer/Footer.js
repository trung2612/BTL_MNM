import { Link } from "react-router-dom";
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
            <div className={styles.innerContent + " " + commonStyle.textCenter}>
              <p className={commonStyle.uppercase + " " + commonStyle.p}>
                Copyright © 2020 Sixteen Clothing Co., Ltd. - Design:{" "}
                <Link to="/" className={commonStyle.cTemplateRed}> TemplateMo</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
