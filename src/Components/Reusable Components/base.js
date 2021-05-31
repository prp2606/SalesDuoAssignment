import React from "react";
import SideBar from "../Fixed Components/sideNavbar";
import TopBar from "../Fixed Components/topNavBar";
import "../../Stylings/base.css";

const Base = ({ endpoint = "/dashboard", children }) => {
  return (
    <>
      <div id="baseContent">
        <div id="leftHalf">
          <SideBar endpoint={endpoint} />
        </div>
        <div id="rightHalf">
          <TopBar endpoint={endpoint} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Base;
