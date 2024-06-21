import React from "react";
import Header from "./Header";
import LastestEnrollMent from "./LastestEnrollMent";
import BestStudent from "./BestStudent";
const index = () => {
  return (
    <div className="bg-[#F4F4F4] w-[93%] ml-[12%] lg:ml-[7%] px-[1rem] lg:px-[2rem] py-3 ">
      <Header />
      <LastestEnrollMent />
      <BestStudent />
    </div>
  );
};

export default index;
