import React from "react";
import dummyCarouseAbout from "../../dummy-data/carouselAbout.json";
import Banner from "../../components/molecules/Banner/Banner";
import styles from "./About.module.css";
import Container from "../../components/atoms/Container/Container";
import Row from "../../components/atoms/Row/Row";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Col from "../../components/atoms/Col/Col";
import Img from "../../components/atoms/Img/Img";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import commonStyle from "../../styles/commonStyle.module.css"

const About = () => {
  return (
    <>
      <Banner datas={dummyCarouseAbout.about} />
      <div className={styles.bestFeatures}>
        <Container>
          <Row className={styles.pd60}>
            <SectionTitle title="Our Background" />

            <Col className={commonStyle.col6}>
              <Img
                className={styles.bestFeaturesImg}
                src="https://anhdepfree.com/wp-content/uploads/2018/08/bo-hinh-nen-may-tinh-4k-cuc-dep-20.jpg"
                alt="abc"
              />
            </Col>
            <Col className={commonStyle.col6}>
              <div className={styles.leftContent}>
                <h4>Who we are & What we do?</h4>
                <p className={commonStyle.p}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <ul className={styles.iconSocial}>
                <li><Link to="/"><FontAwesomeIcon icon={faStar} color="#f33f3f" /></Link></li>
                <li><Link to="/"><FontAwesomeIcon icon={faStar} color="#f33f3f" /></Link></li>
                <li><Link to="/"><FontAwesomeIcon icon={faStar} color="#f33f3f" /></Link></li>
                <li><Link to="/"><FontAwesomeIcon icon={faStar} color="#f33f3f" /></Link></li>
              </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.teamMembers}>
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <div className={styles.sectionHeading}>
                <h2>Our Team Members</h2>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.teamMember}>
                <div className={styles.thumbContainer}>
                  <img src="https://vnn-imgs-f.vgcloud.vn/2021/09/08/16/lingard-tu-choi-gia-han-mu-nguy-co-mat-trang.jpg" alt="" />
                </div>
                <div className={styles.downContent}>
                  <h4>Nguyễn Hà Trung</h4>
                  <span>CO-Founder</span>
                  <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.teamMember}>
                <div className={styles.thumbContainer}>
                  <img src="https://vnn-imgs-f.vgcloud.vn/2021/09/08/16/lingard-tu-choi-gia-han-mu-nguy-co-mat-trang.jpg" alt="" />
                </div>
                <div className={styles.downContent}>
                  <h4>Nguyễn Hà Trung</h4>
                  <span>CO-Founder</span>
                  <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.teamMember}>
                <div className={styles.thumbContainer}>
                  <img src="https://vnn-imgs-f.vgcloud.vn/2021/09/08/16/lingard-tu-choi-gia-han-mu-nguy-co-mat-trang.jpg" alt="" />
                </div>
                <div className={styles.downContent}>
                  <h4>Nguyễn Hà Trung</h4>
                  <span>CO-Founder</span>
                  <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.teamMember}>
                <div className={styles.thumbContainer}>
                  <img src="https://vnn-imgs-f.vgcloud.vn/2021/09/08/16/lingard-tu-choi-gia-han-mu-nguy-co-mat-trang.jpg" alt="" />
                </div>
                <div className={styles.downContent}>
                  <h4>Nguyễn Hà Trung</h4>
                  <span>CO-Founder</span>
                  <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <div className={styles.services}>
        <Container>
          <Row>
            <Col className={commonStyle.col4}>
              <div className={styles.serviceItem}>
                <div className={styles.icon}>
                  <Link to="/"><FontAwesomeIcon icon={faStar} color="#f33f3f" /></Link>
                </div>
                <div className={styles.downContenttent}>
                  <h4>Product Management</h4>
                  <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <Link to="/" class="filled-button">Read More</Link>
                </div>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.serviceItem}>
                <div className={styles.icon}>
                  <Link to="/"><FontAwesomeIcon icon={faStar} color="#f33f3f" /></Link>
                </div>
                <div className={styles.downContenttent}>
                  <h4>Product Management</h4>
                  <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <Link to="/" class="filled-button">Read More</Link>
                </div>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.serviceItem}>
                <div className={styles.icon}>
                  <Link to="/"><FontAwesomeIcon icon={faStar} color="#f33f3f" /></Link>
                </div>
                <div className={styles.downContenttent}>
                  <h4>Product Management</h4>
                  <p className={commonStyle.p}>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <Link to="/" class="filled-button">Read More</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <div className={styles.happyClients}>
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <div className={styles.sectionHeadinging}>
                <h2>Happy Partners</h2>
              </div>
            </Col>
            <Col className={commonStyle.col12}>
              <div className={styles.owl}>
                <div className={styles.owlStageOuter}>
                  <div className={styles.owlStage}>
                    <div className={styles.owlItem}>
                      <div className={styles.clientItem}>
                        <img src="https://anhdepfree.com/wp-content/uploads/2018/08/bo-hinh-nen-may-tinh-4k-cuc-dep-20.jpg" alt="4"/>
                      </div>
                    </div>
                    <div className={styles.owlItem}>
                      <div className={styles.clientItem}>
                        <img src="https://anhdepfree.com/wp-content/uploads/2018/08/bo-hinh-nen-may-tinh-4k-cuc-dep-20.jpg" alt="4"/>
                      </div>
                    </div>
                    <div className={styles.owlItem}>
                      <div className={styles.clientItem}>
                        <img src="https://anhdepfree.com/wp-content/uploads/2018/08/bo-hinh-nen-may-tinh-4k-cuc-dep-20.jpg" alt="4"/>
                      </div>
                    </div>
                    <div className={styles.owlItem}>
                      <div className={styles.clientItem}>
                        <img src="https://anhdepfree.com/wp-content/uploads/2018/08/bo-hinh-nen-may-tinh-4k-cuc-dep-20.jpg" alt="4"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
