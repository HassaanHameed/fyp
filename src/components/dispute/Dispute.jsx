import React from "react";

const Dispute = () => {
  return (
    <>
      <section id="dispute-page">
        <div className="container">
          <div className="dispute">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h4 className="project-name">
                  Project Name: Get a Website Built
                </h4>
                <h5>Dispute: Rafsan Jany P. vs Protik46(active)</h5>
                <p>Category: Other</p>
                <div className="get-started-wrapper">
                  <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3 mobile-padding">
                      <img src="img/dispute/dispute-1.png" alt="" />
                      <p className="bar-ymp" />
                      <h4 className="stage">
                        <a href="#">Stage 1</a>
                      </h4>
                      <p>Identify The Issue</p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 mobile-padding">
                      <img src="img/dispute/dispute-2.png" alt="" />
                      <p className="bar-ymp" />
                      <h4 className="stage">
                        <a href="#">Stage 2</a>
                      </h4>
                      <p>Negotiations</p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 mobile-padding">
                      <img src="img/dispute/dispute-3.png" alt="" />
                      <p className="bar-ymp" />
                      <h4 className="stage">
                        <a href="#">Stage 3</a>
                      </h4>
                      <p>Final Offers/Evidence</p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 mobile-padding">
                      <img src="img/dispute/dispute-4.png" alt="" />
                      <p className="bar-ymp" />
                      <h4 className="stage">
                        <a href="#">Stage 4</a>
                      </h4>
                      <p>Arbitration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="note">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h5>Stage 2 - Negotiations</h5>
              <ul>
                <li>
                  Market Place strongly recommendeds you communicate clearly
                  with the other party to resolve the matter
                </li>
                <li>
                  <span>Note:</span> Failure for Protik46 to communicate within
                  14 days from when the dispute was lodged will result in favor
                  of Rafsan Jany P.
                </li>
                <li>
                  After 7 Days either party elect to move the dispute to
                  arbitration at a fee of $5.00 USD where the dispute will
                  escalate to stage . The other Party will then have 4 days
                  during this stage to agree to pay this fee and for both
                  parties to submit any final evidence. The arbitration fee will
                  then be refunded to the winner of the dispute.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="negotiation">
                <h4>Negotiation:</h4>
                <div className="negotiation-inner clearfix">
                  <img src="img/dispute/user-1.png" alt="user-image" />
                  <div className="message">
                    <div className="message-title clearfix">
                      <h5>Rafsan Jany P.</h5>
                      <img src="img/dispute/flag7.png" alt="flag" />
                      <span>February 14, 2021 at 12:05 + 6</span>
                    </div>
                    <div className="dispute-message">
                      <span>Done</span>
                    </div>
                  </div>
                </div>
                <div className="negotiation-inner clearfix">
                  <img src="img/dispute/user-1.png" alt="img1" />
                  <div className="message">
                    <div className="message-title clearfix">
                      <h5>Sahinur Salafee</h5>
                      <img src="img/dispute/flag.png" alt="flag" />
                      <span>February 27, 2021 at 2:05 + 6</span>
                    </div>
                    <div className="dispute-message">
                      <span>Done</span>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className="respond">
                  <h4>Respond to the other party:</h4>
                  <textarea defaultValue={""} />
                </div>
                <div className="file-upload-area">
                  <h5>You may attach documentation to support your case:</h5>
                  <div className="file-upload-btn clearfix">
                    <div className="file-upload">
                      <label htmlFor="upload" className="file-upload__label">
                        Upload Files
                      </label>
                      <input
                        id="upload"
                        className="file-upload__input"
                        type="file"
                        name="file-upload"
                      />
                    </div>
                    <p>Drag &amp; Drop Multiple files Here.</p>
                  </div>
                </div>
                <a className="button-ymp dispute-reply" href="#">
                  Reply
                </a>
              </form>
            </div>
            <div className="col-md-4">
              <div className="dispute-countdown clearfix">
                <h4>5 Days, 18 Hours</h4>
                <span className="respond-text">
                  Left for Protik46 to respond
                </span>
                <span className="arbitration">
                  Proceed to Arbitration ($5.00 Fee)
                </span>
                <span className="amount-disputed">
                  Total Amount Disputed: <span>$75</span>
                </span>
                <a className="show-milestones" href="#">
                  Show Milestones
                </a>
                <div className="clearfix" />
                <span className="enter-amount">
                  Enter an amount between $1 and $74 USD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dispute;
