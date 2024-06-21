import React, { useState } from "react";
import { updateCourse } from "../../redux/reducer/course";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const UpdateModal = ({ onClose, isOpen, singleCourse }) => {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState({
    id: singleCourse.id,
    name: singleCourse.name,
    desc: singleCourse.desc,
    instructor: singleCourse.instructor,
    instrument: singleCourse.instrument,
    dayOfWeek: singleCourse.dayOfWeek,
    price: singleCourse.price,
    noOfStudents: singleCourse.noOfStudents,
    status: singleCourse.status,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !courseData.name ||
      !courseData.desc ||
      !courseData.instructor ||
      !courseData.instrument ||
      !courseData.dayOfWeek ||
      !courseData.price ||
      !courseData.noOfStudents
    ) {
      toast.warning("Please fill out all required fields.");
      return;
    }
    dispatch(updateCourse(courseData));
    toast.success("Course updated successfully!");
    onClose();
  };

  const handleAdd = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md relative md:w-[90%] lg:w-[60%] h-[90vh] overflow-auto">
            <div>
              <h4>Edit Course</h4>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start space-y-4"
            >
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
                  className="mr-4 text-gray-500"
                  onClick={handleAdd}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateModal;
