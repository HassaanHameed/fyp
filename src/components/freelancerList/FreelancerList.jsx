import React from "react";

const FreelancerList = () => {
  return (
    <>
      <section id="freelancer-list-view">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="buttons-container">
                <ul className="list-grid-btn">
                  <li>View : </li>
                  <li>
                    <button
                      className="view-btn active list-view"
                      id="list"
                      onclick="listView()"
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </li>
                  <li>
                    <form action="https://premiumtheme.org/html/chakri/browse-freelancer-grid.html">
                      <button
                        className="view-btn grid-view"
                        id="grid"
                        onclick="gridView()"
                      >
                        <i className="fas fa-th-large" />
                      </button>
                    </form>
                  </li>
                </ul>
                <ul className="sort-options">
                  <li>Sort By :</li>
                  <li>
                    <select name="sort-job" id="sort-lists">
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="freelancers-items">
                <article className="freelancers freelancer-list-view">
                  <div className="left-align">
                    <div className="feature-image">
                      <img src="img/freelancer/freelancer-1.jpg" alt="" />
                      <span className="online" />
                    </div>
                    <div className="name-designation">
                      <h5 className="name">Mr. Robert</h5>
                      <h5 className="designation">UI/UX Designer </h5>
                    </div>
                    <div className="contact-details">
                      <ul>
                        <li>
                          <span className="verified">Verified</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-dollar-sign" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                        <li className="address-book">
                          <a href="#">
                            <i className="fas fa-address-book" />
                          </a>
                        </li>
                        <li className="phone">
                          <a href="#">
                            <i className="fas fa-phone" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-align">
                    <div className="rate-hire">
                      <div className="hire-button">
                        <a href="#" className="hire-btn">
                          Hire Me
                        </a>
                      </div>
                      <div className="rate">
                        <p>
                          Rate : <span>$85/hr</span>
                        </p>
                      </div>
                    </div>
                    <div className="review-details">
                      <ul className="review">
                        <li className="point">5.0</li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              <div className="freelancers-items">
                <article className="freelancers freelancer-list-view">
                  <div className="left-align">
                    <div className="feature-image">
                      <img src="img/freelancer/freelancer-2.jpg" alt="" />
                      <span className="online" />
                    </div>
                    <div className="name-designation">
                      <h5 className="name">Rafsan Prodhan</h5>
                      <h5 className="designation">Web Developer</h5>
                    </div>
                    <div className="contact-details">
                      <ul>
                        <li>
                          <span className="verified">Verified</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-dollar-sign" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                        <li className="address-book">
                          <a href="#">
                            <i className="fas fa-address-book" />
                          </a>
                        </li>
                        <li className="phone">
                          <a href="#">
                            <i className="fas fa-phone" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-align">
                    <div className="rate-hire">
                      <div className="hire-button">
                        <a href="#" className="hire-btn">
                          Hire Me
                        </a>
                      </div>
                      <div className="rate">
                        <p>
                          Rate : <span>$85/hr</span>
                        </p>
                      </div>
                    </div>
                    <div className="review-details">
                      <ul className="review">
                        <li className="point">5.0</li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              <div className="freelancers-items">
                <article className="freelancers freelancer-list-view">
                  <div className="left-align">
                    <div className="feature-image">
                      <img src="img/freelancer/freelancer-3.jpg" alt="" />
                      <span className="online" />
                    </div>
                    <div className="name-designation">
                      <h5 className="name">Rafsan Prodhan</h5>
                      <h5 className="designation">Web Developer</h5>
                    </div>
                    <div className="contact-details">
                      <ul>
                        <li>
                          <span className="verified">Verified</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-dollar-sign" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                        <li className="address-book">
                          <a href="#">
                            <i className="fas fa-address-book" />
                          </a>
                        </li>
                        <li className="phone">
                          <a href="#">
                            <i className="fas fa-phone" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-align">
                    <div className="rate-hire">
                      <div className="hire-button">
                        <a href="#" className="hire-btn">
                          Hire Me
                        </a>
                      </div>
                      <div className="rate">
                        <p>
                          Rate : <span>$85/hr</span>
                        </p>
                      </div>
                    </div>
                    <div className="review-details">
                      <ul className="review">
                        <li className="point">5.0</li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              <div className="freelancers-items">
                <article className="freelancers freelancer-list-view">
                  <div className="left-align">
                    <div className="feature-image">
                      <img src="img/freelancer/freelancer-7.jpg" alt="" />
                      <span className="online" />
                    </div>
                    <div className="name-designation">
                      <h5 className="name">Rafsan Prodhan</h5>
                      <h5 className="designation">Web Developer</h5>
                    </div>
                    <div className="contact-details">
                      <ul>
                        <li>
                          <span className="verified">Verified</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-dollar-sign" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                        <li className="address-book">
                          <a href="#">
                            <i className="fas fa-address-book" />
                          </a>
                        </li>
                        <li className="phone">
                          <a href="#">
                            <i className="fas fa-phone" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-align">
                    <div className="rate-hire">
                      <div className="hire-button">
                        <a href="#" className="hire-btn">
                          Hire Me
                        </a>
                      </div>
                      <div className="rate">
                        <p>
                          Rate : <span>$85/hr</span>
                        </p>
                      </div>
                    </div>
                    <div className="review-details">
                      <ul className="review">
                        <li className="point">5.0</li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              <div className="freelancers-items">
                <article className="freelancers freelancer-list-view">
                  <div className="left-align">
                    <div className="feature-image">
                      <img src="img/freelancer/freelancer-8.jpg" alt="" />
                      <span className="online" />
                    </div>
                    <div className="name-designation">
                      <h5 className="name">Sahinur Salafee</h5>
                      <h5 className="designation">Web Designer</h5>
                    </div>
                    <div className="contact-details">
                      <ul>
                        <li>
                          <span className="verified">Verified</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-dollar-sign" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                        <li className="address-book">
                          <a href="#">
                            <i className="fas fa-address-book" />
                          </a>
                        </li>
                        <li className="phone">
                          <a href="#">
                            <i className="fas fa-phone" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-align">
                    <div className="rate-hire">
                      <div className="hire-button">
                        <a href="#" className="hire-btn">
                          Hire Me
                        </a>
                      </div>
                      <div className="rate">
                        <p>
                          Rate : <span>$85/hr</span>
                        </p>
                      </div>
                    </div>
                    <div className="review-details">
                      <ul className="review">
                        <li className="point">5.0</li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              <div className="freelancers-items">
                <article className="freelancers freelancer-list-view">
                  <div className="left-align">
                    <div className="feature-image">
                      <img src="img/freelancer/freelancer-9.jpg" alt="" />
                      <span className="online" />
                    </div>
                    <div className="name-designation">
                      <h5 className="name">John Due</h5>
                      <h5 className="designation">Web Designer</h5>
                    </div>
                    <div className="contact-details">
                      <ul>
                        <li>
                          <span className="verified">Verified</span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-dollar-sign" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-envelope" />
                          </a>
                        </li>
                        <li className="address-book">
                          <a href="#">
                            <i className="fas fa-address-book" />
                          </a>
                        </li>
                        <li className="phone">
                          <a href="#">
                            <i className="fas fa-phone" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-align">
                    <div className="rate-hire">
                      <div className="hire-button">
                        <a href="#" className="hire-btn">
                          Hire Me
                        </a>
                      </div>
                      <div className="rate">
                        <p>
                          Rate : <span>$85/hr</span>
                        </p>
                      </div>
                    </div>
                    <div className="review-details">
                      <ul className="review">
                        <li className="point">5.0</li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                        <li>
                          <span className="star">
                            <i className="fas fa-star" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pagination-area">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-chevron-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreelancerList;
