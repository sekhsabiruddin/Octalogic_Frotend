import React, { useState } from "react";
import HomeIcon from "../../assets/home_icon.svg";
import Logo from "../../assets/Logo.svg";
import MusicIcon from "../../assets/music_icon.svg";
import { LuLayoutGrid } from "react-icons/lu";
import { MdQueueMusic } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

const Sidebar = ({ setActiveTab, activeTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="fixed boxshow w-[12%] lg:w-[7%] h-screen text-center bg-[#ffffff]">
      {/* Logo section */}
      <div className="flex items-center flex-col">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Tabs section */}
      <div className=" mt-[2rem] flex items-center flex-col gap-5 ">
        <div
          className={`flex  rounded-sm px-2 py-1 lg:px-5 lg:py-1 flex-col cursor-pointer  ${
            activeTab === "home"
              ? "bg-[#fedfe1] text-[#901E75]"
              : "bg-[#e5e7eb]"
          }`}
          onClick={() => handleTabClick("home")}
        >
          <LuLayoutGrid size={25} className="mx-auto" />
          <span className="text-[0.7rem]">Home</span>
        </div>
        <div
          className={`flex rounded-sm px-2 py-1 lg:px-5 lg:py-1  flex-col cursor-pointer ${
            activeTab === "course"
              ? "bg-[#f6c6c9] text-[#901E75]"
              : "bg-[#e5e7eb]"
          }`}
          onClick={() => handleTabClick("course")}
        >
          <MdQueueMusic size={25} className="mx-auto" />
          <span className="text-[0.7rem]">Course</span>
        </div>
      </div>
      <div className="h-[65vh] flex items-end">
        <div className="flex rounded-sm px-2 py-1 lg:px-5 lg:py-1  flex-col cursor-pointer ">
          <CiLogin size={25} className="mx-auto" />
          <span className="text-[0.7rem]">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
