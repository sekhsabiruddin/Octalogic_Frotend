import React, { useState } from "react";
import CourseTable from "./CourseTable";
import AddCourse from "./AddCourse";
import { CiSearch } from "react-icons/ci";
import Search from "../../assets/search.png";

const Course = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const courseStyle = {
    fontFamily: '"Nunito Sans", sans-serif',

    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "28px",
  };

  return (
    <div
      style={courseStyle}
      className="bg-[#F4F4F4] w-[93%] ml-[12%] lg:ml-[7%] px-[1rem] lg:px-[2rem] py-3 "
    >
      <div>
        <span style={headingStyle}>Course</span>
      </div>
      {/* Search and Course list */}
      <div className="flex flex-col gap-4 lg:justify-between lg:flex-row mt-5">
        <div>
          <h4
            className="text-[16px]"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            COURSE LIST
          </h4>
        </div>
        {/* Search bar here */}
        <div className="flex  bg-[#ffffff] items-center serachBar">
          <img src={Search} alt="" />
          <input
            type="text"
            className="outline-none ml-2"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <button
              type="button"
              className="ml-2 text-gray-500"
              onClick={handleClearSearch}
            >
              Clear
            </button>
          )}
        </div>
        {/* Search bar end */}
      </div>
      {/* Course table */}
      <CourseTable searchQuery={searchQuery} />
      <AddCourse />
      {/* Course table end */}
    </div>
  );
};

export default Course;
