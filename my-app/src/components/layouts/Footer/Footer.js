import styles from "./Footer.module.css";
import Container from "../../atoms/Container/Container";
import Row from "../../atoms/Row/Row";
import Col from "../../atoms/Col/Col";
import Link from "../../atoms/Link/Link";
import commonStyle from "../../../styles/commonStyle.module.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className={commonStyle.col12}>
            <div className={styles.innerContent + " " + commonStyle.textCenter}>
              <p className={commonStyle.uppercase + " " + commonStyle.p}>
                Copyright © 2020 Sixteen Clothing Co., Ltd. - Design:{" "}
                <Link className={commonStyle.cTemplateRed}> TemplateMo</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
