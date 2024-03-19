import React from "react";
import pagelogo from "../assets/image/pagelogo.svg";
import Commanbtn from "./Commanbtn";

const Mynav = () => {
  return (
    <div className=" container pt-4 ">
      <nav className=" d-flex  justify-content-between align-items-center ">
        <img src={pagelogo} alt="pagelogo" />
        <ul className=" d-flex align-items-center gap-4 ">
          <li>
            <a href="" className="font-roboto fs-sm1 fw-normal text-lightgray ">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="font-roboto fs-sm1 fw-normal text-lightgray">
              {" "}
              Our Team
            </a>
          </li>
          <li>
            <a href="" className="font-roboto fs-sm1 fw-normal text-lightgray">
              Roadmap
            </a>
          </li>
          <li>
            <Commanbtn name="Contact Us" custm="py-12 px-32" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Mynav;
