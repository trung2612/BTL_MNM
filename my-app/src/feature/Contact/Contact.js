import React from "react";
import Iframe from 'react-iframe';
import { Link } from "react-router-dom";

import anh1 from "../../assets/images/client-01.png";
import dummyCarouselContact from "../../dummy-data/carouselContact.json";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Banner from "../../components/molecules/Banner/Banner";
import Row from "../../components/atoms/Row/Row";
import Col from "../../components/atoms/Col/Col";
import Container from "../../components/atoms/Container/Container";
import Button from  "../../components/atoms/Button/Button";
import SocialMedia from "../../components/molecules/SocialMedia/SocialMedia";

import commonStyle from "../../styles/commonStyle.module.css";
import styles from "./Contact.module.css";
import Img from "../../components/atoms/Img/Img";

const Contact = () => {
  return (
    <>
      <Banner datas={dummyCarouselContact.contact} />
      <div className={styles.findUs}>
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <SectionTitle title="Our Location on Maps" />
            </Col>
            <Col className={commonStyle.col8}>
              <div className={styles.map}>
                <Iframe
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  allowfullscreen
                  frameborder="0"
                ></Iframe>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.leftContent}>
                <h4>About our office</h4>
                <p className={commonStyle.p}>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                  voluptate nihil eumester consectetur similiqu consectetur.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti.
                </p>
                   <SocialMedia/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.sendMessage}>
        <Container>
          <Row>
            <Col>
              <SectionTitle title="Send us a Message" />
            </Col>
            <Col className={commonStyle.col8}>
              <div className={styles.contactForm}>
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div>
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div>
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div>
                      <Link to="/">
                      <Button>Send Message</Button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <div className={commonStyle.col4}>
              <ul className={styles.accordion}>
                <li>
                  <Link to="/">Accordion Title One</Link>
                  <p className={commonStyle.p}>
                    Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                    voluptate nihil eumester consectetur similiqu consectetur.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                    consequuntur, modi mollitia corporis ipsa voluptate corrupti
                    elite.
                  </p>
                </li>
                <li>
                  <Link to="/">Second Title Here</Link>
                </li>
                <li>
                  <Link to="/">Accordion Title Three</Link>
                </li>
                <li>
                  <Link to="/">Fourth Accordion Title</Link>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </div>

      <div className={styles.happyClients}>
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <SectionTitle title="Our Happy Customers" />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src={anh1} />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src={anh1} />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src={anh1} />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src={anh1} />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src={anh1} />
            </Col>
            <Col className={commonStyle.col2}>
              <Img src={anh1} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
