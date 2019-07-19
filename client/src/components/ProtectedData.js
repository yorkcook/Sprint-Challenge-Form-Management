import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

const ProtectedData = () => {
  const [protectedData, setProtectedData] = useState([]);
  console.log("data", protectedData);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        setProtectedData(res.data);
      })
      .catch(err => {
        console.log("Danger, Danger!", err);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Data</h1>
        {/* {protectedData.map(data => (
          <h1>{data.name}</h1>
        ))} */}
      </div>
    </div>
  );
};

export default ProtectedData;
