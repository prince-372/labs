import React from "react";
import elipes from "../assets/image/header-elipes.png";

const Header = () => {
  return (
    <div
      id="home"
      className=" container min-h-header justify-content-center d-flex align-items-center position-relative "
    >
      <img
        className=" header-elipes d-none d-sm-block"
        src={elipes}
        alt="elipes"
      />
      <div className=" d-flex flex-column justify-content-center ">
        <h1 className=" fw-bold fs-xl1 font-roboto text-white max-w-873  mx-auto text-center">
          Changing the way games are made
        </h1>
        <h2 className=" fw-normal fs-lg font-roboto text-center text-white">
          Redefining the future of play
        </h2>
      </div>
    </div>
  );
};

export default Header;
