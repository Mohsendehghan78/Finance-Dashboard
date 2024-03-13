import React, { useState } from "react";
import { TbSmartHome } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { RiBankLine } from "react-icons/ri";
import { LiaSmsSolid } from "react-icons/lia";
import { IoPeopleOutline } from "react-icons/io5";
import { RiFileReduceLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function LeftMenu() {
  const [datas, setDatas] = useState([
    { id: 1, titile: " Dashboard", icon: <TbSmartHome /> },
    { id: 2, titile: " Report", icon: <BiBarChartSquare /> },
    { id: 3, titile: " Bank", icon: <RiBankLine /> },
    { id: 4, titile: " Email", icon: <LiaSmsSolid /> },
    { id: 5, titile: "  Group", icon: <IoPeopleOutline /> },
    { id: 6, titile: "  List", icon: <RiFileReduceLine /> },
    { id: 7, titile: " Finance", icon: <RiMoneyDollarCircleLine /> },
  ]);

  const [sidebarStutus, setSideBarStutus] = useState(null);

  const menuHandler = () => {
    setSideBarStutus((prev) => !prev);
  };
  return (
    <div
      style={sidebarStutus ? { width: "185px" } : { width: "100px" }}
      className=" fixed left-0 top-0   h-screen transition-all delay-20 duration-75"
    >
      <div
        style={sidebarStutus ? { width: "169px " } : { width: "84px" }}
        className=" fixed left-0 top- h-screen bg-Brand/700 px-8 py-[22px] text-white transition-all delay-20  duration-75 "
      >
        <div className="flex justify-center items-center mb-20">
          <h1 className=" font-RAmitaBold font-bold text-xl  ">Drop</h1>
        </div>
        {/* menu */}{" "}
        <ul className=" [&>*]:mb-10">
          {datas.map((data) => (
            <li>
              <a href="#" className="flex items-center justify-start">
                <span className=" [&>*]:w-6 [&>*]:h-6 [&>*]:mr-4 ">
                  {data.icon}
                </span>

                <h1 className=" font-RobotoMedium font-medium text-4">
                  {sidebarStutus && data.titile}
                </h1>
              </a>
            </li>
          ))}
        </ul>
        {/* bottom */}
        <div className=" absolute bottom-3 flex items-center justify-between">
          <AiOutlineSetting className=" w-6 h-6 mr-4" />
          <h1 className=" font-RobotoMedium font-medium text-4">
            {sidebarStutus && "Setting"}
          </h1>
        </div>
      </div>
      {/* open menu icon */}

      <span
        onClick={menuHandler}
        className=" absolute top-[87px] right-0 flex justify-center items-center rounded-full  w-8 h-8 bg-white shadow-md"
      >
        {!sidebarStutus && <IoIosArrowForward className="text-Brand/700" />}

        {sidebarStutus && <IoIosArrowBack className="text-Brand/700" />}
      </span>
    </div>
  );
}
