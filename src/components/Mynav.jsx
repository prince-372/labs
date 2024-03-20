import React, { useState } from "react";
import Commanbtn from "./Commanbtn";
import logo from "../assets/image/pagelogo.svg";

const Mynav = () => {
  const [first, setfirst] = useState(false);
  function MobileView() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  {
    first
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="py-4 ">
      <div className="container">
        <div className=" d-flex align-items-center justify-content-between ">
          <div className=" d-flex align-items-end cursor-pointer ">
            <img src={logo} alt="logo" />
          </div>
          <ul
            className={`${
              first ? "left-0" : "left-100"
            } navopen d-flex align-items-center justify-content-center gap-4 `}
          >
            <li onClick={() => setfirst(false)}>
              <a
                className=" text-lightgray font-roboto fw-normal fs-sm1 f-line position-relative "
                href="#aboutus"
              >
                About Us
              </a>
            </li>
            <li onClick={() => setfirst(false)}>
              <a
                className=" text-lightgray font-roboto fw-normal fs-sm1 f-line position-relative "
                href="#team"
              >
                Our Team
              </a>
            </li>
            <li onClick={() => setfirst(false)}>
              <a
                className=" text-lightgray font-roboto fw-normal fs-sm1 f-line position-relative "
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a href="">
                <Commanbtn name="Contact Us" custm="py-3 px-32" />
              </a>
            </li>
          </ul>
          <label className=" d-lg-none " onClick={MobileView}>
            {first ? (
              <div className=" z-3 position-relative ">
                <span className=" cross1 d-flex bg-white position-absolute"></span>
                <span className=" cross2 d-flex bg-white position-absolute"></span>
              </div>
            ) : (
              <div className=" z-3 position-relative ">
                <span className=" line-c d-flex  bg-white "></span>
                <span className=" line-c d-flex bg-white my-1 "></span>
                <span className=" line-c d-flex bg-white h-[3px] "></span>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Mynav;
