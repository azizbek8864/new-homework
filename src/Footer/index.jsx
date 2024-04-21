import React from "react";
import icon1 from ".././img/icon-1.svg";
import icon2 from ".././img/icon-2.svg";
import icon3 from ".././img/icon-3.svg";

function Footer() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-white text-4xl">
          7+ years experience <br /> working
        </h1>
        <p className="text-slate-600">
          <span className="text-lime-700">
            Services <br />{" "}
          </span>
          Discover the best services I offer, designed to <br /> ensure the
          success of your project.
        </p>
      </div>
      <div className="flex gap-4 place-content-center">
        <div className="bg-slate-800 w-80 h-80 border-b-4 border-lime-500 ">
          <img src={icon1} alt="" />
          <h1 className="text-white text-3xl">Product design</h1>
          <p className="text-white">
            I offer innovative and attention-grabbing product design services.
            From initial ideation to implementation.
          </p>
        </div>
        <div className="bg-slate-800 w-80 h-80 border-b-4 border-lime-500 ">
          <img src={icon2} alt="" />
          <h1 className="text-white text-3xl">Frontend develop</h1>
          <p className="text-white">
            Specialize in responsive and interactive front-end development. With
            a deep understanding of HTML, CSS, and JS.
          </p>
        </div>
        <div className="bg-slate-800 w-80 h-80 border-b-4 border-lime-500 ">
          <img src={icon3} alt="" />
          <h1 className="text-white text-3xl">Brand strategy</h1>
          <p className="text-white">
            I help design strong and captivating brand strategies. Through
            thorough research and market analysis.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
