import React from "react";

const Entrepreneurs = () => {
  return (
    <>
      <section id="entrepreneurs">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12 col-sm-12" />
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="titles">
                <h2 className="titles__main-title">
                  Storrea Powers Ambitious Entrepreneurs
                </h2>
                <h6 className="titles__sub-title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting dustry. Lorem Ipsum has been the industry's
                  standard.
                </h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="statistics">
                <span className="statistics__icon">
                  <i className="fas fa-building" />
                </span>
                <div className="statistics__details">
                  <span className="statistics__score">150+</span>
                  <p>Business Powered by Storrea</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="statistics">
                <span className="statistics__icon">
                  <i className="fab fa-first-order" />
                </span>
                <div className="statistics__details">
                  <span className="statistics__score">35000+</span>
                  <p>Number of Orders</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="statistics">
                <span className="statistics__icon">
                  <i className="fas fa-magic" />
                </span>
                <div className="statistics__details">
                  <span className="statistics__score">1M+</span>
                  <p>Sold on Storrea</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-wrapper">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="testimonial-image">
                  <img src="img/testimonial/testimonial.png" alt="" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="slider-wrapper">
                  <div className="testimonial-slider">
                    <div>
                      <div className="testimonial-items">
                        <div className="testimonial-item">
                          <div className="author-image">
                            <img src="img/testimonial/abdullah.jpeg" alt="" />
                          </div>
                          <div className="author-details">
                            <h6 className="name">Abdullah Younus</h6>
                            <ul className="author-social">
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-square" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-linkedin" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter-square" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="quote">
                            <p>
                              Proin scelerisque enim eget pulvinar ullamcorper,
                              quisque feugiat ultricies risus vel visible.eum
                              neque molestiae molestias.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="testimonial-items">
                        <div className="testimonial-item">
                          <div className="author-image">
                            <img src="img/testimonial/zain.jpeg" alt="" />
                          </div>
                          <div className="author-details">
                            <h6 className="name">Zain ul Abideen</h6>
                            <ul className="author-social">
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-square" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-linkedin" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter-square" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="quote">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Fugiat dolore, eum neque
                              molestiae molestias.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Entrepreneurs;
