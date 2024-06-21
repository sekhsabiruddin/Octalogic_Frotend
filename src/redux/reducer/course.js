import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
      localStorage.setItem("musicClasses", JSON.stringify(action.payload));
    },
    updateCourse(state, action) {
      const updatedCourses = state.data.map((course) =>
        course.id === action.payload.id ? action.payload : course
      );
      state.data = updatedCourses;
      localStorage.setItem("musicClasses", JSON.stringify(updatedCourses));
    },
    addCourse(state, action) {
      const existingData =
        JSON.parse(localStorage.getItem("musicClasses")) || [];
      const updatedData = [...existingData, action.payload];
      localStorage.setItem("musicClasses", JSON.stringify(updatedData));
      state.data.push(action.payload);
    },
    closeCourse(state, action) {
      const courseId = action.payload;
      const updatedData = state.data.map((course) =>
        course.id === courseId ? { ...course, status: "Closed" } : course
      );
      state.data = updatedData;
      localStorage.setItem("musicClasses", JSON.stringify(updatedData));
    },
    archiveCourse(state, action) {
      const courseId = action.payload;
      const updatedData = state.data.map((course) =>
        course.id === courseId ? { ...course, status: "Archived" } : course
      );
      state.data = updatedData;
      localStorage.setItem("musicClasses", JSON.stringify(updatedData));
    },
    unarchiveCourse(state, action) {
      const courseId = action.payload;
      const updatedData = state.data.map((course) =>
        course.id === courseId ? { ...course, status: "Active" } : course
      );
      state.data = updatedData;
      localStorage.setItem("musicClasses", JSON.stringify(updatedData));
    },
  },
});

// Exporting actions directly for use in components
export const {
  setData,
  addCourse,
  closeCourse,
  archiveCourse,
  unarchiveCourse,
  updateCourse,
} = dataSlice.actions;

// Exporting the reducer function
export default dataSlice.reducer;
