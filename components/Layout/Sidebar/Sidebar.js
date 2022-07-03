import React from 'react';
import SideBarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <div className="flex relative flex-col w-40 h-auto min-h-screen bg-stone-800 hover:w-56 transition-all duration-300">
      <div className='my-8'>
        <ul>
        <SideBarItem name='Home' path="/home"  /> 
        <SideBarItem name='About' path="/about" />
        <SideBarItem name='Guided Hikes' path="/guided-hikes" />
        {/* <SideBarItem name='Camping' path="/camping" />
        <SideBarItem name='Our Guides' path="/guides" /> */}
        </ul>
      </div>
    </div>
  )
}
