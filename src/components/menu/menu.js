import React from "react";
import "./menu.css";
import sortUp from "../../img/sort_up.svg";
import toggleIcon from "../../img/Vector.svg";
import moreIcon from "../../img/more.svg";
import sortRight from "../../img/sort_right.svg";
import toggleOff from "../../img/toggle_inactive.svg";
import toggleOn from "../../img/toggle_active.svg";

const TranslateToggle = () => {
  function toggleStateChange() {
    console.log("hello");
  }

  return (
    <div className="container">
      {/* get first tab : choose translate language */}
      <div className="main-tab ">
        <img src={moreIcon} alt="" id="moreIcon" />

        <div className="subtab1">
          <div className="set-langugae">
            <span>Spanish</span>
            <img src={sortUp} alt="" id="sortup"></img>
          </div>

          <img src={toggleIcon} alt="" className="toggleIcon"></img>
          <span>English</span>
        </div>
      </div>

      {/* translate my own text */}
      <div className="main-tab subtab2">
        <span className="ownText">Translate My Own Text</span>
        <img src={sortRight} alt="" id="sort-right"></img>
      </div>

      {/* module management subtab */}
      <div className="main-tab subtab2">
        <span className="ownText">Module Management</span>
        <img src={sortRight} alt="" id="sort-right"></img>
      </div>

      {/* Toggle on or off quality estimation */}
      <div className="main-tab subtab2">
        <span className="ownText">Quality Estimation</span>
        <img
          src={toggleOff}
          alt=""
          id="sort-right"
          onClick={toggleStateChange}
        />
      </div>
    </div>
  );
};

export default TranslateToggle;
