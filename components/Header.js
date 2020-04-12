import React from "react";

import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <div className="bg-gray-200">
      <h1>
        <img
          src="/logo.png"
          alt="mydailystatus"
          className="h-24 py-4 mx-auto"
        />
      </h1>
      <NavBar />
    </div>
  );
};

export default Header;
