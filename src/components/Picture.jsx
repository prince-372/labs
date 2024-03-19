import React from "react";
import ardacious from "../assets/image/ardacious-img.webp";
import twitch from "../assets/image/twitch-img.webp";
import gamescom from "../assets/image/gamescom-img.webp";
import greythorn from "../assets/image/greythorn-img.webp";

const Picture = () => {
  return (
    <div className="bg-black">
      <div className=" container py-100">
        <marquee>
          <div className=" d-flex gap-5 align-items-end justify-content-center">
            <span>
              <img src={ardacious} alt="ardacious" />
            </span>
            <span>
              <img src={twitch} alt="twitch" />
            </span>
            <span>
              <img src={gamescom} alt="gamescom" />
            </span>
            <span>
              <img src={greythorn} alt="greythorn" />
            </span>
            <span>
              <img src={twitch} alt="twitch" />
            </span>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Picture;
