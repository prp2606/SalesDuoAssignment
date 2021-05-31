import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Nav,
  NavLink as ReactStrapNavLink,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavbarToggler,
} from "reactstrap";

import "../../Stylings/sideNavbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGlobe,
  faUser,
  faBook,
  faTachometerAlt,
  faWindowClose,
  faFile,
  faList,
  faInbox,
  faFileArchive,
  faQuestionCircle,
  faCog,
  faSignOutAlt,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ endpoint }) => {
  return (
    <>
      <div id="sideBar">
        <NavLink to="/">
          <div id="brandName">
            {/* A icon */}
            <img src="https://img.icons8.com/ios-filled/20/4a90e2/a.png" />
            <h2 id="brand">Artemis</h2>
          </div>
        </NavLink>
        <div className="barSection">
          <p className="barDesc">MAIN</p>
          <div className="barMain">
            <Nav>
              <li>
                <NavLink to="/dashboard">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/dashboard" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/dashboard" ? "white" : "black",
                        opacity: endpoint === "/dashboard" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTachometerAlt}
                        className="barIcon"
                      />
                      <p className="barText">Dashboard</p>
                    </div>
                    <div className="bar2">
                      <FontAwesomeIcon
                        className="adjust"
                        id="drop"
                        icon={faAngleDown}
                        style={{
                          color: endpoint === "/dashboard" ? "white" : "black",
                          opacity: endpoint === "/dashboard" ? "1" : "0.5",
                        }}
                      />
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/discover">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/discover" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/discover" ? "white" : "black",
                        opacity: endpoint === "/discover" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon icon={faGlobe} className="barIcon" />
                      <p className="barText">Discover</p>
                    </div>
                    <div
                      className="bar2"
                      id="special"
                      style={{
                        backgroundColor:
                          endpoint === "/discover" ? "white" : "#6100ec",
                        color: endpoint === "/discover" ? "black" : "white",
                      }}
                    >
                      4
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/users">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/users" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/users" ? "white" : "black",
                        opacity: endpoint === "/users" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon icon={faUser} className="barIcon" />
                      <p className="barText">Users</p>
                    </div>
                    <div className="bar2">
                      <FontAwesomeIcon
                        className="adjust"
                        id="drop"
                        icon={faAngleDown}
                        style={{
                          color: endpoint === "/users" ? "white" : "black",
                          opacity: endpoint === "/users" ? "1" : "0.5",
                        }}
                      />
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/documents">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/documents" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/documents" ? "white" : "black",
                        opacity: endpoint === "/documents" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon icon={faBook} className="barIcon" />
                      <p className="barText">Documents</p>
                    </div>
                    <div className="bar2">
                      <FontAwesomeIcon
                        className="adjust"
                        id="drop"
                        icon={faAngleDown}
                        style={{
                          color: endpoint === "/documents" ? "white" : "black",
                          opacity: endpoint === "/documents" ? "1" : "0.5",
                        }}
                      />
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/applications">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/applications"
                          ? "#6100ec"
                          : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/applications" ? "white" : "black",
                        opacity: endpoint === "/applications" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faWindowClose}
                        className="barIcon"
                      />
                      <p className="barText">Applications</p>
                    </div>
                    <div className="bar2">
                      <FontAwesomeIcon
                        className="adjust"
                        id="drop"
                        icon={faAngleDown}
                        style={{
                          color:
                            endpoint === "/applications" ? "white" : "black",
                          opacity: endpoint === "/applications" ? "1" : "0.5",
                        }}
                      />
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/pages">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/pages" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/pages" ? "white" : "black",
                        opacity: endpoint === "/pages" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon icon={faFile} className="barIcon" />
                      <p className="barText">Pages</p>
                    </div>
                    <div className="bar2">
                      <FontAwesomeIcon
                        className="adjust"
                        id="drop"
                        icon={faAngleDown}
                        style={{
                          color: endpoint === "/pages" ? "white" : "black",
                          opacity: endpoint === "/pages" ? "1" : "0.5",
                        }}
                      />
                    </div>
                  </div>
                </NavLink>
              </li>
            </Nav>
          </div>
        </div>
        <div className="barSection">
          <p className="barDesc">SECONDARY</p>
          <div className="barMain">
            <Nav>
              <li>
                <NavLink to="/support">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/support" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/support" ? "white" : "black",
                        opacity: endpoint === "/support" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="barIcon"
                      />
                      <p className="barText">Support Center</p>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/inbox">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/inbox" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/inbox" ? "white" : "black",
                        opacity: endpoint === "/inbox" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon icon={faInbox} className="barIcon" />
                      <p className="barText">Inbox</p>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/fileManager">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/fileManager" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/fileManager" ? "white" : "black",
                        opacity: endpoint === "/fileManager" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faFileArchive}
                        className="barIcon"
                      />
                      <p className="barText">File Manager</p>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dataList">
                  <div
                    style={{
                      backgroundColor:
                        endpoint === "/dataList" ? "#6100ec" : "transparent",
                    }}
                  >
                    <div
                      className="bar1"
                      style={{
                        color: endpoint === "/dataList" ? "white" : "black",
                        opacity: endpoint === "/dataList" ? "1" : "0.7",
                      }}
                    >
                      <FontAwesomeIcon icon={faList} className="barIcon" />
                      <p className="barText">Data List</p>
                    </div>
                  </div>
                </NavLink>
              </li>
            </Nav>
          </div>
        </div>
        <div className="barSection">
          <div className="barMain">
            <li>
              <NavLink to="/settings">
                <div
                  style={{
                    backgroundColor:
                      endpoint === "/settings" ? "#6100ec" : "transparent",
                  }}
                >
                  <div
                    className="bar1"
                    style={{
                      color: endpoint === "/settings" ? "white" : "black",
                      opacity: endpoint === "/settings" ? "1" : "0.7",
                    }}
                  >
                    <FontAwesomeIcon icon={faCog} className="barIcon" />
                    <p className="barText">Settings</p>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/logOut">
                <div
                  style={{
                    backgroundColor:
                      endpoint === "/logOut" ? "#6100ec" : "transparent",
                  }}
                >
                  <div
                    className="bar1"
                    style={{
                      color: endpoint === "/logOut" ? "white" : "black",
                      opacity: endpoint === "/logOut" ? "1" : "0.7",
                    }}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="barIcon" />

                    <p className="barText">Log Out</p>
                  </div>
                </div>
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
