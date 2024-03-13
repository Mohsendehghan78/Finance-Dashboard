import React from 'react'

export default function RightFooter() {
  return (
    <div className=' flex flex-col justify-between  h-[124px] mt-6 p-4 space-y-4'>
        <h1 className=' text-base font-RobotoBlack text-Gray/900'>Board meeting</h1>
        <h1 className=' text-sm font-RobotoMedium text-Gray/400'>Feb 22 at 6:00 PM</h1>
        <h1 className=' text-xs leading-5 font-RobotoMedium text-Gray/400'>You have been invited to attend a <br />
meeting of the Boeard Diretors.</h1>
    </div>
  )
}
