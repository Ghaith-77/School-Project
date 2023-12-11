import React from "react";

const Words = () => {
  return (
    <div
      className="border shadow "
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(238, 238, 238)",
        padding: "20px",
        width: "50%",
      }}
    >
      <div className="d-flex align-content-center ">
        <h4 style={{ marginLeft: "5px", color: "green" }}>(الصلاة):</h4>
        <p style={{fontSize:"20px"}}>الدعاء</p>
      </div>
    </div>
  );
};

export default Words;
