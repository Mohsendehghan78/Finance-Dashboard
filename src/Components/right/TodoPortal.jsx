import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { personsData } from "../../datas/datas";

export default function TodoPortal(props) {
  const [persons, setPersons] = useState(personsData);
  const [select, setSelect] = useState(null);
  const [portal, setPortal] = useState(props.status);

 const closePortal=()=>{
  setPortal(!portal)
 }

  const clearSelected = () => {
    setSelect(false);
    setTimeout(() => {
      setSelect();
    }, 10);
  };

  
  return (
    <>
    {portal && ( <div className=" bg-black/40 backdrop-blur-sm w-full h-full fixed top-0 left-0 right-0  flex justify-center items-center font-RobotoMedium">
      <div className=" w-[44%]  px-6 py-4 bg-white  rounded font-RobotoMedium text-Gray/900">
        {/* header */}
        <div className=" flex items-center justify-center">
          <h1 className=" text-Brand/700 h-8  font-semibold  text-2xl pb-8">
            Add to do
          </h1>
        </div>

        {/* write a title */}
        <div className=" relative flex flex-col justify-center mb-6 h-16 ">
          <span className=" absolute top-0 left-3 w-[60px] h-4  bg-Gray/100 font-normal text-xs">
            write a title
          </span>
          <div className=" flex justify-between items-center h-14 border border-#79747E rounded p-4">
            <input
              className=" outline-none"
              type="text"
              placeholder="write a title"
            />
            <span className=" [&>*]:w-5 [&>*]:h-5 ">
              <IoCloseCircleOutline />
            </span>
          </div>
        </div>

        {/* add person */}
        <div className=" relative flex flex-col justify-center  h-16 ">
          <span className=" absolute top-0 left-3 w-[60px] h-4  text-nowrap bg-Gray/100 font-normal text-xs">
            add person
          </span>

          <div className=" flex justify-between items-center h-14 border border-#79747E rounded p-4">
            <div className=" flex justify-start items-center gap-x-2 rounded-full p-1 mr-2 bg-Brand/100">
              <img
                className=" w-6 h-6 rounded-full"
                src="/images/5decaabbc70ba7329ff8102758222e8f.png"
                alt=""
              />
              <h3 className=" text-nowrap">Matin abbasi</h3>
              <span>
                <IoCloseSharp />
              </span>
            </div>

            <span className=" [&>*]:w-5 [&>*]:h-5 absolute  right-4 ">
              <IoMdArrowDropdown />
            </span>
          </div>
        </div>
        {/* seletion area */}

        <div className=" max-h-[364px] border border-#79747E rounded px-3 py-2 ">
          {/* seaech */}
          <div className="flex justify-start items-center border border-#79747E rounded px-3 py-2 mb2 ">
            <span className=" [&>*]:w-5 [&>*]:h-5">
              <IoSearchSharp />
            </span>
            <input className=" outline-none  pl-5" type=" search" />
          </div>

          {/* persons */}
          <div>
            <div>
              {persons.map((person) => (
                <span className=" flex justify-start items-center px-3 py-2  text-base font-normal gap-x-3 bg-Brand/50 rounded-sm mb-1 ">
                  <input
                    checked={select}
                    className=" w-5 h-5 mr-3 accent-Brand/700"
                    type="checkbox"
                  />
                  <img
                    className=" w-6 h-6 rounded-full"
                    src={person.img}
                    alt=""
                  />
                  <label htmlFor="Menu item ">{person.name}</label>
                </span>
              ))}
            </div>
          </div>
          {/* sub person */}
          <div className="flex justify-between items-center text-xs font-normal my-2">
            <span className=" text-nowrap">Selected: {persons.length}</span>
            <span
              onClick={clearSelected}
              className=" cursor-pointer text-Blue/600 text-nowrap"
            >
              Clear selected
            </span>
          </div>
        </div>
        {/* btn */}
        <div className=" flex justify-end items-center mt-16">
          <button
            onClick={closePortal}
            className=" text-Brand/700 bg-Brand/100 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button onClick={closePortal} className=" bg-Brand/700 text-white px-4 ml-4 py-2 rounded">
            Accept
          </button>
        </div>
      </div>
    </div>)}
   
    </>
  );
}
