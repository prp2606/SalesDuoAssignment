import React, { useEffect, useState } from "react";
import Base from "./Reusable Components/base";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  ButtonGroup,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import BarChart from "./Reusable Components/barChart";
import LineChart from "./Reusable Components/lineChart";
import AGgrid from "./Reusable Components/agGrids";

import "../Stylings/dashboard.css";

const Dashboard = () => {
  const [income, setIncome] = useState("");
  const [yearlyProgress, setYearlyProgress] = useState();
  const [users, setUsers] = useState();
  const [earnings, setEarnings] = useState();
  const [sales, setSales] = useState();
  const [barLabels, setBarLabels] = useState();
  const [barData, setBarData] = useState();
  const [lineMonthsLabels, setLineMonthsLabels] = useState([]);
  const [lineMonthsData, setLineMonthsData] = useState([]);
  const [lineYearsLabels, setLineYearsLabels] = useState([]);
  const [lineYearsData, setLineYearsData] = useState([]);
  const [increament, setIncreament] = useState({
    incomeInc: 6.9,
    usersInc: 6.9,
    earningInc: 2.5,
    salesInc: 13.6,
  });

  const { incomeInc, usersInc, earningInc, salesInc } = increament;

  const [month, setMonth] = useState(true);
  const [year, setYear] = useState(false);

  const [rowData1, setRowData1] = useState([]);
  const [columnDefs1, setColumnDefs1] = useState([]);
  const [rowData2, setRowData2] = useState([]);
  const [columnDefs2, setColumnDefs2] = useState([]);

  useEffect(() => {
    document.getElementById("monthsChart").style.display = "inline-block";
    document.getElementById("yearsChart").style.display = "none";

    document.getElementById("invoicesBody").style.display = "none";
    document.getElementById("incomingBody").style.display = "inline-block";

    setIncome("$124,563.00");
    setYearlyProgress(70);

    // setIncreament({ ...increament, incomeInc: 6.9 });
    // setIncreament({ ...increament, usersInc: 6.9 });
    // setIncreament({ ...increament, earningInc: 2.5 });
    // setIncreament({ ...increament, salesInc: 13.5 });

    setUsers(94.2);
    setEarnings(43.41);
    setSales("$95,422");

    setBarLabels(["", "", "", "", "", "", "", ""]);
    setBarData([30, 100, 30, 100, 60, 80, 50, 80]);

    setLineYearsLabels([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
    setLineYearsData([
      65, 55, 60, 55, 75, 90, 12, 58, 96, 102, 153, 85, 41, 175, 10, 3, 78, 96,
      36, 24, 36, 145, 32, 78,
    ]);
    setLineMonthsLabels(["", "", "", "", "", "", "", "", "", "", "", ""]);
    setLineMonthsData([53, 20, 10, 70, 32, 45, 55, 20, 15, 100, 48, 23]);

    setColumnDefs1([
      {
        headerName: "Invoice Id",
        field: "IID",
        filter: true,
        sortable: true,
        checkboxSelection: true,
      },
      { headerName: "Date", field: "date", filter: true, sortable: true },
      {
        headerName: "Description",
        field: "desc",
        filter: true,
        sortable: true,
      },
      {
        headerName: "Descriptions",
        field: "descs",
        filter: true,
        sortable: true,
      },
      { headerName: "Status", field: "status", filter: true, sortable: true },
    ]);

    setRowData1([
      {
        IID: "M06359DR0",
        date: "08.04.2021",
        desc: "Code 5928MD01",
        status: "Completed",
        descs: "$2500.00",
      },
      {
        IID: "M06359DR1",
        date: "05.04.2021",
        desc: "Code 5928OP11",
        descs: "$2410.00",
        status: "Completed",
      },
      {
        IID: "M06359DR3",
        date: "04.04.2021",
        desc: "Code 6928MD01",
        descs: "$250.00",
        status: "Completed",
      },
      {
        IID: "M06359DR4",
        date: "08.03.2021",
        desc: "Code 8168MD01",
        descs: "$6358.00",
        status: "Completed",
      },
      {
        IID: "M06359DR8",
        date: "14.04.2021",
        desc: "Code 7228MD01",
        descs: "$5263.00",
        status: "Completed",
      },
    ]);

    setColumnDefs2([
      {
        headerName: "Invoice Id",
        field: "IID",
        filter: true,
        sortable: true,
        checkboxSelection: true,
      },
      { headerName: "Date", field: "date", filter: true, sortable: true },
      {
        headerName: "Invoice From",
        field: "from",
        filter: true,
        sortable: true,
      },
      { headerName: "Status", field: "status", filter: true, sortable: true },
      { headerName: "Code", field: "code", filter: true, sortable: true },
    ]);

    setRowData2([
      {
        IID: "M06359DR8",
        date: "14.04.2021",
        from: "Client17",
        status: "Not Seen",
        code: "7228MD01",
      },
      {
        IID: "M06359DR0",
        date: "08.04.2021",
        from: "Client04",
        status: "Not Seen",
        code: "7228MD01",
      },

      {
        IID: "M06359DR4",
        date: "08.03.2021",
        from: "Client10",
        status: "Seen",
        code: "7228MD01",
      },
      {
        IID: "M06359DR1",
        date: "05.04.2021",
        from: "Client02",
        status: "Not Seen",
        code: "7228MD01",
      },
      {
        IID: "M06359DR3",
        date: "04.04.2021",
        from: "Client01",
        status: "Seen",
        code: "7228MD01",
      },
    ]);
  }, []);

  const handelMonthly = (e) => {
    e.preventDefault();
    e.stopPropagation();

    document.getElementById("monthsChart").style.display = "inline-block";
    document.getElementById("yearsChart").style.display = "none";

    document.getElementById("btnYear").classList.remove("activebtn");
    document.getElementById("btnMonth").classList.add("activebtn");

    // setYear(false);
    // setMonth(true);
  };

  const handelYearly = (e) => {
    e.preventDefault();
    e.stopPropagation();

    document.getElementById("monthsChart").style.display = "none";
    document.getElementById("yearsChart").style.display = "inline-block";

    document.getElementById("btnMonth").classList.remove("activebtn");
    document.getElementById("btnYear").classList.add("activebtn");
  };

  const handelIncoming = (e) => {
    e.preventDefault();
    e.stopPropagation();

    document.getElementById("invoicesBody").style.display = "none";
    document.getElementById("incomingBody").style.display = "inline-block";

    document.getElementById("invoices").classList.remove("activespan");
    document.getElementById("incoming").classList.add("activespan");
  };

  const handelInvoices = (e) => {
    e.preventDefault();
    e.stopPropagation();

    document.getElementById("incomingBody").style.display = "none";
    document.getElementById("invoicesBody").style.display = "inline-block";

    document.getElementById("incoming").classList.remove("activespan");
    document.getElementById("invoices").classList.add("activespan");
  };

  return (
    <Base endpoint="/dashboard">
      <div id="dashboard">
        <div id="charts">
          <div id="leftCharts">
            <div id="leftUpperChart">
              <Card className="card">
                <CardHeader className="cardHeader">
                  <h5>Total Income</h5>
                  <CardTitle className="cardTitle">
                    <span>{income}</span>
                    <span className="increment">+{incomeInc}%</span>
                  </CardTitle>
                </CardHeader>
                <CardBody className="cardBody">
                  <div id="progressBar">
                    <div id="seven0"></div>
                    <div id="three0"></div>
                  </div>
                </CardBody>
                <CardFooter id="cardFooter">Yearly Goal</CardFooter>
              </Card>
            </div>
            <div id="leftLowerChart">
              <Card className="card">
                <CardHeader className="cardHeader">
                  <h5>New Users</h5>
                  <CardTitle className="cardTitle">
                    <span>{users}%</span>
                    <span className="increment">+{usersInc}%</span>
                  </CardTitle>
                </CardHeader>
                <CardBody className="cardBody">
                  <BarChart label={barLabels} data={barData} />
                </CardBody>
              </Card>
            </div>
          </div>
          <div id="rightCharts">
            <Card className="card">
              <CardHeader className="cardHeader">
                <div className="headAdjust">
                  <h5>Balance</h5>
                  <ButtonGroup className="btnGrp">
                    <button
                      type="button"
                      className="btn activebtn"
                      id="btnMonth"
                      onClick={handelMonthly}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      className="btn"
                      id="btnYear"
                      onClick={handelYearly}
                    >
                      Yearly
                    </button>
                  </ButtonGroup>
                </div>

                <CardTitle id="cardTitleSpecial">
                  <div id="earnings">
                    <Card className="card">
                      <CardHeader className="cardHeader">
                        <h5>Earnings</h5>
                        <CardTitle className="cardTitle">
                          <span>{earnings}%</span>
                          <span className="increment">+{earningInc}%</span>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                  <div id="salesValue">
                    <Card className="card">
                      <CardHeader className="cardHeader">
                        <h5>Sales Value</h5>
                        <CardTitle className="cardTitle">
                          <span>{sales}%</span>
                          <span className="increment">+{salesInc}%</span>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardBody className="cardBody">
                <div>
                  <div id="monthsChart">
                    <LineChart
                      label={lineMonthsLabels}
                      data={lineMonthsData}
                      title="Earnings increase count in past months ($)"
                    />
                  </div>
                  <div id="yearsChart">
                    <LineChart
                      label={lineYearsLabels}
                      data={lineYearsData}
                      title="Earnings increase count in past years ($)"
                    />
                  </div>

                  {/* {month === true && (
                    <LineChart label={lineMonthsLabels} data={lineMonthsData} />
                  )}
                  {year === true && (
                    <LineChart label={lineYearsLabels} data={lineYearsData} />
                  )} */}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div id="agGrids">
          {/* <AGgrid /> */}
          <Card className="card">
            <CardHeader className="cardHeader">
              <div className="headAdjust">
                <div id="upperAG">
                  <h5>Recent Transactions</h5>
                  <button
                    className="btn activebtn"
                    onClick={() => {
                      alert("Data Exported!");
                    }}
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    <p>Export</p>
                  </button>
                </div>
                <div id="lowerAG">
                  <span
                    id="incoming"
                    className="activespan"
                    onClick={handelIncoming}
                  >
                    Incoming
                  </span>
                  <span id="invoices" onClick={handelInvoices}>
                    Invoices
                  </span>
                </div>
              </div>
              <CardTitle className="cardTitle"></CardTitle>
            </CardHeader>
            <CardBody className="cardBody">
              <div id="incomingBody">
                <AGgrid columnDefs={columnDefs1} rowData={rowData1} />
              </div>
              <div id="invoicesBody">
                <AGgrid columnDefs={columnDefs2} rowData={rowData2} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Base>
  );
};

export default Dashboard;
