import React from "react";

const Header = () => {
  return (
    <>
      <header
        className="index-nav"
        style={{ background: `rgba(0, 181, 188, 0.9)` }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-md-8 primary-menu order-sm-1 order-2">
              <nav className="navbar navbar-expand-lg">
                <div className="navbar-brand">
                  <a className="logo js-scroll-trigger" href="index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                  <a className="s-logo js-scroll-trigger" href="index.html">
                    <img src="img/logo2.png" alt="" />
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown menu-padding">
                      <a
                        className="nav-link active"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="index-guest.html" className="dropdown-item">
                            Home(Without Login)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="chatting.html" className="dropdown-item">
                            Live Chat
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown menu-padding">
                      <a
                        className="nav-link"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Find Work
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            href="project-accept.html"
                            className="dropdown-item"
                          >
                            Project Accept
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="project-award.html"
                            className="dropdown-item"
                          >
                            Project Award
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="bid-project.html" className="dropdown-item">
                            Project bidding
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="project-milestone.html"
                            className="dropdown-item"
                          >
                            Project Milestone
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="feature-job-offline-grid.html"
                            className="dropdown-item"
                          >
                            Feature Job Offline Grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="feature-job-offline-list.html"
                            className="dropdown-item"
                          >
                            Feature Job Offline List
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="feature-job-online.html"
                            className="dropdown-item"
                          >
                            Feature Job Online List
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="feature-job-online-with-sidebar.html"
                            className="dropdown-item"
                          >
                            Feature Job Online with Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="feature-job-online-with-map.html"
                            className="dropdown-item"
                          >
                            Feature Job Online with Map
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown menu-padding">
                      <a
                        className="nav-link"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Hire Freelancer
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a
                            href="post-job-offline.html"
                            className="dropdown-item"
                          >
                            Post Job Offline
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="post-job-online.html"
                            className="dropdown-item"
                          >
                            Post Job Online
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="browse-freelancer-grid.html"
                            className="dropdown-item"
                          >
                            Freelancer Grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="browse-freelancer-grid-with-sidebar.html"
                            className="dropdown-item"
                          >
                            Freelancer Grid with sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="browse-freelancer-list.html"
                            className="dropdown-item"
                          >
                            Freelancer List
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="browse-freelancer-list-with-sidebar.html"
                            className="dropdown-item"
                          >
                            Freelancer List with sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="dispute-page.html" className="dropdown-item">
                            Dispute
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown menu-padding">
                      <a
                        className="nav-link"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dashboard
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="dashboard.html" className="dropdown-item">
                            Dashboard One
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="dashboard-two.html"
                            className="dropdown-item"
                          >
                            Dashboard Two
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown menu-padding">
                      <a
                        className="nav-link"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="blog.html" className="dropdown-item">
                            Single Post
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-grid.html" className="dropdown-item">
                            Blog Grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="blog-grid-sidebar.html"
                            className="dropdown-item"
                          >
                            Blog-With Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="chatting.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 header-notification order-sm-2 order-1">
              <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav ml-auto right-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link bell"
                      href="#"
                      data-toggle="modal"
                      data-target="#notification"
                    >
                      <i className="far fa-bell" />
                      <span>25</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link message"
                      href="#"
                      data-toggle="modal"
                      data-target="#unread-messages"
                    >
                      <i className="far fa-envelope" />
                      <span>05</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown menu-padding dropdown-user">
                    <a
                      className="nav-link user-img"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="img/user.png" alt="" />
                      <span className="online" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="freelancer-profile-portfolio.html"
                          className="dropdown-item"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="chatting.html" className="dropdown-item">
                          Message
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="dropdown-item">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Modal Message */}
      <section className="modals">
        <div className="container">
          <div
            className="modal fade"
            id="unread-messages"
            role="dialog"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content unread-messages">
                <div className="modal-body">
                  <div className="chatting-page">
                    <div className="chat-freelancers">
                      <div className="users">
                        <ul>
                          <li className="active">
                            <div className="user-img">
                              <img src="img/chatting/user1.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="user-details">
                              <p>
                                <a href="#">Amazingsoftware</a>
                              </p>
                              <p>
                                <a href="#" className="project-name">
                                  Multi Vendor Website
                                </a>
                              </p>
                            </div>
                          </li>
                          <li className="active">
                            <div className="user-img">
                              <img src="img/chatting/user2.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="user-details">
                              <p>
                                <a href="#">John65</a>
                              </p>
                              <p>
                                <a href="#" className="project-name">
                                  Write Some Software
                                </a>
                              </p>
                            </div>
                          </li>
                          <li className="active">
                            <div className="user-img">
                              <img src="img/chatting/user3.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="user-details">
                              <p>
                                <a href="#">BabyGirl</a>
                              </p>
                              <p>
                                <a href="#" className="project-name">
                                  Create Powerpoint Templete
                                </a>
                              </p>
                            </div>
                          </li>
                          <li className="active">
                            <div className="user-img">
                              <img src="img/chatting/user3.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="user-details">
                              <p>
                                <a href="#">MarketingWizard</a>
                              </p>
                              <p>
                                <a href="#" className="project-name">
                                  Write code get google drive
                                </a>
                              </p>
                            </div>
                          </li>
                          <li className="active">
                            <div className="user-img">
                              <img src="img/chatting/user4.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="user-details">
                              <p>
                                <a href="#">Jenelia</a>
                              </p>
                              <p>
                                <a href="#" className="project-name">
                                  Google Write Code
                                </a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal Notification */}
      <section className="modals">
        <div className="container">
          <div
            className="modal fade"
            id="notification"
            role="dialog"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content unread-notification">
                <div className="modal-body">
                  <div className="chatting-page">
                    <div className="chat-freelancers">
                      <div className="users">
                        <ul>
                          <li>
                            <div className="user-img">
                              <img src="img/chatting/user1.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="notification-details">
                              <p className="notification-text">
                                <b>Rafsan</b> released a $300.00 USD milestone
                                payment for project <b>Website Designing</b>
                              </p>
                              <p className="notification-time">
                                About 20 minutes ago
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <img src="img/chatting/user2.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="notification-details">
                              <p className="notification-text">
                                <b>John Deo</b> released a $450.00 USD milestone
                                payment for project <b>Website Development</b>
                              </p>
                              <p className="notification-time">
                                About 40 minutes ago
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <img src="img/chatting/user3.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="notification-details">
                              <p className="notification-text">
                                <b>Denial Cook</b> released a $550.00 USD
                                milestone payment for project{" "}
                                <b>Graphic Design</b>
                              </p>
                              <p className="notification-time">
                                About 50 minutes ago
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <img src="img/chatting/user4.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="notification-details">
                              <p className="notification-text">
                                <b>Mikel</b> released a $700.00 USD milestone
                                payment for project <b>Logo Design</b>
                              </p>
                              <p className="notification-time">
                                About 1 hour ago
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <img src="img/chatting/user5.jpg" alt="" />
                              <span className="online-icon">
                                <i className="icofont icofont-ui-press" />
                              </span>
                            </div>
                            <div className="notification-details">
                              <p className="notification-text">
                                <b>Reek</b> released a $850.00 USD milestone
                                payment for project <b>Wordpress Development</b>
                              </p>
                              <p className="notification-time">
                                About 1 hour 20 minutes ago
                              </p>
                            </div>
                          </li>
                        </ul>
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

export default Header;
