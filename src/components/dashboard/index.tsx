import React from "react";
import Navbar from "../navbar/index.tsx";
import { Routes, Route } from "react-router-dom";
import User from "../../pages/User/index.tsx";
import Person from "../../pages/Person/index.tsx";
import "./index.scss";
import AppMenu from "../appmenu/appmenu.tsx";

const Dashboard: React.FC = () => {
  return (
    <div className="appMenu">
      <Navbar />
      <div className="flex w-full mainDiv">
        <AppMenu />
        <div className="w-full sideBar px-16 py-8">
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/user" element={<User />} />
            <Route path="/person" element={<Person />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
