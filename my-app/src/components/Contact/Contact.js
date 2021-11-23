import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
          <div className="find-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our Location on Maps</h2>
            </div>
          </div>
          <div className="col-md-8">
          <img src="https://st.quantrimang.com/photos/image/2016/05/31/Google-Maps-hinh-anh.jpg"/>
          </div>
          <div className="col-md-4">
            <div className="left-content">
              <h4>About our office</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
              <ul className="social-icons">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-linkedin"></i></li>
                <li><i className="fa fa-behance"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="send-message">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Send us a Message</h2>
            </div>
          </div>
          <div className="col-md-8">
            <div className="contact-form">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <ul className="accordion">
              <li>
                  <span>Accordion Title One</span>
                  <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                  </div>
              </li>
              <li>
                  <span>Second Title Here</span>
                  <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                  </div>
              </li>
              <li>
                  <span>Accordion Title Three</span>
                  <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                  </div>
              </li>
              <li>
                  <span>Fourth Accordion Title</span>
                  <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="happy-clients">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our Happy Customers</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-clients owl-carousel">
              <div className="client-item">
                <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-3-number-company-logo-template-illustration-png-image_4117537.jpg" alt="1"/>
              </div>

              <div className="client-item">
                <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-3-number-company-logo-template-illustration-png-image_4117537.jpg" alt="2"/>
              </div>

              <div className="client-item">
                <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-3-number-company-logo-template-illustration-png-image_4117537.jpg" alt="3"/>
              </div>

              <div className="client-item">
                <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-3-number-company-logo-template-illustration-png-image_4117537.jpg" alt="4"/>
              </div>

              <div className="client-item">
                <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-3-number-company-logo-template-illustration-png-image_4117537.jpg" alt="5"/>
              </div>

              <div className="client-item">
                <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-3-number-company-logo-template-illustration-png-image_4117537.jpg" alt="6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;