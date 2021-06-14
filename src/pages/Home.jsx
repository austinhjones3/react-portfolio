import React from "react";
import "../styles/Home.css";
import { GiCoffeeCup } from "react-icons/gi";
import { palette } from "../palette";

export default function Home() {
  const coffee = {
    color: palette.hanBlue,
    fontSize: "150px",
    textAlign: "right",
  };

  // write media query
  return (
    <>
      <div className="row">
        <div className="col-1 col-md-3"> </div>
        <div className="col-10 col-md-6">
          <h3 className="home-messages mt-4" align="center">
            My greatest passion is working with others to solve problems
          </h3>
        </div>
        <div className="col-1 col-md-3"> </div>
      </div>
      <div className="row mt-3">
        <div align="center" className=" mx-auto ml-2 col-xs-4 col-sm-4 col-12">
          <GiCoffeeCup style={coffee} className="" />
        </div>
        <div align="center" className="mx-auto col-xs-8 col-sm-8 col-12">
          <p className="pitch mt-5">
            My name is Austin Jones, and I am a Full-Stack Developer. I strive to
            translate my customer service experience into my development career.
          </p>
        </div>
      </div>
    </>
  );
}
