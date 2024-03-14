import "./App.css";
import RightMenu from "./Components/right/RightMenu";
import LeftMenu from "./Components/left/LeftMenu";
import Main from "./Components/main/Main";
import TodoPortal from "./Components/right/TodoPortal";
function App() {
  return (
    <>
      <div className=" relative flex justify-between  max-w-[1366px] bg-Gray/100 h-[1024px] ">
        <div >
          <LeftMenu />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <RightMenu />
        </div>
      </div>
    </>
  );
}

export default App;
