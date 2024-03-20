import React from "react";
import building from "../assets/image/building-img.webp";
import { Music } from "./Icons";

const Inhabited = () => {
  return (
    <div className="bg-black py-sm-150 py-50 position-relative overflow-x">
      <div className=" container ">
        <p className=" fw-bold fs-xl font-roboto text-white text-center ">
          A rich, inhabited, and licensable world.
        </p>
        <div className="position-relative">
          <img
            className=" w-100 z-3 position-relative "
            src={building}
            alt="building"
          />
          <div className="inhabited-elipes d-none d-sm-block"></div>
          <div className=" music-elipes d-none d-sm-block">
            <Music />
          </div>
        </div>
        <p className=" fw-normal fs-sm1 font-roboto text-gray max-w-793 mx-auto text-center m-0 pt-4">
          {" "}
          Illustrated with original artwork and a cinematic score, destined not
          only for mobile and desktop gaming but also for film and television,
          events, merchandising, and partnerships.
        </p>
      </div>
    </div>
  );
};

export default Inhabited;
