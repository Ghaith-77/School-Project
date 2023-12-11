import React, { useEffect, useState } from "react";
import Aya from "../component/pergrafes/aya";
import Defintion from "../component/pergrafes/defintion";
import Options from "../component/pergrafes/Options";
import Parts from "../component/pergrafes/parts";
import Words from "../component/pergrafes/Words";
import data from "../data.json";
import { useParams } from "react-router-dom";

const SubjectDetails = () => {
  let { id } = useParams();
  let res = data.filter((e) => e.id === id);

  // console.log("id");
  // console.log(id);

  // console.log("data");
  // console.log(res);

  return (
    <div className="container page  text-center ">
      {res?.map((e) => {
        return (
          <>
            <h1 className="p-5  ">{e?.name}</h1>
            <div className=" ">
              <Aya dalel={e?.content?.dalel} />
            </div>
            <div className="info  pt-5 gap-5 d-flex flex-wrap  justify-content-center">
              <Words words={e?.content?.words} />
              <Defintion difind={e?.content?.difind} />
            </div>
            <div className="info  pt-5 gap-5 d-flex flex-wrap  justify-content-center">
              <Options options={e?.content?.options} />
            </div>
            <div className="info  p-5 gap-5 ">
              <Parts expline={e?.content?.expline} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SubjectDetails;
