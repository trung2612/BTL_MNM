import React from "react";
import cx from "clsx";
import anh1 from"../../assets/images/client-01.png"
import anh2 from"../../assets/images/slide_01.jpg"
import dummyCarouselContact from "../../dummy-data/carouselContact.json";
import { Container } from "react-bootstrap";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Banner from "../../components/molecules/Banner/Banner";
import Row from "../../components/atoms/Row/Row";
import Col from "../../components/atoms/Col/Col";
import commonStyle from "../../styles/commonStyle.module.css";

import  styles from "./Contact.module.css";
import Img from "../../components/atoms/Img/Img";

const Contact = () => {
  return (
    <>
       <Banner datas={dummyCarouselContact.contact} />
      <div className={styles.latestContacts}>
      <Container>
        <Row>
          <Col className={commonStyle.col12}>
            <SectionTitle title="Our Location on Maps"/>
          </Col>
          <Col className={commonStyle.col8}>
          <Img src={anh2}/>
          </Col>
          <Col className={commonStyle.col4}>
            <div className={styles.leftContent}>
              <h4>About our office</h4>
              <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
              {/* <ul className="social-icons">
                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="/"><i className="fa fa-behance"></i></a></li>
              </ul> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>


    <div className={styles.sendMessage}>
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Send us a Message"/>
          </Col>
          <Col className={commonStyle.col8}>
            <div className={styles.contactForm}>
              <form id="contact" action="" method="post">
                <div className="row">
                  <div>
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset>
                      <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required=""/>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset>
                      <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required=""/>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset>
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset>
                      <button type="submit" id="form-submit" className={cx(commonStyle.textright,commonStyle.col4)}>Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <div className={commonStyle.col4}>
            <ul className={styles.Accordion}>
              <li>
                <h4>Accordion Title One</h4>
                     <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisic elit. 
                      Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, 
                      consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p> 
                     
              </li>
              <li>
                <h4>Second Title Here</h4>
                  <div className={styles.leftContent}>
                    <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisic elit.
                       Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet,
                        consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                  </div>
                      
 
              </li>
              <li>
                <h4>Accordion Title Three</h4>
                  <div className={styles.leftContent}>
                    <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisic elit.
                       Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet,
                        consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                  </div>
                      
 
              </li>
              <li>
                <h4>Fourth Accordion Title</h4>
                  <div className={styles.leftContent}>
                    <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisic elit. 
                      Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet,
                       consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                  </div>
                      
 
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>

    <div className={styles.happyClient}>
      <Container>
        <Row>
          <Col className={commonStyle.col12}>
            <SectionTitle title="Our Happy Customers"/>
          </Col>
          <Col className={commonStyle.col2}>
            <Img src={anh1}/>
          </Col>
          <Col className={commonStyle.col2}>
            <Img src={anh1}/>
          </Col>
          <Col className={commonStyle.col2}>
            <Img src={anh1}/>
          </Col>
          <Col className={commonStyle.col2}>
            <Img src={anh1}/>
          </Col>
          <Col className={commonStyle.col2}>
            <Img src={anh1}/>
          </Col>
          <Col className={commonStyle.col2}>
            <Img src={anh1}/>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Contact;