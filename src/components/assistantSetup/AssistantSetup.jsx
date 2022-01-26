import React from "react";

const AssistantSetup = () => {
  return (
    <>
      <section id="cta">
        <div className="container">
          <div
            className="cta"
            style={{ background: "url(img/cta/cta-bg.png)" }}
          >
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="cta__details-wrapper">
                  <div className="cta__details">
                    <h3 className="cta-title">
                      Get Free Store Setup Assistance We are just a phone call
                      away.
                    </h3>
                    <div className="get-button">
                      <a href="#" className="get-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="cta__image">
                  <img src="img/cta/cta1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssistantSetup;
