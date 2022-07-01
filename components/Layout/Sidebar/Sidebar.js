import React from 'react';
import SideBarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <div className="flex relative flex-col w-40 h-full bg-stone-800 hover:w-56 transition-all duration-300">
      <div className='my-8'>
        <ul>
        <SideBarItem name='Home' /> 
        <SideBarItem name='About' />
        <SideBarItem name='Day Hiking' />
        <SideBarItem name='Multi-Day Hiking' />
        <SideBarItem name='Camping' />
        </ul>
      </div>
    </div>
  )
}
