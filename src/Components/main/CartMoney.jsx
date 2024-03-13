import React, { useState } from 'react'
import { cart } from '../../datas/datas'
export default function CartMoney() {

    const[carts,setCarts]=useState(cart)

  return ( 
    // cart container 
    <div className=' flex justify-between items-center gap-x-6 mt-10  '>
        {/* cart */}
        {carts.map(cart=>(
           <div className=' flex flex-col justify-between w-full md:w-48 h-40 bg-white  text-Gray/900 rounded-3xl shadow-md  p-4'>
            <span className=' [&>*]:w-6 [&>*]:h-6'>{cart.icon}</span>
            <h1 className=' font-RobotoBlack text-3xl font-bold'>{cart.money}</h1>
            <h6 className=' font-RobotoMedium text-Gray/600 text-sm font-bold'>{cart.describ}</h6>
        </div>
        ))}   
    </div>
  )
}
