import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
export default function RightHeader() {
  return (
    <div className=" flex justify-around items-center text-Gray/900">
      <span >
        <MdOutlineCalendarMonth className="w-[28px] h-[28px] cursor-pointer" />
        
      </span>
      <span>
        <IoNotificationsOutline className="w-[28px] h-[28px] cursor-pointer" />
      </span>
      <span>
        <AiOutlineMessage className="w-[28px] h-[28px] cursor-pointer" />
      </span>

      <img
        className=" w-[42px] h-[42px] rounded-full cursor-pointer"
        src="/images/86efa3df337e8c215dd8095476bb6513.jpeg"
        alt=""
      />
      <span>
        <IoIosArrowDown className="w-[28px] h-[28px] cursor-pointer" />
      </span>
    </div>
  );
}
