import React, { useState } from 'react'
import { emails } from '../../datas/datas';

export default function Emails() {
    const [emanilDatas,setEmanilDatas]=useState(emails)
  return (
    <div className=' w-full'>
        <h1 className=' font-RobotoBlack font-bold text-2xl text-Gray/900 mb-2'>Emails</h1>
        {emanilDatas.map(data=>(
            <div className=' grid grid-flow-row grid-cols-5  w-full bg-white rounded-lg px-4 py-2 mb-2 font-RobotoMedium font-normal text-base text-Gray/900'>
            <div ><img className=' w-10 h-10 rounded-full ' src={data.img} alt="" /></div>
            <div >{data.name}</div>
            <div className=' col-span-2'> {data.story}</div>
            <div> {data.date}</div>
        </div>
        ))}
        
    </div>
  )
}
