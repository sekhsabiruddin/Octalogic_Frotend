import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UpdateModal from "./UpdateModal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  closeCourse,
  archiveCourse,
  unarchiveCourse,
} from "../../redux/reducer/course";
const CourseActionsModal = ({ isOpen, onClose, refdata, singleCourse }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();
  const modalStyle = {
    position: "absolute",
    top: refdata.offsetTop + refdata.clientHeight,
    left: refdata.offsetLeft - 200,
    zIndex: 1000,
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleClose = () => {
    dispatch(closeCourse(singleCourse.id));
    toast.success(`Course  has been closed successfully.`);
    onClose();
  };

  const handleArchive = () => {
    dispatch(archiveCourse(singleCourse.id));
    toast.success(`Course  has been archived successfully.`);
    onClose();
  };

  const handleUnarchive = () => {
    dispatch(unarchiveCourse(singleCourse.id));
    toast.success(`Course has been unarchived successfully.`);
    onClose();
  };

  return (
    <>
      {isEditModalOpen && (
        <UpdateModal
          isOpen={isEditModalOpen}
          onClose={onClose}
          singleCourse={singleCourse}
        />
      )}

      {isOpen && !isEditModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-auto overflow-y-auto outline-none focus:outline-none"
          onClick={handleOutsideClick}
        >
          <div className="absolute" style={modalStyle}>
            <div className="w-80 bg-white shadow-lg rounded-md">
              <div className="p-4">
                <div className="flex flex-col space-y-2">
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                    onClick={handleEdit}
                  >
                    Edit Course
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                    onClick={handleClose}
                  >
                    Close Course
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                    onClick={handleArchive}
                  >
                    Archive Course
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                    onClick={handleUnarchive}
                  >
                    Unarchive Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CourseTable = ({ searchQuery }) => {
  const courses = useSelector((state) => state.course.data);

  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const buttonRefs = useRef([]);

  const [refdata, setrefData] = useState(null);
  const [singleCourse, setSingleCourse] = useState(null);
  const [refershCourse, setrefershCourse] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = courses.filter((course) =>
        Object.values(course).some(
          (field) =>
            typeof field === "string" &&
            field.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  }, [courses, searchQuery]);

  const openModal = (index, course) => {
    setSingleCourse(course);
    setSelectedCourseIndex(index);
  };

  const closeModal = () => {
    setSelectedCourseIndex(null);
  };

  const handleHello = (index) => {
    setrefData(buttonRefs.current[index]);
  };

  const tdStyle = {
    fontFamily: '"Nunito Sans", sans-serif',
    fontSize: "14px",
    color: "#212529",
    padding: "12px 12px",
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#ffffff]">
          <tr>
            <th className="px-2 py-3 text-left font-sans font-bold text-[#212529]">
              Name
            </th>
            <th className="px-2 py-3 text-left font-sans font-bold text-[#212529]">
              Description
            </th>
            <th className="px-2 py-3 text-left font-sans font-bold text-[#212529]">
              Instructor
            </th>
            <th className="px-2 py-3 text-left font-sans font-bold text-[#212529]">
              Instrument
            </th>
            <th className="px-2 py-3 text-left font-sans font-bold text-[#212529]">
              Day of Week
            </th>
            <th className="px-2 py-3 text-left font-sans font-bold text-[#212529]">
              #Students
            </th>
            <th className="px-2 py-3 text-left font-sans font-bold text-[#212529]">
              Price
            </th>
            <th className="px-2 py-3  font-sans font-bold text-[#212529]">
              Status
            </th>
            <th className="px-2 py-3 text-left font-sans font-bold text-[#212529]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {searchQuery && filteredCourses.length === 0 && (
            <tr className="text-sm">
              <td
                colSpan="9"
                className="text-center text-[#ed3c3cdd] py-10 text-[1.2rem]"
              >
                No data found
              </td>
            </tr>
          )}
          {filteredCourses.map((course, index) => (
            <tr key={index} className="text-sm">
              <td style={tdStyle}>{course.name}</td>
              <td style={tdStyle}>{course.desc}</td>
              <td style={tdStyle}>{course.instructor}</td>
              <td style={tdStyle}>{course.instrument}</td>
              <td style={tdStyle}>{course.dayOfWeek}</td>
              <td style={tdStyle}>{course.noOfStudents}</td>
              <td style={tdStyle}>{course.price}</td>
              <td style={tdStyle} className="text-center">
                <span
                  className={
                    course.status === "Active"
                      ? "bg-[#CFF9DF] text-[#83858B] px-4 py-1 rounded-sm"
                      : course.status === "Closed"
                      ? "bg-[#FEC0CA] text-[#83858B] px-4 py-1 rounded-sm"
                      : course.status === "Archived"
                      ? "bg-[#E5E7EB] text-[#83858B] px-4 py-1 rounded-sm"
                      : ""
                  }
                >
                  {course.status === "Active"
                    ? "Active"
                    : course.status === "Closed"
                    ? "Closed"
                    : course.status === "Archived"
                    ? "Archived"
                    : ""}
                </span>
              </td>

              <td
                className="text-center "
                style={{ textAlign: "-webkit-center" }}
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => handleHello(index)}
              >
                <BsThreeDotsVertical
                  className="cursor-pointer"
                  onClick={() => openModal(index, course)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for displaying course actions */}
      {selectedCourseIndex !== null && (
        <CourseActionsModal
          isOpen={true}
          onClose={closeModal}
          refdata={refdata}
          singleCourse={singleCourse}
          setrefershCourse={setrefershCourse}
          refershCourse={refershCourse}
        />
      )}
    </div>
  );
};

export default CourseTable;
