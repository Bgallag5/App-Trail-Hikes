import React, {useRef, useEffect} from 'react';
import SideBarItem from './SidebarItem';

export default function Sidebar() {
  const sidebarRef = useRef();


  // body.onscroll

useEffect(() => {
// console.log(sidebarRef.current.style.scrollY);
},  )

// console.log(sidebarRef?.current.style.scrollY);



  return (
    <div className="flex relative flex-col w-40 h-auto min-h-screen bg-stone-800 hover:w-56 transition-all duration-300">
      <div ref={sidebarRef} className='my-8 sidebar'>
        <ul>
        <SideBarItem name='Home' path="/home" /> 
        <SideBarItem name='About' path="/about" />
        <SideBarItem name='Guided Hikes' path="/guided-hikes" />
        {/* <SideBarItem name='Camping' path="/camping" />
        <SideBarItem name='Our Guides' path="/guides" /> */}
        </ul>
      </div>
    </div>
  )
}
