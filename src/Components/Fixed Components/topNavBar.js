import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCog,
  faSearch,
  faComment,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import "../../Stylings/topNavBar.css";
import developer from "../../Images/developer.png";

const TopBar = ({ endpoint }) => {
  const [dropDown, setDropDown] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // setDropDown("none");
  }, []);

  const drop = () => {
    if (document.getElementById("menu").style.display !== "flex") {
      document.getElementById("menu").style.display = "flex";
    } else if (document.getElementById("menu").style.display !== "none") {
      document.getElementById("menu").style.display = "none";
    }
  };

  document.addEventListener("click", (event) => {
    if (
      !event.target.id ||
      (event.target.id != "menu" &&
        event.target.id != "name" &&
        event.target.id != "dev" &&
        event.target.id != "imgHere" &&
        event.target.id != "drop" &&
        event.target.id != "dropDown" &&
        event.target.className != "dropDownItem" &&
        event.target.id != "helper" &&
        event.target.id != "img" &&
        event.target.id != "nameMain")
    ) {
      document.getElementById("menu").style.display = "none";
    }
  });

  return (
    <>
      <div id="topBar">
        <div id="searchBar">
          <FontAwesomeIcon
            className="adjust"
            icon={faSearch}
            className="icon"
            onClick={() => {
              if (searchText === "") {
                alert("Search field empty!");
              } else {
                alert(
                  `We can implement Search Algorithm for searching "${searchText}"`
                );
              }
            }}
          />
          <input
            id="searchInput"
            type="text"
            placeholder="Type to search..."
            autoComplete="off"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div id="options">
          <Link to="/settings">
            <div
              style={{
                padding: "5px",
                borderRadius: "5px",
                backgroundColor:
                  endpoint === "/settings" ? "#6100ec" : "transparent",
              }}
            >
              <FontAwesomeIcon
                className="adjust"
                icon={faCog}
                style={{
                  color: endpoint === "/settings" ? "white" : "black",
                  opacity: endpoint === "/settings" ? 1 : 0.4,
                }}
              />
            </div>
          </Link>

          <Link to="/inbox">
            <div
              style={{
                padding: "5px",
                borderRadius: "5px",
                backgroundColor:
                  endpoint === "/inbox" ? "#6100ec" : "transparent",
              }}
            >
              <FontAwesomeIcon
                className="adjust"
                icon={faComment}
                style={{
                  color: endpoint === "/inbox" ? "white" : "black",
                  opacity: endpoint === "/inbox" ? 1 : 0.4,
                }}
              />
            </div>
          </Link>

          <Link to="/support">
            <div
              style={{
                padding: "5px",
                borderRadius: "5px",
                backgroundColor:
                  endpoint === "/support" ? "#6100ec" : "transparent",
              }}
            >
              <FontAwesomeIcon
                className="adjust"
                icon={faBell}
                style={{
                  color: endpoint === "/support" ? "white" : "black",
                  opacity: endpoint === "/support" ? 1 : 0.4,
                }}
              />
            </div>
          </Link>
        </div>
        <div onClick={drop} id="helper">
          <div id="dropDown">
            <div id="name">
              <p id="nameMain">Thomas Brown</p>
              <p id="dev">Developer</p>
            </div>
            <div id="imgHere">
              <img src={developer} alt="Me" id="img"></img>
              <FontAwesomeIcon
                className="adjust"
                id="drop"
                icon={faAngleDown}
              />
            </div>
          </div>
          <div id="menu">
            <Link to="/dashboard">
              <p className="dropDownItem">Dashboard</p>
            </Link>
            <Link to="/settings">
              <p className="dropDownItem">Settings</p>
            </Link>
            <Link to="/logOut">
              <p className="dropDownItem">LogOut</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
