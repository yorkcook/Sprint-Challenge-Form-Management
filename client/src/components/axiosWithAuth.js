import React from "react";

import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("userToken");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    baseURl: "http://localhost:5000/"
  });
};

export default axiosWithAuth;
