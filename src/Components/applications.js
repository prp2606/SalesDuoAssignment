import React, { useEffect } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import Base from "./Reusable Components/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Applications = () => {
  // useEffect(() => {
  // document.getElementById("sidebar").style.height = "795px";
  // }, []);

  return (
    <Base endpoint="/applications">
      <div id="dummyPages">
        <Card className="card">
          <CardHeader className="cardHeader">
            <h5>Here we can render Applications page</h5>
            <CardTitle className="cardTitle">
              <FontAwesomeIcon icon={faWindowClose} id="iconShow" />
              <span>Applications</span>
              <span className="increment">+100%</span>
            </CardTitle>
          </CardHeader>
          <CardBody className="cardBody">
            {/* <Progress value="{yearlyProgress}" color="danger"/> */}
            <div id="progressBar">
              <div id="seven0"></div>
            </div>
          </CardBody>
          {/* <CardFooter id="cardFooter">Yearly Goal</CardFooter> */}
        </Card>
      </div>
    </Base>
  );
};

export default Applications;
