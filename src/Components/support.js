import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import Base from "./Reusable Components/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Support = () => {
  return (
    <Base endpoint="/support">
      <div id="dummyPages">
        <Card className="card">
          <CardHeader className="cardHeader">
            <h5>Here we can render Support page</h5>
            <CardTitle className="cardTitle">
              <FontAwesomeIcon icon={faQuestionCircle} id="iconShow" />
              <span>Support</span>
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

export default Support;
