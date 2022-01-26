import React from "react";

const Followers = () => {
  return (
    <>
      <section id="followers">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sm-12" />
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="follow-details">
                <div className="follow">
                  <span className="icon facebook">
                    <i className="fab fa-facebook-f" />
                  </span>
                  <div className="followers">
                    <span className="amount">1,47,570</span>
                    <p>Followers</p>
                  </div>
                </div>
                <div className="follow">
                  <span className="icon twitter">
                    <i className="fab fa-twitter" />
                  </span>
                  <div className="followers">
                    <span className="amount">1,49,580</span>
                    <p>Followers</p>
                  </div>
                </div>
                <div className="follow">
                  <span className="icon envelope">
                    <i className="far fa-envelope-open" />
                  </span>
                  <div className="followers">
                    <span className="amount">1,48,770</span>
                    <p>Followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-12" />
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12" />
            <div className="col-lg-2 col-md-2 col-sm-12">
              <div className="verify-image">
                <img src="img/verify/verify1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
              <div className="verify-image">
                <img src="img/verify/verify2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
              <div className="verify-image">
                <img src="img/verify/verify3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Followers;
