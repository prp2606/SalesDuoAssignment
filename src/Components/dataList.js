import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import Base from "./Reusable Components/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const DataList = () => {
  return (
    <Base endpoint="/dataList">
      <div id="dummyPages">
        <Card className="card">
          <CardHeader className="cardHeader">
            <h5>Here we can show DataList</h5>
            <CardTitle className="cardTitle">
              <FontAwesomeIcon icon={faList} id="iconShow" />
              <span>DataList</span>
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

export default DataList;
