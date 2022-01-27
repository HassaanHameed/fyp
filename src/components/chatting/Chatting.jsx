import React from "react";

const Chatting = () => {
  return (
    <>
      <section id="chatting-page">
        <div className="container">
          <div className="chatting-page">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 order-sm-1 order-2">
                <div className="chat-freelancers">
                  <div className="search">
                    <input type="text" placeholder="  Search.." />
                  </div>
                  <div className="menu">
                    <ul className="nav nav-tabs">
                      <li>
                        <a data-toggle="tab" href="#inbox" role="tablist">
                          Inbox
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#unread" role="tablist">
                          Unread
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#archived" role="tablist">
                          Archived
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#all" role="tablist">
                          All
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="inbox">
                      <div className="users">
                        <ul>
                          <li className="active">
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user1.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                Amazingsoftware
                              </a>
                              <a href="#" className="user-description">
                                Multi Vendor Website
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user2.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                John
                              </a>
                              <a href="#" className="user-description">
                                Write Some Software
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user3.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                              <span className="msg-alert">04</span>
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                BabyGirl
                              </a>
                              <a href="#" className="user-description">
                                Create Powerpoint Temp-
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user4.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                              <span className="msg-alert">01</span>
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                Tinno87
                              </a>
                              <a href="#" className="user-description">
                                Simple CSS for Wordpress
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user5.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                MarketingWizard
                              </a>
                              <a href="#" className="user-description">
                                Write code get google drive
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user6.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                Janelia
                              </a>
                              <a href="#" className="user-description">
                                Google Write Code
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user7.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                Fawad
                              </a>
                              <a href="#" className="user-description">
                                HTML Builder
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user8.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                CreativeMan
                              </a>
                              <a href="#" className="user-description">
                                CSS expert need
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user9.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                DevineDesign
                              </a>
                              <a href="#" className="user-description">
                                Woo Commerce
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user10.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                Kallen08
                              </a>
                              <a href="#" className="user-description">
                                Web Development
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user11.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                JannetLewis
                              </a>
                              <a href="#" className="user-description">
                                Design a logo
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user12.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                MasterHacker
                              </a>
                              <a href="#" className="user-description">
                                Build a Professional Website
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user13.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                James89
                              </a>
                              <a href="#" className="user-description">
                                Design a Logo
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user14.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                CreativeMan
                              </a>
                              <a href="#" className="user-description">
                                CSS expert need
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="unread">
                      <div className="users">
                        <ul>
                          <li className="active">
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user1.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                Amazingsoftware
                              </a>
                              <a href="#" className="user-description">
                                Multi Vendor Website
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user4.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                              <span className="msg-alert">01</span>
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                Tinno87
                              </a>
                              <a href="#" className="user-description">
                                Simple CSS for Wordpress
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user9.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                DevineDesign
                              </a>
                              <a href="#" className="user-description">
                                Woo Commerce
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user11.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                JannetLewis
                              </a>
                              <a href="#" className="user-description">
                                Design a logo
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user8.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                CreativeMan
                              </a>
                              <a href="#" className="user-description">
                                CSS expert need
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user14.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                CreativeMan
                              </a>
                              <a href="#" className="user-description">
                                CSS expert need
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="archived">
                      <div className="users">
                        <ul>
                          <li className="active">
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user3.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                              <span className="msg-alert">04</span>
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                BabyGirl
                              </a>
                              <a href="#" className="user-description">
                                Create Powerpoint Temp-
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user14.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                CreativeMan
                              </a>
                              <a href="#" className="user-description">
                                CSS expert need
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user13.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                James89
                              </a>
                              <a href="#" className="user-description">
                                Design a Logo
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user12.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                MasterHacker
                              </a>
                              <a href="#" className="user-description">
                                Build a Professional Website
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user9.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                DevineDesign
                              </a>
                              <a href="#" className="user-description">
                                Woo Commerce
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="all">
                      <div className="users">
                        <ul>
                          <li className="active">
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user4.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                              <span className="msg-alert">01</span>
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                Tinno87
                              </a>
                              <a href="#" className="user-description">
                                Simple CSS for Wordpress
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user3.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                              <span className="msg-alert">04</span>
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                BabyGirl
                              </a>
                              <a href="#" className="user-description">
                                Create Powerpoint Temp-
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user12.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                MasterHacker
                              </a>
                              <a href="#" className="user-description">
                                Build a Professional Website
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user14.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                CreativeMan
                              </a>
                              <a href="#" className="user-description">
                                CSS expert need
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user13.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                James89
                              </a>
                              <a href="#" className="user-description">
                                Design a Logo
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="user-img">
                              <a href="#">
                                <img src="img/chatting/user9.jpg" alt="" />
                              </a>
                              <span className="online-icon" />
                            </div>
                            <div className="user-details">
                              <a href="#" className="user-name">
                                DevineDesign
                              </a>
                              <a href="#" className="user-description">
                                Woo Commerce
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 order-sm-2 order-1">
                <div className="chat-panel">
                  <div className="chat-header">
                    <p className="loading">Loading earlier messages..</p>
                    <p className="time">2:14pm | 5 April 2019</p>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        data-original-title="Amazingsoftware"
                      >
                        <img src="img/chatting/user15.jpg" alt="" />
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Hello. What can i do for you?</p>
                        <time className="chat-time">12:00</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        data-original-title="James89"
                      >
                        <img src="img/chatting/user1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>
                          I am just looking around. Will you tell me something
                          about yourself? I am just looking around.
                        </p>
                        <time className="chat-time">12:05</time>
                      </div>
                      <div className="chat-content">
                        <p>Are you there? That time?</p>
                        <time className="chat-time">12:10</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        data-original-title="Amazingsoftware"
                      >
                        <img src="img/chatting/user15.jpg" alt="" />
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Where?</p>
                        <time className="chat-time">12:15</time>
                      </div>
                      <div className="chat-content">
                        <p>
                          OK, my name is Sasha Stain. I like singing, playing
                          basketball and so on Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Dignissimos quae
                          cupiditate accusantium rerum fugiat quam deleniti
                          beatae sapiente doloremque nam!
                        </p>
                        <time className="chat-time">12:17</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        data-original-title="James89"
                      >
                        <img src="img/chatting/user1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>You wait for notice.</p>
                        <time className="chat-time">12:20</time>
                      </div>
                      <div className="chat-content">
                        <p>Do you want to join the concert?</p>
                        <time className="chat-time">12:22</time>
                      </div>
                      <div className="chat-content">
                        <p>Ok?</p>
                        <time className="chat-time">12:24</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-avatar">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="right"
                        data-original-title="Amazingsoftware"
                      >
                        <img src="img/chatting/user15.jpg" alt="" />
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-content">
                        <p>Ok!</p>
                        <time className="chat-time">12:30</time>
                      </div>
                    </div>
                  </div>
                  <div className="chat-panel-footer">
                    <form>
                      <div className="input-group form-material">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your message"
                        />
                        <div className="input-group-btn">
                          <label htmlFor="input-file">
                            <span className="btn btn-pure btn-default icon md-file-send waves-effect waves-light waves-round" />
                            <input type="file" id="input-file" />
                          </label>
                          <button
                            type="button"
                            className="btn btn-pure btn-default icon message-send waves-effect waves-light waves-round"
                          />
                        </div>
                      </div>
                    </form>
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

export default Chatting;
