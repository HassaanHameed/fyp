import React from "react";

const PostJobOnline = () => {
  return (
    <>
      <section id="post-project">
        <div className="container">
          <div className="post-project">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <form className="submit-info">
                  <div className="need-info">
                    <p className="info-title">What do you need to get done?</p>
                    <p className="tooltip-icon">
                      <a href="#">
                        <i className="fas fa-question-circle" />
                      </a>
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. I need a professional website design"
                    />
                  </div>
                  <div className="pick-category">
                    <p className="info-title">Pick Category</p>
                    <ul>
                      <li>
                        <div className="form-group select-work-type">
                          <select className="custom-select">
                            <option value>Graphic Design</option>
                            <option value={1}>Web Design</option>
                            <option value={2}>Web Development</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        <div className="form-group select-location">
                          <input type="text" placeholder="Location" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="get-description">
                    <p className="info-title">Description</p>
                    <p className="tooltip-icon">
                      <a href="#" data-toggle="tooltip">
                        <i className="fas fa-question-circle" />
                      </a>
                    </p>
                    <textarea
                      className="form-control"
                      cols={30}
                      rows={10}
                      placeholder="Provide a more detailed description to help you get better proposals"
                      defaultValue={""}
                    />
                  </div>
                  <div className="file-upload-btn clearfix">
                    <div className="file-upload">
                      <label htmlFor="upload" className="file-upload__label">
                        <i className="fas fa-plus" /> Upload Files
                      </label>
                      <input
                        id="upload"
                        className="file-upload__input"
                        type="file"
                        name="file-upload"
                      />
                    </div>
                    <p>
                      Drag &amp; Drop any images or documents that might be
                      helpful in explaining your project brief here.
                    </p>
                  </div>
                  <div className="get-job-buttons">
                    <div className="row">
                      <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="work-type">
                          <p className="info-title">Work Type</p>
                          <br />
                          <div className="form-group select-work-type">
                            <select className="custom-select">
                              <option value>Fixed Price</option>
                              <option value={1}>Hourly</option>
                              <option value={2}>Contest</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-2 col-lg-2">
                        <p className="info-title">Currency</p>
                        <p className="tooltip-icon">
                          <a href="#">
                            <i className="fas fa-question-circle" />
                          </a>
                        </p>
                        <div className="form-group select-currency">
                          <select className="custom-select">
                            <option value>USD</option>
                            <option value={1}>CAD</option>
                            <option value={2}>AUD</option>
                            <option value={3}>BDT</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7 col-lg-7">
                        <p className="info-title">Budget</p>
                        <p className="tooltip-icon">
                          <a href="#">
                            <i className="fas fa-question-circle" />
                          </a>
                        </p>
                        <div className="form-group big-budget">
                          <select className="custom-select">
                            <option value>
                              Very Large project ($10000-20000 USD)
                            </option>
                            <option value={1}>
                              Very Large project ($20000-30000 USD)
                            </option>
                            <option value={2}>
                              Very Large project ($30000-40000 USD)
                            </option>
                            <option value={3}>
                              Very Large project ($40000-50000 USD)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="experience-level">
                    <p className="info-title">Experience Level</p>
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-4 xpbox">
                        <input
                          className="form-control"
                          name="optradio"
                          id="entry"
                          type="radio"
                          defaultValue={1}
                        />
                        <label htmlFor="entry">
                          <div className="header">Entry</div>
                          <div className="body">
                            Freelancers with lower rates and less experience
                            <span className="symbols">$</span>
                          </div>
                        </label>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 xpbox">
                        <input
                          className="form-control"
                          name="optradio"
                          id="intermediate"
                          type="radio"
                          defaultValue={2}
                        />
                        <label htmlFor="intermediate">
                          <div className="header">Intermediate</div>
                          <div className="body">
                            Freelancers with lower rates and less experience
                            <span className="symbols">$$</span>
                          </div>
                        </label>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 xpbox">
                        <input
                          className="form-control"
                          name="optradio"
                          id="expert"
                          type="radio"
                          defaultValue={3}
                        />
                        <label htmlFor="expert">
                          <div className="header">Expert</div>
                          <div className="body">
                            Freelancers with lower rates and less experience
                            <span className="symbols">$$$</span>
                          </div>
                        </label>
                      </div>
                      <div className="post-job-btn">
                        <a href="#" className="button-ymp">
                          Post job
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostJobOnline;
