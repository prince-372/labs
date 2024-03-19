import React from "react";
import Commanbtn from "./Commanbtn";

const Gaming = () => {
  return (
    <div className="my-150">
      <div className=" d-flex justify-content-end align-items-center min-h-766">
        <div className=" container ">
          <div className="card-game ms-auto ">
            <h2 className=" fw-bold fs-xl font-roboto text-white pb-4">
              Level up your gaming experience
            </h2>
            <Commanbtn name="Play Unvilled" custm="py-3 px-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
