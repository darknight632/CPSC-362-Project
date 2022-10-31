import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  UserProfile,
  Login,
} from "./components";
import { Calendar, Dashboard,Exercise,Register } from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const location = useLocation();

  return (
    <div>
      {(location.pathname === '/CPSC-362-Project' || location.pathname === '/Register') ? null :
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
      }

      {(location.pathname === '/CPSC-362-Project' || location.pathname === '/Register') ? null :
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3x1 p-3 hover:drop-shadow-x1  hover:bg-light-gray  text-white"
              style={{ backgroundColor: "lightblue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      }
      {location.pathname === '/CPSC-362-Project' ? setActiveMenu(false): ''}
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        <div
          className={
            activeMenu
              ? "dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full"
              : "bg-main-bg dark:bg-main-bg w-full flex-2 min-h-screen"
          }
        >
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/CPSC-362-Project" strict element={<Login />} />
              <Route path="/HUD" element={<Dashboard />} />

              {/* Pages */}
              <Route path="/UserProfile" element={<UserProfile />} />
              <Route path="/Register" element= {<Register />} />
              <Route path="/Exercise" element={<Exercise />} />
              <Route path="/Calendar" strict element={<Calendar />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
