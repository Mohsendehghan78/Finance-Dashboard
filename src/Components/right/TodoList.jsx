import React from "react";
import RightHeader from "./RightHeader";
import RightMain from "./RightMain";
import RightToDO from "./RightToDO";
import RightFooter from "./RightFooter";
export default function TodoList() {
  return (
    
      <div 
      className=" w-[303px] h-[883px] mt-10 mr-10  gap-4 py-6 px-4  bg-white rounded-[32px] "
      >
        <RightHeader />
        <RightMain />
        <RightToDO />
        <RightFooter/>
      </div>
    
  );
}
