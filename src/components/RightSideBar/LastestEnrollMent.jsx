import React from "react";

const LastestEnrollMent = () => {
  const data = [
    {
      enrno: 1563124,
      sname: "John",
      cname: "Percussion",
      fees: "$120",
      enrdate: "12-08-223",
    },
    {
      enrno: 1563125,
      sname: "Jane",
      cname: "Guitar",
      fees: "$150",
      enrdate: "15-08-223",
    },
    {
      enrno: 1563126,
      sname: "Alice",
      cname: "Flute",
      fees: "$100",
      enrdate: "17-08-223",
    },
    {
      enrno: 1563127,
      sname: "Bob",
      cname: "Violin",
      fees: "$130",
      enrdate: "19-08-223",
    },
  ];

  return (
    <div className="mt-3">
      <div className="flex justify-between my-4">
        <h1 className="font-sans text-[#83858B] font-bold text-[16px]">
          LATEST ENROLMENTS
        </h1>
        <span className="text-[#901E75] text-[14px]">View All Courses</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#ffffff]">
            <tr>
              <th className="px-2 py-3 text-center  font-bold text-[#212529] ">
                Enr. No
              </th>
              <th className="px-2 py-3 text-center  font-bold text-[#212529]">
                Student Name
              </th>
              <th className="px-2 py-3 text-center  font-bold text-[#212529]">
                Course Name
              </th>
              <th className="px-2 py-3 text-center  font-bold text-[#212529]">
                Fees
              </th>
              <th className="px-2 py-3 text-center  font-sans font-bold text-[#212529]">
                Enroll Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.enrno} className="text-sm">
                <td className="text-center py-2">{item.enrno}</td>
                <td className="text-center px-3 py-2 whitespace-nowrap">
                  {item.sname}
                </td>
                <td className="text-center px-3 py-2 whitespace-nowrap">
                  {item.cname}
                </td>
                <td className="text-center px-3 py-2 whitespace-nowrap">
                  {item.fees}
                </td>
                <td className="text-center px-3 py-2 whitespace-nowrap">
                  {item.enrdate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastestEnrollMent;
