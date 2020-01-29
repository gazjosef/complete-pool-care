import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 py-5">

            <h1>Contact form Tutorial from <a href="http://bootstrapious.com">Bootstrapious.com</a></h1>

            <p className="lead">This is a demo for our tutorial dedicated to crafting working Bootstrap contact form with PHP and AJAX background.</p>

            {/* <!-- We're going to place the form here in the next step --> */}
            <form></form> 
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
