import React from "react";
import Aya from "../component/pergrafes/aya";
import Defintion from "../component/pergrafes/defintion";
import Options from "../component/pergrafes/Options";
import Parts from "../component/pergrafes/parts";
import Words from "../component/pergrafes/Words";

const SubjectDetails = () => {
  return (
    <div className="container page d-flex flex-column  align-items-center p-5">
      <h1 className="p-4">الصلاة</h1>
      <div className="d-flex flex-column  align-items-center gap-3">
        <Aya />
        <Words />
      </div>
      <div className="info w-100 pt-5 gap-5 d-flex  flex-column">
        <Defintion />
        <Parts />
        <Options />

      </div>
    </div>
  );
};

export default SubjectDetails;
