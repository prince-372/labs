import React from "react";
import Commanbtn from "./Commanbtn";

const Next = () => {
  return (
    <div className="py-100">
      <div className="bg-sec2-img min-h-592 d-flex align-items-center ">
        <div className=" container ">
          <div>
            <p className="fw-bold fs-xl font-roboto text-white text-center ">
              What’s Next
            </p>
            <p className=" fw-semibold fs-sm1 font-roboto text-white text-center ">
              92% of gamers have never even tried a Web3 game. We’re going to
              change that.
            </p>
            <p className=" fw-normal fs-sm1 font-roboto text-lightgray text-center ">
              {" "}
              248Labs The market is worth about a gazillion dollars, so whatever
              those stats were, that goes here.
            </p>
            <div className="text-center">
              <Commanbtn name="Try to keep up" custm="py-3 px-41" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;
