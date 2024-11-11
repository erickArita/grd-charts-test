import type { ColDef, ColGroupDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-theme-quartz.css";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type CustomAny = any;

interface IAgGridBaseTable {
  rowData: unknown[];
  columnDefs: (ColDef<CustomAny> | ColGroupDef<CustomAny>)[];
}

export const AgGridBaseTable = ({ rowData, columnDefs }: IAgGridBaseTable) => {
  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};
