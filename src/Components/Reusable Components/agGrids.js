import React, { useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import "ag-grid-community/dist/styles/ag-theme-base.css";
import "ag-grid-community/dist/styles/ag-theme-blue.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
// import "ag-grid-community/dist/styles/ag-theme-classic.css";
import "ag-grid-community/dist/styles/ag-theme-dark.css";
import "ag-grid-community/dist/styles/ag-theme-fresh.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
// import "ag-grid-enterprise";

import "../../Stylings/grid.css";

const AGgrid = ({ columnDefs, rowData }) => {
  // all rows assigned CSS class 'my-green-class'
  const rowClass = "bg-transparent";

  // all even rows assigned 'my-shaded-effect'
  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "bg-white";
    }
  };

  return (
    <div id="grid" className="ag-theme-balham">
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection="multiple"
        rowHeight={50}
        rowClass={rowClass}
        getRowClass={getRowClass}
        unSortIcon={true}
      />
    </div>
  );
};

export default AGgrid;
