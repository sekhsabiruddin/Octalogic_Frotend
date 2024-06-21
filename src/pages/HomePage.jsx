import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import RightSideBar from "../components/RightSideBar"; // Assuming Index is correctly imported as RightSideBar
import Course from "../components/Courses/Course";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "home" && <RightSideBar />}
      {activeTab === "course" && <Course />}
    </div>
  );
};

export default HomePage;
