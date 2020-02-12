import React, { Fragment } from "react";
import "./about.css";

const About = () => {
  return (
    <Fragment>
      <section className="testimonials">
        <div className="container">
          <h1>Testimonials</h1>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="profile">
                <img src="" alt="" className="user" />
                <blockquote>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae accusamus sequi dolorum quo, numquam dignissimos?"
                </blockquote>
                <h3>
                  John Smith <span>Co-founder</span>
                </h3>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="profile">
                <img src="" alt="" className="user" />
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae accusamus sequi dolorum quo, numquam dignissimos?"
                </blockquote>
                <h3>
                  John Smith <span>Co-founder</span>
                </h3>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="profile">
                <img src="" alt="" className="user" />
                <blockquote>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae accusamus sequi dolorum quo, numquam dignissimos?"
                </blockquote>
                <h3>
                  John Smith <span>Co-founder</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
