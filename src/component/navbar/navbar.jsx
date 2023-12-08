import React from "react";
import Sidebar from "./sidebar";
import logo from "../../images/logo.jpeg";

const Navbar = () => {
  return (
    <div className="navbar px-5" style={{height:"20vh"}}>
      <div className="logo">
        <img src={logo} alt="" style={{ width: "40%" }} />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
