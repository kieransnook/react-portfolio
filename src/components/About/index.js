import React from "react";
import "../About/style.css";
// import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="row">
        <div className="col-12"></div>
      </div>
      <div className="card mb-4">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              
              alt="Me"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" id="about">
                About me
              </h5>
              <p className="card-text1" id="sub1">
                My name is Kieran Snook. I am from Atlanta and
                currently living in Atlanta, Georgia. I am a 
                 Front-end developer.
              </p>
              <p className="card-text2" id="sub2">
                I am currently enrolled in Georgia Techs
                Full-stack development bootcamp. I am very familiar and
                experienced with Web application frameworks and have worked with
                a good number of successful development teams. Values I hold
                high are reliability, authenticity, loyalty and helping others
                achieve their success. Which is why I enjoy to see a project
                through to the end. Not only do I believe in creating beautiful
                software but also making it reliable and user friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
      </div>
    </>
  );
}

export default About;