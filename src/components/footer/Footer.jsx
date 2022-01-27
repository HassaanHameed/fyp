import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="footer-subscribe">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <p className="subscribe-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting dummy text ever since the 1500s
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="subscribe-form-pt">
                      {/* Begin Mailchimp Signup Form */}
                      <div id="mc_embed_signup">
                        <form
                          id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          className="validate"
                          target="_blank"
                          noValidate
                        >
                          <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                              <input
                                placeholder="Type your Email"
                                type="email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                              />
                            </div>
                            <div id="mce-responses" className="clear">
                              <div
                                className="response"
                                id="mce-error-response"
                              />
                              <div
                                className="response"
                                id="mce-success-response"
                              />
                            </div>
                            <div className="clear">
                              <button
                                type="button"
                                id="mc-embedded-subscribe"
                                name="subscribe"
                                className="btn-search-pt button"
                              >
                                <i className="fas fa-paper-plane" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*End mc_embed_signup*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-area">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget">
                      <h5 className="widget-title">Browse Categories</h5>
                      <ul>
                        <li>
                          <a href="#">WordPress Themes</a>
                        </li>
                        <li>
                          <a href="#">HTML5 Templates</a>
                        </li>
                        <li>
                          <a href="#">UI Design (PSD)</a>
                        </li>
                        <li>
                          <a href="#">Free Downloads</a>
                        </li>
                        <li>
                          <a href="#">1 Click Install</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget">
                      <h5 className="widget-title">How To Buy</h5>
                      <ul>
                        <li>
                          <a href="#">Explore Products</a>
                        </li>
                        <li>
                          <a href="#">Create Account</a>
                        </li>
                        <li>
                          <a href="#">Sign In</a>
                        </li>
                        <li>
                          <a href="#">Payments</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget">
                      <h5 className="widget-title">Features</h5>
                      <ul>
                        <li>
                          <a href="#">1 Click Install</a>
                        </li>
                        <li>
                          <a href="#">Custom Illustration</a>
                        </li>
                        <li>
                          <a href="#">Stock Footage</a>
                        </li>
                        <li>
                          <a href="#">Mockups</a>
                        </li>
                        <li>
                          <a href="#">Mobile First</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget">
                      <h5 className="widget-title">Help &amp; Support</h5>
                      <ul>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Meet The Team</a>
                        </li>
                        <li>
                          <a href="#">Support Center</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="copyright-area">
                <div className="copyright-wrapper">
                  <div className="copyright-text">
                    © 2021 bloclance | Developed by&nbsp;
                    <Link to="/">Bloclance.org</Link>
                  </div>
                  <div className="footer-nav">
                    <ul id="menu-footer-nav" className="footer_nav">
                      <li
                        id="menu-item-439"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-439"
                      >
                        <a href="#">Terms &amp; Condition</a>
                      </li>
                      <li
                        id="menu-item-440"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-440"
                      >
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
