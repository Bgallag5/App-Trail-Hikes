import React from 'react'

export default function SidebarItem(props) {
    const {name} = props;
  return (
    <div className='w-full bg-green-800 text-white p-3 flex justify-center mb-1 cursor-pointer hover:scale-100 hover:bg-green-600 transition-all duration-700'>
        <span>{name}</span>
    </div>
  )
}
