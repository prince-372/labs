import React from "react";
import building from "../assets/image/building-img.webp";

const Inhabited = () => {
  return (
    <div className="bg-black py-150">
      <div className=" container ">
        <p className=" fw-bold fs-xl font-roboto text-white text-center ">
          A rich, inhabited, and licensable world.
        </p>
        <img className=" w-100 " src={building} alt="building" />
        <p className=" fw-normal fs-sm1 font-roboto text-gray max-w-793 mx-auto text-center m-0 ">
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
