import React from "react";

function Project() {
  return (
    <div className="projectDiv container">
      <div className="row" id="row1">
        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img src={require("../../Images/CollectBay.png")} className="card-img-top" alt="collectbay" />
          <div className="card-body">
            <h5 className="card-title">CollectBay</h5>
            <a href="https://stormy-oasis-62272.herokuapp.com/" target="_blank" className="btn btn-primary">
              Demo
            </a>{" "}
            <a href="https://github.com/kieransnook/Collect_Bay" target="_blank" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>

        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/SpringBreakers.png")}
            className="card-img-top"
            alt="CarAmp"
          />
          <div className="card-body">
            <h5 className="card-title">Spring Breakers</h5>
            <a href="https://d3viii.github.io/springBreakers/" target="_blank" className="btn btn-primary">
              Demo
            </a>{" "}
            <a href="https://github.com/kieransnook/springBreakers" target="_blank" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="row" id="row1">
        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/FitnessTracker.png")}
            className="card-img-top"
            alt="fitness"
          />
          <div className="card-body">
            <h5 className="card-title">Fitness Tracker</h5>
            <a href="https://agile-crag-97711.herokuapp.com/?id=5ea849e3e8bf2d001792b4ec" target="_blank" className="btn btn-primary">
              Demo
            </a>{" "}
            <a href="https://github.com/kieransnook/17-HW" target="_blank" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>

        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/React-directory.png")}
            className="card-img-top"
            alt="react-Directory"
          />
          <div className="card-body">
            <h5 className="card-title">React Directory</h5>
            <a href="https://stormy-stream-84709.herokuapp.com/" target="_blank" className="btn btn-primary">
              Demo
            </a>{" "}
            <a href="https://github.com/kieransnook/19-hw" target="_blank" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="row" id="row1">
        <div className="card col-lg-4 col-12 mb-4 mx-4">
          <img
            src={require("../../Images/budgetapp.png")}
            className="card-img-top"
            alt="budget"
          />
          <div className="card-body">
            <h5 className="card-title">Budget Tracker</h5>
            <a href="https://protected-oasis-24217.herokuapp.com/" target="_blank" className="btn btn-primary">
              Demo
            </a>{" "}
            <a href="https://github.com/kieransnook/18-HW" target="_blank" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
