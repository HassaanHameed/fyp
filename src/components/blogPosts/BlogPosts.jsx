import React from "react";

const BlogPosts = () => {
  return (
    <>
      <section id="blog-posts">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12" />
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="titles">
                <h2 className="titles__main-title">Blog Posts</h2>
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
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-posts">
                <div className="blog-image">
                  <img src="img/blog/blog-1.jpg" alt="" />
                </div>
                <div className="blog-details">
                  <ul className="post-meta">
                    <li>Nov. 05. 2019</li>
                    <li>
                      <a href="#" className="tags">
                        Fashion
                      </a>
                    </li>
                  </ul>
                  <div className="blog-title">
                    <a href="#">Style Icons Menswear Muses for Winter</a>
                  </div>
                  <div className="text">
                    <p>
                      We always cue up music when we’re entertaining. But when
                      it’s just us puttering around the kitchen
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-posts">
                <div className="blog-image">
                  <img src="img/blog/blog-2.jpg" alt="" />
                </div>
                <div className="blog-details">
                  <ul className="post-meta">
                    <li>April. 08. 2019</li>
                    <li>
                      <a href="#" className="tags">
                        Music
                      </a>
                    </li>
                  </ul>
                  <div className="blog-title">
                    <a href="#">Athena Calderone’s Tasting Notes</a>
                  </div>
                  <div className="text">
                    <p>
                      How to install the app with in 2 munites. Most easiest way
                      ever. How to install the app with.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-posts">
                <div className="blog-image">
                  <img src="img/blog/blog-3.jpg" alt="" />
                </div>
                <div className="blog-details">
                  <ul className="post-meta">
                    <li>May.05.2019</li>
                    <li>
                      <a href="#" className="tags">
                        Fashion
                      </a>
                    </li>
                  </ul>
                  <div className="blog-title">
                    <a href="#">Have you Heard? Top Tunes of 2014</a>
                  </div>
                  <div className="text">
                    <p>
                      If you’ve ever visited an Anthropologie store, you’re
                      likely familiar with the work of Katie
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="load-button">
                <a href="#" className="load-btn">
                  View All Blogs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
