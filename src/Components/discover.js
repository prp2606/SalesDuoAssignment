import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import Base from "./Reusable Components/base";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Discover = () => {
  return (
    <Base endpoint="/discover">
      <div id="dummyPages">
        <Card className="card">
          <CardHeader className="cardHeader">
            <h5>Here we can render Discover page</h5>
            <CardTitle className="cardTitle">
              <FontAwesomeIcon icon={faGlobe} id="iconShow" />
              <span>Discovery</span>
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

export default Discover;
