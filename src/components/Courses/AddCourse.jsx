import React, { useState } from "react";
import CourseModal from "./CourseModal";

const AddCourse = () => {
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="text-end mt-10">
        <button
          className="bg-[#fec0ca] px-[1rem] py-[0.5rem]  boxshowButton"
          onClick={handleAdd}
        >
          <span className="mr-2 text-[#212529] text-[16px]">+</span>
          <span className="text-[#212529] text-[16px]">Add Course</span>
        </button>
        {open && <CourseModal setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default AddCourse;
