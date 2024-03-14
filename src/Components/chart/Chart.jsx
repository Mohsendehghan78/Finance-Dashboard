import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data, title, grid }) {
  return (
    <div className=" flex flex-col justify-between absolute right-0 w-[35rem]  h-[18rem] text-Gray/900 bg-white rounded-3xl mt-6 py-2 font-RobotoMedium font-normal text-[9px] shadow-md ">
      <h1 className="pl-8  mb-6 font-RobotoBlack font-medium text-xl">
        {title}
      </h1>
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} y={5} strokeDasharray="3 " />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="Withdrawal"
            stroke="#101828"
            activeDot={{ r: 2 }}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="deposit"
            stroke="#6941C6"
            strokeWidth={3}
          />
        </LineChart>
        <div className=" flex justify-start items-center pl-9 gap-2 font-normal text-xs mt-6 ">
          <span className=" flex justify-between items-center gap-2">
            <div div className=" w-2 h-2 bg-Brand/700 rounded-full"></div>
            <h1>deposit</h1>
          </span>
          <span className=" flex justify-between items-center gap-2">
            <div className=" w-2 h-2 bg-Gray/900 rounded-full"></div>
            <h1>Withdrawal</h1>
          </span>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
