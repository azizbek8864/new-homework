import React from "react";
import loader from ".././img/loader.svg";

function Main() {
  return (
    <div className="container">
      <h2 className="text-lime-600 text-2xl">Hello, I’m Alif Reza</h2>

      <h1 className="text-white text-6xl">Product Designer</h1>
      <p className="text-slate-500 mb-5">
        I’m from Singapore and I have been working as a Product Designer for
        <br />
        more than 7 years. I’ve worked for a Hanziree company Pabloo as a <br />
        Product Designer and Front-end Developer for 3 years.
      </p>

      <button className=" bg-lime-800 w-20 h-10 mb-10">Email Me</button>
      <button className="ml-20 text-white">
        <img className="" src={loader} alt="loader" /> Download CV
      </button>
    </div>
  );
}

export default Main;
