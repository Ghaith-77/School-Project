import React from "react";

const Options = () => {
  return (
    <div
      className="border shadow "
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(238, 238, 238)",
        padding: "20px",
        width: "30%",
      }}
    >
      <div className="d-flex flex-column align-items-start justify-content-center">
        <h4>اركان الصلاة : </h4>
        <ul style={{marginRight:"20px"}}>
          <li className="mt-2">النية</li>
          <li className="mt-2">النية</li>
          <li className="mt-2">النية</li>
        </ul>
      </div>
    </div>
  );
};

export default Options;
