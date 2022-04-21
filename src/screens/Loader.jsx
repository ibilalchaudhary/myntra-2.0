import React from "react";
import loader from "../assets/loader.svg";

export default function Loader() {
  return (
    <div className="loader__wrapper">
      <img src={loader} alt="loader" className="loader__wrapper__svg" />
    </div>
  );
}
