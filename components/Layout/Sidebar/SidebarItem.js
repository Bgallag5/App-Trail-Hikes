import React from 'react'

export default function SidebarItem(props) {
    const {name} = props;
  return (
    <div className='sidebar__item w-full h-16 bg-green-800 relative text-white p-3 flex justify-center items-center mb-1 cursor-pointer text-center'>
      {/* <div className='absolute top-0 left-0 h-full w-full hidden bg-red-300 justify-center items-center'> */}
        <span className='z-30'>{name}</span>
        {/* </div> */}
    </div>
  )
}
