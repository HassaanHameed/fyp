import React from "react";

const FreelanceDetails = () => {
  return (
    <>
      <section id="dashboard-map">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="overview">
                <div className="stat-icon icon-color-one">
                  <i className="fas fa-chart-pie" />
                </div>
                <div className="stat-text">
                  <p>Total Earning</p>
                  <span>$10955</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="overview">
                <div className="stat-icon icon-color-two">
                  <i className="fas fa-chart-line" />
                </div>
                <div className="stat-text">
                  <p>Project Completed</p>
                  <span>29</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="overview">
                <div className="stat-icon icon-color-three">
                  <i className="fas fa-chart-bar" />
                </div>
                <div className="stat-text">
                  <p>Pending</p>
                  <span>06</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="overview">
                <div className="stat-icon icon-color-four">
                  <i className="fas fa-chart-area" />
                </div>
                <div className="stat-text">
                  <p>Bid Remaining</p>
                  <span>+89</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="chart">
                <div className="chart-info">
                  <h4 className="title">Earnings</h4>
                  <ul className="nav-tabs chart-nav" id="myTab" role="tablist">
                    <li>
                      <a
                        className="nav-item active"
                        id="nav-Day-tab"
                        data-toggle="tab"
                        href="#nav-Day"
                        role="tab"
                        aria-controls="nav-Day"
                        aria-selected="true"
                      >
                        Day
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-item"
                        id="nav-Week-tab"
                        data-toggle="tab"
                        href="#nav-Week"
                        role="tab"
                        aria-controls="nav-Week"
                        aria-selected="true"
                      >
                        Week
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-item"
                        id="nav-Month-tab"
                        data-toggle="tab"
                        href="#nav-Month"
                        role="tab"
                        aria-controls="nav-Month"
                        aria-selected="true"
                      >
                        Month
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="nav-Day"
                    role="tabpanel"
                    aria-labelledby="nav-Day-tab"
                  >
                    <canvas id="day" />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-Week"
                    role="tabpanel"
                    aria-labelledby="nav-Week-tab"
                  >
                    <canvas id="week" />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-Month"
                    role="tabpanel"
                    aria-labelledby="nav-Month-tab"
                  >
                    <canvas id="month" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="user-transections">
                <div className="transection-header">
                  <div className="title-and-meta">
                    <h5 className="title">User Transection</h5>
                    <ul className="meta">
                      <li className="active">
                        <i className="fas fa-sync-alt" />
                      </li>
                      <li>
                        <i className="fas fa-cloud-download-alt" />
                      </li>
                      <li>
                        <i className="fas fa-wrench" />
                      </li>
                    </ul>
                  </div>
                  <div className="search-area">
                    <input type="text" placeholder="Search User Transections" />
                  </div>
                </div>
                <div className="transection-body">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Type</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="user-image">
                            <img src="img/user/user1.jpg" alt="" />
                          </div>
                          <div className="details">
                            <h6 className="name">Ryan Flores</h6>
                            <span className="mail">ceo@hudai.com</span>
                          </div>
                        </td>
                        <td>
                          <span className="success" />
                          <div className="trans-meta">
                            <p className="type">Purchased success</p>
                            <span className="trans-id">TRANSID: 12140003</span>
                          </div>
                        </td>
                        <td>
                          <p className="trans-date">May 25, 2018 8:34am</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="user-image">
                            <img src="img/user/user2.jpg" alt="" />
                          </div>
                          <div className="details">
                            <h6 className="name">Jimmy Jhon</h6>
                            <span className="mail">jhon@gmail.com</span>
                          </div>
                        </td>
                        <td>
                          <span className="pending" />
                          <div className="trans-meta">
                            <p className="type">Purchased Pending</p>
                          </div>
                        </td>
                        <td>
                          <p className="trans-date">Apr 28, 2018 11:34am</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="user-image">
                            <img src="img/user/user3.jpg" alt="" />
                          </div>
                          <div className="details">
                            <h6 className="name">Domnic Bro</h6>
                            <span className="mail">seo@yeshope.com</span>
                          </div>
                        </td>
                        <td>
                          <span className="success" />
                          <div className="trans-meta">
                            <p className="type">Purchased success</p>
                            <span className="trans-id">TRANSID: 12140003</span>
                          </div>
                        </td>
                        <td>
                          <p className="trans-date">Feb 18, 2018 6:54am</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="user-image">
                            <img src="img/user/user4.jpg" alt="" />
                          </div>
                          <div className="details">
                            <h6 className="name">John Smith</h6>
                            <span className="mail">help@support.com</span>
                          </div>
                        </td>
                        <td>
                          <span className="success" />
                          <div className="trans-meta">
                            <p className="type">Purchased success</p>
                            <span className="trans-id">TRANSID: 12140003</span>
                          </div>
                        </td>
                        <td>
                          <p className="trans-date">Feb 17, 2018 8:13am</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="user-image">
                            <img src="img/user/user5.jpg" alt="" />
                          </div>
                          <div className="details">
                            <h6 className="name">John Doe</h6>
                            <span className="mail">ceo@huday.com</span>
                          </div>
                        </td>
                        <td>
                          <span className="cancle" />
                          <div className="trans-meta">
                            <p className="type">Cancelled</p>
                          </div>
                        </td>
                        <td>
                          <p className="trans-date">Jan 14, 2018 3:34am</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="user-image">
                            <img src="img/user/user6.jpg" alt="" />
                          </div>
                          <div className="details">
                            <h6 className="name">Rafsan Jany</h6>
                            <span className="mail">cto@theme.com</span>
                          </div>
                        </td>
                        <td>
                          <span className="success" />
                          <div className="trans-meta">
                            <p className="type">Purchased success</p>
                            <span className="trans-id">TRANSID: 12140003</span>
                          </div>
                        </td>
                        <td>
                          <p className="trans-date">Jan 01, 2018 10:27pm</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="user-transections product-transection">
                <div className="transection-header">
                  <div className="title-and-meta">
                    <h5 className="title">Products</h5>
                    <ul className="meta">
                      <li className="active">
                        <i className="fas fa-sync-alt" />
                      </li>
                      <li>
                        <i className="fas fa-cloud-download-alt" />
                      </li>
                      <li>
                        <i className="fas fa-wrench" />
                      </li>
                    </ul>
                  </div>
                  <div className="search-area">
                    <input type="text" placeholder="Search User Transections" />
                  </div>
                </div>
                <div className="transection-body products">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>States</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>iPhoneX</p>
                        </td>
                        <td>
                          <div className="complete">
                            <p>Complete</p>
                          </div>
                        </td>
                        <td>
                          <div className="time">
                            <p>Today</p>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <p>$1060.00</p>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="edit">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Samsung S9</p>
                        </td>
                        <td>
                          <div className="pendings">
                            <p>Pending...</p>
                          </div>
                        </td>
                        <td>
                          <div className="time">
                            <p>Today</p>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <p>$540.00</p>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="edit">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Macbook Pro 15”</p>
                        </td>
                        <td>
                          <div className="pendings">
                            <p>Pending...</p>
                          </div>
                        </td>
                        <td>
                          <div className="time">
                            <p>Today</p>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <p>$1960.00</p>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="edit">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>iPad Pro 9.7”</p>
                        </td>
                        <td>
                          <div className="complete">
                            <p>Complete</p>
                          </div>
                        </td>
                        <td>
                          <div className="time">
                            <p>Today</p>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <p>$750.00</p>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="edit">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>iPhoneX</p>
                        </td>
                        <td>
                          <div className="complete">
                            <p>Complete</p>
                          </div>
                        </td>
                        <td>
                          <div className="time">
                            <p>Today</p>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <p>$1060.00</p>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="edit">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Nvidia GTX 1080 Ti</p>
                        </td>
                        <td>
                          <div className="pendings">
                            <p>Pending...</p>
                          </div>
                        </td>
                        <td>
                          <div className="time">
                            <p>Today</p>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <p>$5060.00</p>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="edit">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>iPhoneX</p>
                        </td>
                        <td>
                          <div className="complete">
                            <p>Complete</p>
                          </div>
                        </td>
                        <td>
                          <div className="time">
                            <p>Today</p>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <p>$1060.00</p>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="edit">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Xbox One X</p>
                        </td>
                        <td>
                          <div className="cancel">
                            <p>Cancelled</p>
                          </div>
                        </td>
                        <td>
                          <div className="time">
                            <p>Today</p>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <p>$1060.00</p>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="edit">
                            <i className="fas fa-pencil-alt" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="milestone-wrapper">
                <div className="milestone">
                  <h3>Milestones</h3>
                  <a className="float add-milestone" href="#">
                    Request Milestone
                  </a>
                </div>
              </div>
              <div className="db-table table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Amount</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$300.00 USD</td>
                      <td>Makeup Design</td>
                      <td>In Progress</td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Ask Release
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Ask Release
                            </a>
                            <a className="dropdown-item" href="#">
                              Cancel
                            </a>
                            <a className="dropdown-item" href="#">
                              Dispute
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>$200.00 USD</td>
                      <td>PSD to HTML</td>
                      <td>In Progress</td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Ask Release
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Ask Release
                            </a>
                            <a className="dropdown-item" href="#">
                              Cancel
                            </a>
                            <a className="dropdown-item" href="#">
                              Dispute
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>$200.00 USD</td>
                      <td>Responsive</td>
                      <td>In Progress</td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Ask Release
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Ask Release
                            </a>
                            <a className="dropdown-item" href="#">
                              Cancel
                            </a>
                            <a className="dropdown-item" href="#">
                              Dispute
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>$250.00 USD</td>
                      <td>Wordpress Conversion</td>
                      <td>In Progress</td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Ask Release
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Ask Release
                            </a>
                            <a className="dropdown-item" href="#">
                              Cancel
                            </a>
                            <a className="dropdown-item" href="#">
                              Dispute
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>$350.00 USD</td>
                      <td>Final QA</td>
                      <td>In Progress</td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Ask Release
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Ask Release
                            </a>
                            <a className="dropdown-item" href="#">
                              Cancel
                            </a>
                            <a className="dropdown-item" href="#">
                              Dispute
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Total: 1300 USD</td>
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreelanceDetails;
