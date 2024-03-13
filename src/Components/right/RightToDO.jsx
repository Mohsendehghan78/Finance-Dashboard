import React, { useState } from "react";

import { todolist } from "../../datas/datas";
import { FiPlusSquare } from "react-icons/fi";
import TodoPortal from "./TodoPortal";
export default function RightToDO() {
  const [todos, setTodos] = useState(todolist);
  const [TodoPortalStatus, setTodoPortalStatus] = useState(false);

  const openPortal = () => {
   return setTodoPortalStatus(!TodoPortalStatus);
  };
 

  return (
    <>
    
      <div className=" flex flex-col justify-between my-4 text-Gray/900 ">
        {/* top */}
        <h1 className=" font-RobotoBlack text-2xl ">Your to-Do list</h1>
        {/* middle */}
        {todos.map((todo) => (
          <div className=" flex items-center justify-between my-3">
            <div className=" w-10 h-10 rounded-2xl mr-4 p-2 bg-Brand/50 flex items-center justify-center [&>*]:text-2xl">
              {todo.icon}
            </div>
            <div className=" flex flex-col items-start justify-center flex-grow ">
              <h1 className="  font-RobotoBlack text-base">{todo.title}</h1>
              <h1 className=" font-RobotoMedium text-xs text-Gray/400">
                {todo.date}
              </h1>
            </div>
          </div>
        ))}
        <div
          onClick={openPortal}
          className="flex items-center justify-start cursor-pointer my-3"
        >
          <div className="w-10 h-10 rounded-2xl mr-4 p-2 bg-Brand/200 flex items-center justify-center [&>*]:text-2xl">
            <FiPlusSquare />
          </div>
          <h1 className="font-RobotoBlack  text-base">Add to Do</h1>
        </div>

        {/* bottom */}
      </div>
      {TodoPortalStatus && ( <div >
          <TodoPortal status={TodoPortalStatus}  />
        </div>)}
       
      
    </>
  );
}
