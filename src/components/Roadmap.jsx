import React from "react";
import { Roadmaplogo, Stars } from "./Icons";
import Indian from "../assets/image/indian-flag.png";
import England from "../assets/image/ingland-flag.png";
import America from "../assets/image/usa-flag.png";
const Roadmap = () => {
  return (
    <div id="roadmap">
      <div id="roadmap" className=" mt_2  overflow-x position-relative  ">
        <div className="roadmap-elipes d-none d-sm-block"></div>
        <p className="fs-xxl text-lightblack fw-bold font-roboto text-name3 d-none d-sm-block">
          Roadmap
        </p>
        <div className="container pt-2 ">
          <div className="d-flex align-items-center justify-content-center">
            <button className="team_btn ">ROAD MAP</button>
          </div>
          <h2 className=" fw-bold text-white text-center mx-auto pb-5 mb-5 fs-xl">
            Milestones and markers
          </h2>
          <div className="timeline position-relative pt-5">
            <span className="position-absolute time_logo">
              <Roadmaplogo />{" "}
            </span>
            <div className="container right">
              <div className="content position-relative overflow-hidden ">
                <h2 className="fs-lg fw-normal CEO_clr lh_28 text-center">
                  Oct 2014
                </h2>
                <p className="fs-lg lh_28 fw-normal text-gray text-center">
                  Hired our first employee
                </p>
                <span className="elipes-blur d-none d-sm-block"></span>
              </div>
            </div>
            <div className="container left ">
              <div className="content overflow-hidden">
                <h2 className="fs-lg fw-normal CEO_clr lh_28 text-center font-roboto">
                  Nov 2014
                </h2>
                <p className="fs-lg lh_28 fw-normal text-gray text-center font-roboto">
                  Launched Bitcoin wallet
                </p>
                <span className="elipes-blur d-none d-sm-block"></span>
              </div>
            </div>
            <div className="container right">
              <div className="content overflow-hidden">
                <h2 className="fs-lg fw-normal CEO_clr lh_28 text-center font-roboto">
                  {" "}
                  Oct 2015
                </h2>
                <p className="fs-lg lh_28 fw-normal text-gray text-center font-roboto">
                  1st prize by Bit angels at Coin Agenda, Las Vegas
                </p>
                <span className="elipes-blur d-none d-sm-block"></span>
              </div>
            </div>
            <div className="container left">
              <div className="content overflow-hidden">
                <h2 className="fs-lg fw-normal CEO_clr lh_28 text-center font-roboto">
                  Jan 2020
                </h2>
                <p className="fs-lg lh_28 fw-normal text-gray text-center d-flex align-items-center justify-content-center font-roboto">
                  launch On <img className="px-3" src={Indian} alt="India" />{" "}
                  <img className="pe-3" src={England} alt="England" />{" "}
                  <img className="pe-3" src={America} alt="America" />
                </p>
                <span className="elipes-blur d-block d-sm-none"></span>
              </div>
            </div>
            <div className="container right">
              <div className="content overflow-hidden">
                <h2 className="fs-lg fw-normal CEO_clr lh_28 text-center font-roboto">
                  Jan 2022
                </h2>
                <p className="fs-lg lh_28 fw-normal text-gray text-center font-roboto">
                  Trusted by 10 Millions+ Users
                </p>
                <span className="elipes-blur d-none d-sm-block"></span>
                <div className="text-center">
                  <Stars />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
