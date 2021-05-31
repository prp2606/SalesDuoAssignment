import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import Base from "./Reusable Components/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Pages = () => {
  return (
    <Base endpoint="/pages">
      <div id="dummyPages">
        <Card className="card">
          <CardHeader className="cardHeader">
            <h5>Here we can render all the Pages</h5>
            <CardTitle className="cardTitle">
              <FontAwesomeIcon icon={faFile} id="iconShow" />
              <span>Pages</span>
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

export default Pages;
