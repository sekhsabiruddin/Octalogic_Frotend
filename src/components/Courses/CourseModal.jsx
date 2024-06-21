import React, { useState } from "react";
import { addCourse } from "../../redux/reducer/course";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CourseModal = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState({
    id: Date.now(),
    name: "",
    desc: "",
    instructor: "",
    instrument: "",
    dayOfWeek: "",
    price: "",
    noOfStudents: "",
    status: "Active",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(addCourse(courseData));

    setCourseData({
      id: "",
      name: "",
      desc: "",
      instructor: "",
      instrument: "",
      dayOfWeek: "",
      price: "",
      noOfStudents: "",
      status: "",
    });
    toast.success("Course added successfully!");

    setOpen(false);
  };

  // Handle cancel button click
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 backgournd-color">
      <div className="bg-white p-6 rounded-md shadow-md relative w-[90%] lg:w-[60%] h-[90vh] overflow-auto">
        <div>
          <h4>Add Course</h4>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-start">
          <div className="m-2 w-full">
            <input
              type="text"
              name="name"
              placeholder="Course Name"
              value={courseData.name}
              onChange={handleInputChange}
              required
              className="inputcss"
            />
          </div>
          <div className="m-2 w-full">
            <input
              type="text"
              name="desc"
              placeholder="Description"
              value={courseData.desc}
              onChange={handleInputChange}
              required
              className="inputcss"
            />
          </div>
          <div className="m-2 w-full">
            <input
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={courseData.instructor}
              onChange={handleInputChange}
              required
              className="inputcss"
            />
          </div>
          <div className="m-2 w-full">
            <select
              name="instrument"
              value={courseData.instrument}
              onChange={handleInputChange}
              required
              className="inputcss"
            >
              <option value="">Instrument</option>
              <option value="Guitar">Guitar</option>
              <option value="Piano">Piano</option>
              <option value="Violin">Violin</option>
            </select>
          </div>
          <div className="m-2 w-full">
            <select
              name="dayOfWeek"
              value={courseData.dayOfWeek}
              onChange={handleInputChange}
              required
              className="inputcss"
            >
              <option value="">Day of Week</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>
          <div className="m-2 w-full">
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={courseData.price}
              onChange={handleInputChange}
              required
              className="inputcss"
            />
          </div>
          <div className="m-2 w-full">
            <input
              type="text"
              name="noOfStudents"
              placeholder="Number of Students"
              value={courseData.noOfStudents}
              onChange={handleInputChange}
              required
              className="inputcss"
            />
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="button"
              className="mr-4 text-[rgb(33,37,41)]"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#FEC0CA] text-[#212529] px-[1rem] py-[0.5rem] rounded-sm"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
