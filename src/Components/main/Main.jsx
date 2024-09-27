import React, { useState } from "react";
import SelectBox from "./SelectBox";
import CartMoney from "./CartMoney";
// import Chart from "../chart/Chart";
import Chart from "../../modules/chart/Chart";
import { chartData } from "../../datas/datas";
import InfoCatd from "./InfoCatd";
import { infos } from "../../datas/datas";
import Emails from "./Emails";

export default function Main() {
  const[infosData,setInfosData]=useState(infos)
  
  return (
    <div className="">
      <SelectBox />
      <CartMoney />
      <div className="xl:flex xl:flex-row-reverse">
      <Chart  grid  data={chartData} />
        <InfoCatd infosData={infosData} />
       
      </div>
      <Emails/>
    </div>
  );
}
