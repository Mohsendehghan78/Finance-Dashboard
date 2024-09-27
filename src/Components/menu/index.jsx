import React, { useState, useEffect } from "react";
import { TbSmartHome } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { RiBankLine } from "react-icons/ri";
import { LiaSmsSolid } from "react-icons/lia";
import { IoPeopleOutline } from "react-icons/io5";
import { RiFileReduceLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Menu() {
  const [datas, setDatas] = useState([
    { id: 1, title: "Dashboard", icon: <TbSmartHome /> },
    { id: 2, title: "Report", icon: <BiBarChartSquare /> },
    { id: 3, title: "Bank", icon: <RiBankLine /> },
    { id: 4, title: "Email", icon: <LiaSmsSolid /> },
    { id: 5, title: "Group", icon: <IoPeopleOutline /> },
    { id: 6, title: "List", icon: <RiFileReduceLine /> },
    { id: 7, title: "Finance", icon: <RiMoneyDollarCircleLine /> },
  ]);

  const [sidebarStatus, setSidebarStatus] = useState(null);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setSidebarStatus((prev) => !prev);
  };

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth <= 768);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   console.log( window.addEventListener("resize", handleResize));
    
 
  // }, []);

  return (
    <>
      
        {/* <div className="menu-icon fixed top-4 left-4">
          <IoMenu size={30} onClick={toggleSidebar} />
        </div> */}
   
        <div className="menu mr-48">
          <div
            style={sidebarStatus ? { width: "185px" } : { width: "100px" }}
            className="sidebar fixed left-0 top-0 h-screen transition-all duration-75"
          >
            <div
              style={sidebarStatus ? { width: "169px" } : { width: "84px" }}
              className="sidebar-content fixed left-0 top-0 h-screen bg-Brand/700 px-8 py-[22px] text-white transition-all duration-75"
            >
              <div className="flex justify-center items-center mb-20">
                <h1 className="font-RAmitaBold font-bold text-xl">Drop</h1>
              </div>

              <ul className="menu-items">
                {datas.map((data) => (
                  <li key={data.id} className="mb-10">
                    <a href="#" className="flex items-center">
                      <span className="icon">{data.icon}</span>
                      <h1 className="title font-RobotoMedium font-medium">
                        {sidebarStatus && data.title}
                      </h1>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="bottom-section absolute bottom-3 flex items-center">
                <AiOutlineSetting className="w-6 h-6 mr-4" />
                <h1 className="font-RobotoMedium font-medium">
                  {sidebarStatus && "Setting"}
                </h1>
              </div>
            </div>

            <span
              onClick={toggleSidebar}
              className="toggle-icon absolute top-[87px] right-0 flex justify-center items-center rounded-full w-8 h-8 bg-white shadow-md"
            >
              {!sidebarStatus ? (
                <IoIosArrowForward className="text-Brand/700" />
              ) : (
                <IoIosArrowBack className="text-Brand/700" />
              )}
            </span>
          </div>
        </div>
      
    </>
  );
}
