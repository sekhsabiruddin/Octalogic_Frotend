import React from "react";
import User from "../../assets/People.svg";

const dataText = [
  {
    id: 1,
    amount: 164,
    text: "Total Number of students",
  },
  {
    id: 2,
    amount: 12,
    text: "Total Number of courses",
  },
  {
    id: 3,
    amount: 2000,
    text: "Total amount earned",
  },
  {
    id: 4,
    amount: "Guitar",
    text: "Best performing course",
  },
  {
    id: 5,
    amount: "Flute",
    text: "Worst performing course",
  },
];

const Header = () => {
  return (
    <div>
      <h2 className="text-2xl my-2 font-sans text-[#83858B]">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {dataText.map((item) => (
          <div key={item.id} className="bg-white p-2 grid grid-cols-12 gap-2">
            <div className=" col-span-3 md:col-span-2 lg:col-span-3">
              <img src={User} alt="User" className="w-[32px] h-auto" />
            </div>
            <div className=" col-span-9 md:col-span-10 lg:col-span-9">
              <h3 className="text-xl font-bold">{item.amount}</h3>
              <p className="text-[0.8rem]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
