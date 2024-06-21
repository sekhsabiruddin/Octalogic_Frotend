import React from "react";

const BestStudent = () => {
  const data = [
    {
      regno: 434222,
      fanme: "Michael",
      lname: "Saxophone",
      course: 3,
      toalfees: "$140",
      regdate: "21-08-223",
    },
    {
      regno: 434223,
      fanme: "Emily",
      lname: "Piano",
      course: 2,
      toalfees: "$120",
      regdate: "15-09-223",
    },
    {
      regno: 434224,
      fanme: "James",
      lname: "Guitar",
      course: 1,
      toalfees: "$60",
      regdate: "03-07-223",
    },
    {
      regno: 434225,
      fanme: "Sophia",
      lname: "Violin",
      course: 4,
      toalfees: "$180",
      regdate: "11-10-223",
    },
    {
      regno: 434226,
      fanme: "William",
      lname: "Drums",
      course: 3,
      toalfees: "$140",
      regdate: "29-08-223",
    },
  ];

  return (
    <div>
      <div className="flex justify-between my-4">
        <h1 className="font-sans text-[#83858B] font-bold text-[16px]">
          BEST STUDENTS
        </h1>
        <span className="text-[#901E75] text-[14px]">View All Courses</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 py-3 text-center font-sans font-bold text-[#212529]">
                Reg. No
              </th>
              <th className="px-2 py-3 text-center font-sans font-bold text-[#212529]">
                F.Name
              </th>
              <th className="px-2 py-3 text-center font-sans font-bold text-[#212529]">
                L.Name
              </th>
              <th className="px-2 py-3 text-center font-sans font-bold text-[#212529]">
                Course
              </th>
              <th className="px-2 py-3 text-center font-sans font-bold text-[#212529]">
                Total Fees
              </th>
              <th className="px-2 py-3 text-center font-sans font-bold text-[#212529]">
                Reg. Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.regno} className="text-sm">
                <td className="px-2 py-2 text-center">{item.regno}</td>
                <td className="px-2 py-2 text-center">{item.fanme}</td>
                <td className="px-2 py-2 text-center">{item.lname}</td>
                <td className="px-2 py-2 text-center">{item.course}</td>
                <td className="px-2 py-2 text-center">{item.toalfees}</td>
                <td className="px-2 py-2 text-center">{item.regdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestStudent;
