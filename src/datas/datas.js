//todos
import { TbReceipt } from "react-icons/tb";
import { BsClock } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { BsClipboardCheck } from "react-icons/bs";
//carts
import { BiWallet } from "react-icons/bi";
import { TbChartArcs } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { MdAddCard } from "react-icons/md";

const todolist = [
  {
    id: 1,
    title: "Run payroll",
    date: "Mar 4 at 6:00 pm",
    icon: <TbReceipt />,
  },
  {
    id: 2,
    title: "Review time off request",
    date: "Mar 7 at 8:00 pm",
    icon: <BsClock />,
  },
  {
    id: 3,
    title: "Sign board resoluation",
    date: "Mar 12 at 8:30 pm",
    icon: <LuClipboardList />,
  },
  {
    id: 4,
    title: "Finish onboarding Tony",
    date: "Mar 12 at 9:30 pm",
    icon: <BsClipboardCheck />,
  },
];

export { todolist };

//main carts

const cart = [
  {
    id: 1,
    money: "$143.223",
    icon: <BiWallet />,
    describ: "Your bank balance",
  },
  { id: 2, money: "$43.110", icon: <TbChartArcs />, describ: " Your Tax" },
  {
    id: 3,
    money: "24",
    icon: <IoWalletOutline />,
    describ: "Employees working today",
  },
  {
    id: 4,
    money: "$3.287",
    icon: <MdAddCard />,
    describ: "This week`scard spending",
  },
];

export { cart };

//chart
const chartData = [
  {
    name: "Monday",
    deposit: 24000,
    Withdrawal: 4000,
  },
  {
    name: "Tuesday",
    deposit: 18000,
    Withdrawal: 1000,
  },
  {
    name: "Wednesday",
    deposit: 14000,
    Withdrawal: 5000,
  },
  {
    name: "Thursday",
    deposit: 16000,
    Withdrawal: 13000,
  },
  {
    name: "Friday",
    deposit: 10000,
    Withdrawal: 6000,
  },
];
export { chartData };
//info card

const infos = [
  {
    id: 1,
    title: "New Clients",
    count: 54,
    percent: +18.7,
  },
  {
    id: 2,
    title: "invoice overdue",
    count: 6,
    percent: -2.7,
  },
];
export { infos };

// Emails datas

const emails = [
  {
    id: 1,
    img: "/images/3a906b3de8eaa53e14582edf5c918b5d.jpeg",
    name: "Livia Stanton",
    story: "Meeting scheduled",
    date: "1:24 PM",
  },
  {
    id: 2,
    img: "/images/ad868d019f92ce267e6de23af3413e5b.jpeg",
    name: "Allison Lipshutz",
    story: "Update on marketing campaign",
    date: "12:14 PM",
  },
  {
    id: 3,
    img: "/images/d958cf406bb83c3c0a93e2f03fcb0bef.jpeg",
    name: "Martin Stanton",
    story: "Designly 2.0 is about to launch",
    date: "Dec 19 at 8:01 PM",
  },
  {
    id: 4,
    img: "/images/9c4d361cb9f54e38261e75afcd23b9b1.jpeg",
    name: "Alfredo Botosh",
    story: "My friend Julie loves Dapper!",
    date: "Dec 19 at 6:11 PM",
  },
  {
    id: 5,
    img: "/images/33f7c5aeefcef842ee93a1ac6a6adbf2.jpeg",
    name: "Ann Philips",
    story: "My friend Julie loves Dapper!",
    date: "Dec 19 at 6:11 PM",
  },
];
export { emails };

//check box datas :

const checkBoxDatas = [
  { id: 1, stutus: true, title: "Menu item" },
  { id: 2, stutus: true, title: "Menu item" },
  { id: 3, stutus: true, title: "Menu item" },
  { id: 4, stutus: true, title: "Menu item" },
  { id: 5, stutus: true, title: "Menu item" },
];
export { checkBoxDatas };


// persons data :
const personsData=[
  {id:1,img:"/images/c18fa9218cd2c0b5b6f857e25888b3ec.png",name:"Matin abbasi/0234"},
  {id:2,img:"/images/5decaabbc70ba7329ff8102758222e8f.png",name:"Matin ghadri/0874"},
  {id:3,img:"/images/9910ab5643d5105364c6da4e7eed1822.png",name:"Matin kazemi/0987"},
  {id:4,img:"/images/9d572da00d9161455160b8a76a17e2cc.png",name:"Matin hasani/0877"},
  {id:5,img:"/images/f06f4a0248f648793bf12a11cc08dd22.png",name:"Matin mohammadi/0845"},
  {id:6,img:"/images/cc80dfb1ca56228795a9d3f3a3bd3624.png",name:"Matin alipour/0457"},
]
export { personsData}