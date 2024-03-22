import React from "react";

const Firstgame = () => {
  return (
    <div className="position-relative pt-sm-150 pt-50 overflow-x position-relative ">
      <div className="first-elipes d-none d-sm-block"></div>
      <div className=" container ">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="d-flex ">
              <button className="team_btn mb-3">DOERS OVER TALKERS</button>
            </div>
            <h2 className=" fw-bold fs-xl font-roboto text-white">
              Game <span className=" d-block ">First.Always.</span>
            </h2>
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <p className=" fw-medium font-roboto fs-md text-white">
              This is difficult
            </p>
            <p className=" fw-semibold fs-sm1 font-roboto text-gray">
              Web3 Games have a notoriously high barrier-to-entry for casual
              gamers who make up the vast majority of players. “Link your
              wallet” before gameplay is not just off-putting, it’s boring.
              We’re solving that with world-class storytelling, world-building,
              game design, art and sound. And fun.
            </p>
            <p className="fs-xxl fw-bold font-roboto text-lightblack text-name text-nowrap d-none d-lg-block">
              About Us
            </p>
          </div>
        </div>
        <div className="row pt-sm-100 pt-50">
          <div className="col-lg-4 col-md-6">
            <div className="first-card overflow-hidden ">
              <p className=" fw-bold font-roboto text-white fs-lg1">
                World Building
              </p>
              <p className=" fw-normal fs-sm1 font-roboto text-gray max-w-311">
                Every pixel, every character, every puzzle is a testament to the
                harmonious marriage of imagination and engineering precision
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="first-card overflow-hidden ">
              <p className=" fw-bold font-roboto text-white fs-lg1">
                Game Design
              </p>
              <p className=" fw-normal fs-sm1 font-roboto text-gray max-w-311">
                Every frame becomes a brushstroke, every motion a choreographed
                dance, contributing to a symphony of visuals that captivate
                players' senses and ignite their imagination.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="first-card overflow-hidden ">
              <p className=" fw-bold font-roboto text-white fs-lg1">
                Art and Sound
              </p>
              <p className=" fw-normal fs-sm1 font-roboto text-gray max-w-311">
                In the realm of game design, art and animation are the
                storytellers, whispering tales of wonder and excitement, etching
                memories that linger long after the controller is set down.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstgame;
