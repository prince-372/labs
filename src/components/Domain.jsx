import React from "react";
import spaceship from "../assets/image/spaceship-img.webp";
import Commanbtn from "./Commanbtn";

const Domain = () => {
  return (
    <div className=" bg-black">
      <div className=" container py-150">
        <img className=" w-100 " src={spaceship} alt="spaceship" />
        <div className="row pt-4 ">
          <div className="col-md-4 col-sm-6">
            <button className="dominbtn py-3 px-32 font-roboto fs-md">name@domain.com</button>
            <Commanbtn name="MakeYourMove" custm="py-3 px-5" />
          </div>
          <div className="col-md-8 col-sm-6">
            <p className=" fw-normal fs-sm1 font-roboto text-lightgray ">
              Unveiled is a unique{" "}
              <span className=" fw-semibold text-white font-roboto">
                collectible card game
              </span>{" "}
              in which you gain fervour for your ventures, spending it on
              mercenaries, spies, automata, and influence.{" "}
            </p>
            <p className=" fw-normal fs-sm1 font-roboto text-lightgray">
              You play{" "}
              <span className="fw-semibold text-white font-roboto">
                a rogue merchant trader
              </span>{" "}
              allied to a noble house, alongside your{" "}
              <span className="fw-semibold text-white font-roboto">
                cryptid-humanoid companions
              </span>{" "}
              in a game of ambition and alliance, deception and miracles,
              manipulation and annihilation. Bells chime in the harbour, and
              markets are opening. Guards have swept the streets of the more
              obvious dangers.
            </p>
            <p className="fw-semibold text-white fs-sm1 font-roboto">
              What’s your next move?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
