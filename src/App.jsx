import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar.jsx";
import Header from "./components/header/Header";
import GlobalView from "./views/globalView/GlobalView";
import Calendar from "./views/calendar/Calendar";
import Asset from "./views/asset/Asset.jsx";
import CreateAsset from "./views/asset/CreateAsset.jsx";
import UpdateAsset from "./views/asset/UpdateAsset.jsx";
import WorkOrder from "./views/workOrder/WorkOrder.jsx";
import Notification from "./views/notification/Notification.jsx";
import { NotificationProvider } from "./views/notification/NotificationProvider";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <SideBar />
        <NotificationProvider>
          {/* Wrap Header and WorkOrder inside NotificationProvider */}
          <div className="body header-and-card">
            <Header />
            <Routes>
              <Route path="/dashboard/global-view" element={<GlobalView />} />
              <Route path="/dashboard/calendar" element={<Calendar />} />
              <Route path="/assets" element={<Asset />} />
              <Route path="/assets/create" element={<CreateAsset />} />
              <Route path="/assets/update" element={<UpdateAsset />} />
              <Route path="/work-orders" element={<WorkOrder />} />
              <Route path="/notifications" element={<Notification />} />
            </Routes>
          </div>
        </NotificationProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
