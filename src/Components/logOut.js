import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Base from "./Reusable Components/base";

const LogOut = () => {
  return (
    <Base endpoint="/logOut">
      <div id="dummyPages">
        <Card className="card">
          <CardHeader className="cardHeader">
            <h5>Here we can implement LogOut functionality </h5>
            <CardTitle className="cardTitle">
              <FontAwesomeIcon icon={faSignOutAlt} id="iconShow" />
              <span>LogOut</span>
              <span className="increment">+100%</span>
            </CardTitle>
          </CardHeader>
          <CardBody className="cardBody">
            <div id="progressBar">
              <div id="seven0"></div>
            </div>
          </CardBody>
        </Card>
      </div>
    </Base>
  );
};

export default LogOut;
