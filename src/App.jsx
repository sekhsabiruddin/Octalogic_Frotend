import "tailwindcss/tailwind.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./redux/reducer/course";
import Data from "./Data/Data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("musicClasses")) || [];
    if (storedData.length > 0) {
      dispatch(setData(storedData));
    } else {
      dispatch(setData(Data));
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <HomePage />
    </>
  );
}

export default App;
