import React from "react";

export default function RightMain() {
  return (
    <div className=" w-68 h-[276px] rounded-[24px] border border-Gray/200 p-6 gap-5 shadow-md mt-5 text-Gray/900">
      <div className=" mb-4">
        <h1 className=" font-RobotoBlack text-2xl ">Formation status</h1>
        <h3 className=" font-RobotoMedium text-base">In progress</h3>
      </div>
      <div className=" flex flex-col items-center justify-between w-[223px] h-[154px] ">
        <div className=" w-[218px] h5 bg-Gray/300 rounded-2xl ">
          <div className=" w-[152px] h-5 bg-Brand/700 rounded-2xl"></div>
        </div>

        <div>
          <h3 className="font-RobotoMedium text-base">Estimated processing</h3>
          <h3 className="font-RobotoMedium text-base text-Gray/500">
            4-5 business days
          </h3>
        </div>
        <div className="w-[223px] h-[42px] bg-Brand/700 rounded-lg p-2 cursor-pointer">
          <h1 className=" font-RobotoBlack text-white text-base flex items-center justify-center">
            View status
          </h1>
        </div>
      </div>
    </div>
  );
}
