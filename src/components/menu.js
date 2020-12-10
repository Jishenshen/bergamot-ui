import React from "react";
import "../css/menu.css";
import sortUp from "../img/sort_up.svg";
import toggleIcon from "../img/Vector.svg";

const TranslateToggle = () => {
  return (
    <div className="container">
      <div className="main-tab">
        <div className="set-langugae">
          <span>Spanish</span>
          <img src={sortUp} alt="" id="sortup"></img>
        </div>

        <img src={toggleIcon} alt="" className="toggleIcon"></img>
        <span>English</span>
      </div>

      <div className="main-tab"></div>
      <div className="main-tab"></div>
      <div className="main-tab"></div>
    </div>
  );
};

export default TranslateToggle;
