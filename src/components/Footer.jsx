import React from "react";
import footerlogo from "../assets/image/pagelogo.svg";
import { Facebook, Insta, LInkedin, Twiter } from "./Icons";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" container ">
        <div className="text-center pb-3">
          <img src={footerlogo} alt="footerlogo" />
        </div>
        <ul className=" d-flex gap-4 justify-content-center m-0">
          <li>
            <a href="" className=" fw-normal fs-sm1 font-roboto text-gray">
              Home
            </a>
          </li>
          <li>
            <a href="" className=" fw-normal fs-sm1 font-roboto text-gray">
              Roadmap
            </a>
          </li>
          <li>
            <a href="" className=" fw-normal fs-sm1 font-roboto text-gray">
              Team
            </a>
          </li>
          <li>
            <a href="" className=" fw-normal fs-sm1 font-roboto text-gray">
              About Us
            </a>
          </li>
        </ul>
        <div className=" d-flex justify-content-center gap-3 pt-4 ">
          <Twiter />
          <Facebook />
          <Insta />
          <LInkedin />
        </div>
      </div>
      <div className=" overflow-hidden ">
        <hr className="footer-line" />
        <h2 className="fw-normal fs-sm font-roboto text-gray text-center">
          © 2024 248 Labs. All rights reserved
        </h2>
      </div>
    </div>
  );
};

export default Footer;
