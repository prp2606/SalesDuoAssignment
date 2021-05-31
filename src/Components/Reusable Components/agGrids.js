import React, { useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import "../../Stylings/grid.css";

const AGgrid = ({ columnDefs, rowData }) => {
  const rowClass = "bg-transparent";

  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "bg-white";
    }
  };

  return (
    <div id="grid" className="ag-theme-balham">
      <AgGridReact
        defaultColDef={{
          editable: true,
          resizable: true,
          minWidth: 100,
          flex: 1,
        }}
        columnDefs={columnDefs}
        suppressExcelExport={true}
        popupParent={document.body}
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
