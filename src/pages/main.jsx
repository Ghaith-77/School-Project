import React, { useState } from "react";
import main_image from "../images/mainBackground.jpg";
import Mainman from "../images/mainMan.jpeg";
import data from "../data.json";
import { useEffect } from "react";
const Main = () => {
  // console.log(data);
  // console.log(data[0].id);

  return (
    <div className="container page d-flex justify-content-between  align-items-center ">
      <div style={{ width: "50%" }} className="main_text p-5 ">
        <img
          src={Mainman}
          alt=""
          style={{
            position: "fixed",
            top: "23%",
            right: "-12% ",
            bottom: 0,
            height: "350px",
          }}
        />
        <div style={{ marginRight: "60px" }}>
          <h3>السلام عليكم </h3>
          <p>
            إن العلم الشرعي من اهم العلوم فتم تجميع وتلخيص جميع ابحاث الكتب
            الشرعية
          </p>
        </div>
      </div>
      <div style={{ width: "50%", height: "30%", boxShadow: "0 0px 8px 1px " }}>
        <img width={"100%"} height={"100%"} src={main_image} alt="" />
      </div>
    </div>
  );
};

export default Main;
