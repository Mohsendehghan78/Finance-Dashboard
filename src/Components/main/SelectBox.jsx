import React, { useState } from "react";
import { checkBoxDatas } from "../../datas/datas";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
export default function SelectBox() {
  const [check, setCheck] = useState(checkBoxDatas);
  const [select, setSelect] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const clearCheck = () => {
    setSelect(false);
    setTimeout(() => {
      setSelect();
    }, 10);
  };

  const hasSubMeu = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <>
      <div className=" flex w-52 relative pt-2 rounded">
        {/* select box */}

        <span
          onClick={hasSubMeu}
          className=" select-none bg-white w-52 h-10 border border-Gray/900 rounded p-2  outline-none text-Gray/900 text-base font-normal font-RobotoMedium cursor-pointer "
        >
          <h1>select</h1>
        </span>
        {/* label */}
        <span className="select-none absolute top-0 left-4 bg-Gray/100 px-1 text-Gray/600 text-xs font-normal font-RobotoMedium ">
          Recent emails
        </span>
        {/* icon */}
        <span className=" cursor-pointer absolute top-5 left-44 ">
          <TiArrowSortedDown />
        </span>

        {/* submenu */}
        {/* search */}

        {showSubMenu && (
          <div className=" absolute top-14 w-full shadow-md py-2 px-4 rounded bg-white font-RobotoRegular font-normal text-base">
            <span className=" border border-Gray/900 rounded flex justify-between items-center mb-4 text-Gray/700">
              <span className=" p-2 [&>*]:w-5 [&>*]:h-5">
                <IoSearch />
              </span>
              <input
                className=" outline-none w-full"
                type="text"
                placeholder="Search values "
              />
            </span>
            {/* check box */}
            {check.map(
              (item) =>
                item && (
                  <span className=" flex justify-start items-center p-3 bg-Brand/50 rounded-sm mb-1 ">
                    <input
                      checked={select}
                      className=" w-5 h-5 mr-3 accent-Brand/700"
                      type="checkbox"
                    />
                    <label htmlFor="Menu item">{item.title}</label>
                  </span>
                )
            )}

            {/* btn */}

            <button className=" flex items-center justify-center w-full text-sm font-medium px-[70px] py-3 rounded bg-Brand/700 font-RobotoMedium text-white ">
              Apply
            </button>
            {/* features */}

            <div className=" flex items-center justify-between py-1 font-RobotoMedium font-normal text-xs">
              <span className=" text-nowrap">Selected: {check.length}</span>
              <span
                onClick={clearCheck}
                className=" cursor-pointer text-Blue/600 text-nowrap"
              >
                Clear selected
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
