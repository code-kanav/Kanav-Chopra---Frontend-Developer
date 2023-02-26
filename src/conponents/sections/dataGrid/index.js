import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./dataGrid.module.scss";
import { FaGripVertical } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import Popup from "../../cards/popup";

export default function DayaTable({ data }) {
  const [show, setShow] = React.useState(false);
  const [popupData, setPopupData] = React.useState("");
  const showData = (data) => {
    setShow(true);
    setPopupData(data.row);
    console.log(data);
  };

  React.useEffect(() => {
    show
      ? (document.body.style.cssText = `
      overflow: hidden;`)
      : (document.body.style.cssText = `
      overflow: none;`);
  }, [show]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "rocket_name",
      headerName: "Rocket name",
      width: 170,
    },
    {
      field: "first_flight",
      headerName: "First flight",
      width: 170,
    },
    {
      field: "active",
      headerName: "Active",
      width: 150,
    },
    {
      field: "success_rate_pct",
      headerName: "Success Rate (%)",
      width: 150,
    },
    {
      field: "stages",
      headerName: "Stages",
      width: 90,
    },
    {
      field: "cost_per_launch",
      headerName: "Cost per launch",
      type: "number",
      width: 160,
    },
    {
      field: "Know More",
      headerName: "Know More",
      width: 110,
      renderCell: (row) => {
        return (
          <div
            className="center"
            onClick={() => {
              showData(row);
            }}
          >
            <FaGripVertical onClick={() => setShow(true)} />
          </div>
        );
      },
    },
  ];

  const rows = data;
  return (
    <>
      <div id="details" className={styles.box}>
        <div className={styles.dataBox}>
          <h3>All you need to know about SpaceX Rockets</h3>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </div>
      {show ? (
        <div className="popup-overlay">
          <Popup data={popupData} />
          <span className="popup-close">
            <FaRegWindowClose onClick={() => setShow(false)} />
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
