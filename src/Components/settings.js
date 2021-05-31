import { faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Base from "./Reusable Components/base";

const Settings = () => {
  return (
    <Base endpoint="/settings">
      <div id="dummyPages">
        <Card className="card">
          <CardHeader className="cardHeader">
            <h5>Here we can render Settings page</h5>
            <CardTitle className="cardTitle">
              <FontAwesomeIcon icon={faCog} id="iconShow" />
              <span>Settings</span>
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

export default Settings;
