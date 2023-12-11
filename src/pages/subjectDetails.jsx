import React, { useEffect, useState } from "react";
import Aya from "../component/pergrafes/aya";
import Defintion from "../component/pergrafes/defintion";
import Options from "../component/pergrafes/Options";
import Parts from "../component/pergrafes/parts";
import Words from "../component/pergrafes/Words";
import data from "../data.json";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const SubjectDetails = () => {
  let { id } = useParams();

  const [data1, setdata] = useState();
  let output = data.filter((e) => e?.id == id);

  useEffect(() => {
    setdata([output]);
    console.log("data1");
    console.log(data1);
    console.log(output);
  }, [data]);

  return (
    <div className="container page d-flex flex-column  align-items-center p-5">
      {/* {data1[0]?.map((e) => {
        return (
          <>
            <h1 className="p-4">{e.name}</h1>
            <div className="d-flex flex-column  align-items-center gap-3">
              <Aya dalel = {e?.content?.dalel} />
              <Words />
            </div>
            <div className="info w-100 pt-5 gap-5 d-flex  flex-column">
              <Defintion />
              <Parts />
              <Options />
            </div>
          </>
        );
      })} */}
    </div>
  );
};

export default SubjectDetails;
