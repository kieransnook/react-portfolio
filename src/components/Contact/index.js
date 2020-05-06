import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="contactDiv">
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-4">
          <a
            href="mailto:kieransnook35@gmail.com"
            class="text-dark text-decoration-none"
          >
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block"
            >
              Email: kieransnook35@gmail.com
            </button>
          </a>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-4">
          <a
            href="https://www.linkedin.com/in/kieran-snook-47b679106/"
            class="text-dark text-decoration-none"
          >
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block"
            >
              View my Linkedin profile
            </button>
          </a>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-2">
          <a href="..." class="text-dark text-decoration-none">
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block"
            >
              Phone: (770)654-9847
            </button>
          </a>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-2">
          <a
            href="https://github.com/kieransnook"
            class="text-dark text-decoration-none"
          >
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block"
            >
              View my GitHub profile
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
