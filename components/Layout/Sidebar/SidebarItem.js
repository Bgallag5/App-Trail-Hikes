import React from 'react';
import {useRouter} from 'next/router';

export default function SidebarItem(props) {
    const {name, path} = props;
    const router = useRouter();

    const handleSidebarClick = () => {
      router.push(path)
    }

  return (
    <div onClick={() => handleSidebarClick()} className='sidebar__item w-full h-16 bg-green-800 relative text-white p-3 flex justify-center items-center mb-1 cursor-pointer text-center'>
        <span className='z-10'>{name}</span> 
    </div>
  )
}
