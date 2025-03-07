import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/header/Header";
import GlobalView from "./views/globalView/GlobalView";
import Calendar from "./views/calendar/Calendar";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <SideBar />
        <div className="header-and-card">
          <Header />
          <Routes>
            <Route path="/dashboard/global-view" element={<GlobalView />} />
            <Route path="/dashboard/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
