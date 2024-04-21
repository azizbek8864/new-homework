import React from "react";

function Header() {
  return (
    <div className="flex justify-between container">
      <h1 className="text-white cursor-pointer">
        Alifreza<span className="text-lime-700">.</span>
      </h1>
      <table className="flex justify-between">
        <tr className="text-white cursor-pointer">
          <th className="p-4">Home</th>
          <th className="p-4">Services</th>
          <th className="p-4">Work</th>
          <th className="p-4">About us</th>
          <th className="p-4">Blog</th>
        </tr>
      </table>

      <button className=" text-white border-2 border-lime-500 h-10">
        Contact
      </button>
    </div>
  );
}

export default Header;
