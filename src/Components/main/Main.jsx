import React, { useState } from "react";
import SelectBox from "./SelectBox";
import CartMoney from "./CartMoney";
import Chart from "../chart/Chart";
import { chartData } from "../../datas/datas";
import InfoCatd from "./InfoCatd";
import { infos } from "../../datas/datas";
import Emails from "./Emails";

export default function Main() {
  const[infosData,setInfosData]=useState(infos)
  
  return (
    <div className=" absolute left-[215px] top-8 right-[366px] ">
      <SelectBox />
      <CartMoney />
      <div className=" flex">
        <InfoCatd infosData={infosData} />
        <Chart grid title={"Revenue"} data={chartData} />
      </div>
      <Emails/>
    </div>
  );
}
