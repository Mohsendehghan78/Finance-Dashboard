import React from "react";

import TodoList from "../../Components/right/TodoList";
// import Menu from "./Components/left/LeftMenu";
import Menu from "../../Components/menu";
import Main from "../../Components/main/Main";
function Dashboard() {
  return (
    // <div className=" relative flex justify-between  max-w-[1366px] bg-Gray/100 h-[1024px] ">
    <div className=" flex w-[100%] justify-between mt-4 ">
      <Menu />
      <Main />
      <TodoList />
    </div>
  );
}

export default Dashboard;
