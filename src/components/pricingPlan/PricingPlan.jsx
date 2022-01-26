import React from "react";

const PricingPlan = () => {
  return (
    <>
      <div id="pricing-table">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12" />
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="titles">
                <h2 className="titles__main-title">Pricing Plan</h2>
                <h6 className="titles__sub-title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting dustry. Lorem Ipsum has been the industry's
                  standard.
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12" />
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-12 col-sm-12" />
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing-item">
                <h4 className="pricing-title">Yearly Access</h4>
                <p className="pricing-sub-title">Most Popular</p>
                <h1 className="price">
                  <span>$</span>49.00
                </h1>
                <ul className="pricing-details">
                  <li>Access To All Themes</li>
                  <li>Theme Updates</li>
                  <li>Premium Support</li>
                  <li>Unlimited Website Usages</li>
                  <li>Risk-Free Guarantee</li>
                  <li>Yearly Renewal Fee</li>
                  <li>
                    <del>One Time Fee</del>
                  </li>
                </ul>
                <button className="pt-button">Get Started</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing-item">
                <h4 className="pricing-title">Lifetime Access</h4>
                <p className="pricing-sub-title">Best Deal</p>
                <h1 className="price">
                  <span>$</span>169.00
                </h1>
                <ul className="pricing-details">
                  <li>Access To All Themes</li>
                  <li>Theme Updates</li>
                  <li>Premium Support</li>
                  <li>Unlimited Website Usages</li>
                  <li>Risk-Free Guarantee</li>
                  <li>Yearly Renewal Fee</li>
                  <li>
                    <del>One Time Fee</del>
                  </li>
                </ul>
                <button className="pt-button">Get Started</button>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12"></div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pricing-caption">
                <p>
                  Cancel your membership or upgrade to a different package at
                  any time after signing up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
