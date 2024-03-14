import React, { useEffect, useState } from "react";

export default function InfoCatd({ infosData }) {
  return (
    <div>
      {infosData.map((data) => (
        <div className=" flex items-center  w-52 h-32 my-6 bg-white rounded-3xl shadow-md p-6 ">
          <div className= " flex flex-col gap-y-4 font-RobotoBlack text-lg font-bold text-Gray/900 mr-2  ">
            <h1 className=" text-nowrap" >{data.title}</h1>
            <h1 className=" font-bold text-[40px]">{data.count}</h1>
          </div>          
            {data.percent > 0 ? (
              <div className=" flex justify-center rounded-full items-center font-RobotoMedium font-bold text-lg w-[4.75rem] h-[2.2rem] bg-Success/100 text-Success/700">
                <h1>{"+"+ data.percent + "%"}</h1>
              </div>
            ) : (
              <div className="flex justify-center items-center font-RobotoMedium font-bold text-lg rounded-full w-[4.75rem] h-[2.2rem] bg-Error/100 text-Error/500">
                <h1 >{data.percent + "%"}</h1>
              </div>
            )}
        </div>
      ))}
    </div>
  );
}
