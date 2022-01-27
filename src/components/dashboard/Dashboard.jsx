import React from "react";

const Dashboard = () => {
  return (
    <>
      <section id="hero" style={{ background: "url(img/hero-bg.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12">
              <div className="hero-wrapper">
                <div className="hero-details">
                  <div className="hero-title">
                    <h1>
                      Introducing bloclance
                      <br /> Market Place Corporate
                    </h1>
                    <div className="hero-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                        <br /> Lorem Ipsum has been the industry's standard
                      </p>
                    </div>
                  </div>
                  <form action="#" className="hero-form">
                    <div className="job-category">
                      <select id="select-job">
                        <option value="online">Online Jobs</option>
                        <option value="online">Offline Jobs</option>
                      </select>
                      <div className="icon-one">
                        <span>
                          <i className="fas fa-map-marker-alt" />
                        </span>
                      </div>
                    </div>
                    <div className="job-keyword">
                      <input
                        type="text"
                        placeholder="Job Title Keyword"
                        className="keyword"
                      />
                      <div className="icon-two">
                        <span>
                          <i className="fas fa-briefcase" />
                        </span>
                      </div>
                    </div>
                    <button className="hero-btn">
                      <i className="fas fa-search" /> Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
