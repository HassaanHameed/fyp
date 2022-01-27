import React from "react";

const Profile = () => {
  return (
    <>
      <section
        id="freelancer-portfolio"
        style={{ background: "url(img/freelancer/freelancer-profile-bg.jpg)" }}
      >
        <div className="container">
          <div className="freelancer-portfolio">
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-4">
                <div className="freelancer-profile-sidebar">
                  <div className="profile-image">
                    <img src="img/freelancer/hassaan.jpg" alt="" />
                  </div>
                  <div className="profile-info">
                    <div className="hourly-rate">
                      <h5>$ 20 USD/hr</h5>
                      <a
                        href="#"
                        className="button-ymp form-control"
                        data-toggle="modal"
                        data-target="#hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                    <div className="overviews">
                      <ul>
                        <li>
                          <span className="icon color-1">
                            <i className="fas fa-star" />
                          </span>{" "}
                          25 Reviews<span className="yellow">5.0</span>
                        </li>
                        <li>
                          <span className="icon color-2">
                            <i className="fas fa-check-circle" />
                          </span>{" "}
                          Jobs Completed<span className="blue">100%</span>
                        </li>
                        <li>
                          <span className="icon color-3">
                            <i className="fas fa-dollar-sign" />
                          </span>{" "}
                          On Budget<span className="violet">95%</span>
                        </li>
                        <li>
                          <span className="icon color-4">
                            <i className="fas fa-clock" />
                          </span>{" "}
                          On Time<span className="red">67%</span>
                        </li>
                      </ul>
                    </div>
                    <div className="verification">
                      <h4>Verifications</h4>
                      <ul>
                        <li>
                          Facebook Verified
                          <span>
                            <i className="fas fa-minus" />
                          </span>
                        </li>
                        <li>
                          Preffered Freelancer
                          <span>
                            <i className="fas fa-minus" />
                          </span>
                        </li>
                        <li className="active">
                          Payment Verified
                          <span>
                            <i className="fas fa-check" />
                          </span>
                        </li>
                        <li className="active">
                          Phone Verified
                          <span>
                            <i className="fas fa-check" />
                          </span>
                        </li>
                        <li className="active">
                          Email Verified
                          <span>
                            <i className="fas fa-check" />
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="top-skills">
                      <h4>My Top Skills</h4>
                      <ul>
                        <li>
                          WordPress<span>3092</span>
                        </li>
                        <li>
                          JavaScript<span>2095</span>
                        </li>
                        <li>
                          HTML5<span>1092</span>
                        </li>
                        <li>
                          CSS3<span>4092</span>
                        </li>
                        <li>
                          Website Design<span>2082</span>
                        </li>
                        <li>
                          Graphic Design<span>3092</span>
                        </li>
                        <li>
                          SEO<span>5092</span>
                        </li>
                      </ul>
                    </div>
                    <div className="experience">
                      <h4>Experience</h4>
                      <div className="type">
                        <h5>Lead Developer</h5>
                        <p>
                          ThemeMom International<span>2 Years</span>
                        </p>
                      </div>
                    </div>
                    <div className="education">
                      <h4>Education</h4>
                      <div className="degrees">
                        <div className="mba-degree">
                          <h5>MBA</h5>
                          <p>North South University</p>
                          <span>(2015-17) 2 Years</span>
                        </div>
                        <div className="cse-degree">
                          <h5>CSE</h5>
                          <p>Bangladesh University of Engineering</p>
                          <span>(2011-15) 4 Years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-7 col-lg-8">
                <div className="freelancer-info">
                  <div className="freelancer-detail">
                    <h4 className="freelancer-name">
                      Hassaan Hameed
                      <span className="online">
                        <i className="fas fa-circle" /> Online
                      </span>
                    </h4>
                    <h4 className="profile-title">
                      One Stop Solution for Web &amp; Apps!
                    </h4>
                    <p>
                      Hello we're Yes Design Company, a brilliant freelancer
                      team from Bangladesh. With 5 years of experience we've
                      participated in a wide range of projects from full website
                      designs to huge eCommerce stores. We've done websites for
                      Restaurant, Portfolio, News Magazine, Photography,
                      Wedding, Corporate identity and many more.
                    </p>
                    <h6 className="hire-for">
                      You can get benefited by hiring us for:
                    </h6>
                    <ul>
                      <li>
                        <i className="far fa-dot-circle" /> Website Design -
                        (UX, UI)
                      </li>
                      <li>
                        <i className="far fa-dot-circle" /> Template design in
                        Photoshop
                      </li>
                      <li>
                        <i className="far fa-dot-circle" /> PSD to HTML5
                        tamplates
                      </li>
                      <li>
                        <i className="far fa-dot-circle" /> HTML to Wordpress
                        theme development
                      </li>
                      <li>
                        <i className="far fa-dot-circle" /> Wordpress
                        Installation and development
                      </li>
                      <li>
                        <i className="far fa-dot-circle" /> Professional LOGO
                        Design
                      </li>
                    </ul>
                    <p>
                      Feel free to contact us with project details and lets make
                      something awesome together!
                    </p>
                  </div>
                  <div className="recent-reviews">
                    <h3>Recent Reviews</h3>
                  </div>
                  <div className="review-wrapper">
                    <a href="#">
                      <img src="img/company-logo/logo1.jpg" alt="" />
                    </a>
                    <div className="project-review">
                      <h5>Design project</h5>
                      <ul className="client-rating">
                        <li>05</li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>$1150.00 USD</li>
                      </ul>
                      <div className="review-detail">
                        <p>“Thanks. Looking forward to more projects.”</p>
                        <div className="client">
                          <p>- Finmediaco</p>
                          <img src="img/flag/flag3.png" alt="" />
                          <span>1 hour ago.</span>
                        </div>
                        <ul className="category-ch">
                          <li>
                            <a href="#">Graphic Design,</a>
                          </li>
                          <li>
                            <a href="#">Logo Design,</a>
                          </li>
                          <li>
                            <a href="#">Photoshop,</a>
                          </li>
                          <li>
                            <a href="#">Adobe Photoshop,</a>
                          </li>
                          <li>
                            <a href="#">Bochure Design,</a>
                          </li>
                          <li>
                            <a href="#">Logo</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="review-wrapper">
                    <a href="#">
                      <img src="img/company-logo/logo2.jpg" alt="" />
                    </a>
                    <div className="project-review">
                      <h5>Design project</h5>
                      <ul className="client-rating">
                        <li>05</li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>$1150.00 USD</li>
                      </ul>
                      <div className="review-detail">
                        <p>“Thanks. Looking forward to more projects.”</p>
                        <div className="client">
                          <p>- Finmediaco</p>
                          <img src="img/flag/flag4.png" alt="" />
                          <span>1 hour ago.</span>
                        </div>
                        <ul className="category-ch">
                          <li>
                            <a href="#">Graphic Design,</a>
                          </li>
                          <li>
                            <a href="#">Logo Design,</a>
                          </li>
                          <li>
                            <a href="#">Photoshop,</a>
                          </li>
                          <li>
                            <a href="#">Adobe Photoshop,</a>
                          </li>
                          <li>
                            <a href="#">Bochure Design,</a>
                          </li>
                          <li>
                            <a href="#">Logo</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="review-wrapper">
                    <a href="#">
                      <img src="img/company-logo/logo3.jpg" alt="" />
                    </a>
                    <div className="project-review">
                      <h5>Design project</h5>
                      <ul className="client-rating">
                        <li>05</li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>$1150.00 USD</li>
                      </ul>
                      <div className="review-detail">
                        <p>“Thanks. Looking forward to more projects.”</p>
                        <div className="client">
                          <p>- Finmediaco</p>
                          <img src="img/flag/flag5.png" alt="" />
                          <span>1 hour ago.</span>
                        </div>
                        <ul className="category-ch">
                          <li>
                            <a href="#">Graphic Design,</a>
                          </li>
                          <li>
                            <a href="#">Logo Design,</a>
                          </li>
                          <li>
                            <a href="#">Photoshop,</a>
                          </li>
                          <li>
                            <a href="#">Adobe Photoshop,</a>
                          </li>
                          <li>
                            <a href="#">Bochure Design,</a>
                          </li>
                          <li>
                            <a href="#">Logo</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="review-wrapper">
                    <a href="#">
                      <img src="img/company-logo/logo4.jpg" alt="" />
                    </a>
                    <div className="project-review">
                      <h5>Design project</h5>
                      <ul className="client-rating">
                        <li>05</li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>$1150.00 USD</li>
                      </ul>
                      <div className="review-detail">
                        <p>“Thanks. Looking forward to more projects.”</p>
                        <div className="client">
                          <p>- Finmediaco</p>
                          <img src="img/flag/flag6.png" alt="" />
                          <span>1 hour ago.</span>
                        </div>
                        <ul className="category-ch">
                          <li>
                            <a href="#">Graphic Design,</a>
                          </li>
                          <li>
                            <a href="#">Logo Design,</a>
                          </li>
                          <li>
                            <a href="#">Photoshop,</a>
                          </li>
                          <li>
                            <a href="#">Adobe Photoshop,</a>
                          </li>
                          <li>
                            <a href="#">Bochure Design,</a>
                          </li>
                          <li>
                            <a href="#">Logo</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="portfolio-menu">
                <h3>Portfolio</h3>
                <div className="button-group portfolio-btn-group">
                  <button className="form-control" data-filter=".cat1">
                    Video
                  </button>
                  <button className="form-control" data-filter=".cat2">
                    Mansory
                  </button>
                  <button className="form-control" data-filter=".cat3">
                    Planding
                  </button>
                  <button className="form-control" data-filter=".cat4">
                    UI/UX
                  </button>
                  <button className="form-control" data-filter=".cat5">
                    Brand
                  </button>
                  <button className="active form-control" data-filter="*">
                    All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row grid">
            <div className="col-md-4 grid-item cat2 cat3 cat4">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio1.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 grid-item cat2 cat1 cat5">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio2.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 grid-item cat3 cat4">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio3.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 grid-item cat1 cat3 cat4">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio4.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 grid-item cat1 cat2 cat3">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio5.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 grid-item cat5 cat4 cat3">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio6.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 grid-item cat1 cat5 cat2">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio7.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 grid-item cat2 cat4 cat5">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio8.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 grid-item cat5 cat1 cat3">
              <div className="single-image">
                <a href="#">
                  <img src="img/portfolio/portfolio9.jpg" alt="" />
                </a>
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

export default Profile;
