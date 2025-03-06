import React from "react";
import HeaderAndCard from "./View1/globalView/HeaderAndCard"; 
import Dashboard from "./View1/sideBar/Dashboard";
import CalendarPage from "./View1/calendar/CalendarPage";
import "../public/templateA.css";

function App() {
  return (
    <div className="app-container">
      {/* <Dashboard />
      <HeaderAndCard /> */}
      <CalendarPage />
    </div>
  );
}

export default App;
