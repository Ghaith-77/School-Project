import React from "react";
import main_image from "../images/mainBackground.jpg";
import mainback_background from "../images/mainback-background.png";
const Main = () => {
  return (
    <div className="container page d-flex justify-content-between  align-items-center ">
      <div style={{ width: "50%" }} className=" p-5 ">
        <p>
          تمنسشاي سشي سشميت سشي تمسنش يسش ي شسيتسش ي تمنسشاي سشي سشميت سشي تمسنش
          يسش ي شسيتسش ي
        </p>
      </div>
      <div
        style={{ width: "50%" }}
      >
        <img width={"100%"} src={main_image} alt=""  />
     
      </div>
    </div>
  );
};

export default Main;
