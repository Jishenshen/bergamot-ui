import React from "react";
import "./footSetup.css";
import setting from "../../img/setting.svg";

const footSetup = () => {
  return (
    <div className="foot-container">
      <img src={setting} alt="" />
      <span>Terms & Condition</span>
      <span>About Bergamot</span>
    </div>
  );
};

export default footSetup;
