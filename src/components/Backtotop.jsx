import React from "react";
import backtotop from "../assets/image/up-arrow.png";

function Backtotop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      document.getElementById("up").style.display = "flex";
    } else {
      document.getElementById("up").style.display = "none";
    }
  });

  function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <img id="up" onClick={up} src={backtotop} alt="back to top icon" />
    </>
  );
}

export default Backtotop;
