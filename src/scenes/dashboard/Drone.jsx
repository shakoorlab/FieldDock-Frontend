import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ExpandMore } from "@mui/icons-material";
import { Box, ListItemIcon } from "@mui/material";

import CommonRow from "../../components/NavBar/NavBar";
import LogsDateSelector from "../../components/Drone/Logs/LogsDateSelector";
import DroneNetwork from "../../components/Drone/Index_Page/DroneNetwork";
import PastMissionCard from "../../components/Drone/Index_Page/Completed/PastMissionCard";
import PlannedMissionsParent from "../../components/Drone/Index_Page/Planned/PlannedMissionsParent";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Backdrop from "@mui/material/Backdrop";
import MissionPlanSteps from "../../components/Drone/Index_Page/Planned/Stepper/MissionPlanSteps";

// import CircularProgress from "@mui/material/CircularProgress";

import "../../CSS/drone.css";
import "../../CSS/sensors.css";
import "../../CSS/settings.css";

function Drone() {
  const [open, setOpen] = useState(false); // State for controlling Backdrop

  const handleToggle = () => {
    setOpen(!open); // Toggle the state to show/hide the Backdrop
  };
  //!delete if need be
  // const navigate = useNavigate();

  // const navigateToMissionPlanner = () => {
  //   navigate("/date-mission");
  // };

  //----------for buttom hover effect
  function handleHover(e) {
    e.target.style.borderColor = "#00e1b4";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  //----------for buttom hover effect
  //
  //
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      {/* ---------------------------------ROW ONE START-------------------------------- */}
      <Row className="row-one">
        <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4}>
          {/* //!change to something original, not borrowing */}
          {/* Drone Network start */}
          <div className="software-update-box">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">FieldDock Drone Network</div>
            <DroneNetwork />
          </div>
        </Col>
        {/* Drone Network end */}
        {/*  */}
        {/* Menu start */}
        <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4}>
          <Box className="wireless-sensor-menu-parent">
            <div style={{ flex: 1 }}>Select a drone...</div>
            <ListItemIcon
              style={{
                display: "flex",
                justifyContent: "flex-end", // Ensures the icon aligns to the right
              }}
            >
              <ExpandMore />
            </ListItemIcon>
          </Box>
        </Col>
        {/* Menu end */}
        {/*  */}
        {/* Drone Logs start */}
        <Col xs={2} sm={2} md={2} lg={4} xl={4} xxl={4}>
          <div className="growing-degree-days-parent">
            {/* //?borrowing title css from settings.jsx*/}
            <div className="software-update-title">FieldDock Drone Logs</div>
            <LogsDateSelector />
          </div>
        </Col>
      </Row>
      {/* Drone Logs start */}
      {/* ---------------------------------ROW ONE END -------------------------------- */}
      {/*  */}
      {/* --------------------------------ROW TWO START-------------------------------- */}
      {/*  */}
      {/*  */}
      {/* Past Missions start */}
      <div className="row-two-div">
        <Row>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* //!change to something original, not borrowing */}
            <div className="plug-and-play-parent">
              {/* //?borrowing title css from settings.jsx*/}
              <div className="software-update-title">Past Missions</div>

              <PastMissionCard />
              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid #FFF",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  onMouseOver={handleHover}
                  onMouseOut={handleUnhover}
                  style={{
                    border: "1px solid orange",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "#FFF",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65)",
                    width: "40%",
                    marginTop: "25px",
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </Col>
          {/* Past Missions end */}
          {/*  */}
          {/* Drone Status/Rename Drone end */}
          <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* //! make this a component */}
            <div className="sensor-status-parent">
              {/* //?borrowing title css from settings.jsx*/}
              <div className="software-update-title">Drone Status</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "20px",
                    backgroundColor: "#181818",
                    color: "white",
                    fontSize: "18px", // Adjust font size as needed
                    width: "95%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BatteryFullIcon sx={{ mr: 1, color: "green" }} />
                    <span>
                      Battery: <span style={{ color: "#00e1b4" }}>95.48%</span>
                    </span>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SignalCellularAltIcon sx={{ mr: 1, color: "orange" }} />
                    <span>
                      Signal: <span style={{ color: "#00e1b4" }}>Strong</span>
                    </span>
                  </Box>
                </div>
              </div>
            </div>
            <div className="drone-svg-container">
              <img
                src={process.env.PUBLIC_URL + "/assets/drone_diagram_large.svg"}
                alt="Drone"
                className="drone-large-svg"
              />
            </div>
            <div className="sensor-status-parent">
              {/* //?borrowing title css from settings.jsx*/}
              <div className="software-update-title">Rename This Drone</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <input
                  type="text"
                  placeholder="Rename drone"
                  style={{
                    textAlign: "center",
                    border: "1px solid #797979",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "gray",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                    width: "70%",
                    marginTop: "25px",
                  }}
                />

                <button
                  onMouseOver={handleHover}
                  onMouseOut={handleUnhover}
                  style={{
                    border: "1px solid orange",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "#FFF",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                    width: "30%",
                    marginTop: "25px",
                    marginLeft: "15px",
                  }}
                >
                  Rename
                </button>
              </div>
            </div>
          </Col>

          {/* Drone Status/Rename Drone end */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/* Planned Missions start */}
          <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* //!change to something original, not borrowing */}
            <div className="environmental-conditions-parent">
              {/* //?borrowing title css from settings.jsx*/}
              <div className="software-update-title">Planned Missions</div>
              <PlannedMissionsParent />
              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid #FFF",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onMouseOver={handleHover}
                  onMouseOut={handleUnhover}
                  style={{
                    border: "1px solid orange",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "#FFF",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                    width: "35%",
                    marginTop: "25px",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={handleToggle}
                  onMouseOver={handleHover}
                  onMouseOut={handleUnhover}
                  style={{
                    border: "1px solid orange",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "#FFF",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow: "3px 3px 6px 0 rgba(0, 0, 0, 0.65",
                    width: "35%",
                    marginTop: "25px",
                    marginLeft: "40px",
                  }}
                >
                  New
                </button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  {open && <MissionPlanSteps onClose={handleToggle} />}
                  {/* <CircularProgress color="inherit" /> */}
                </Backdrop>
              </div>
            </div>
            {/* Planned Missions end */}
          </Col>
        </Row>
      </div>

      {/* ---------------------------------row 2 end -------------------------------- */}
    </Container>
  );
}

export default Drone;
