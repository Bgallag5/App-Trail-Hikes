import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky z-1 flex flex-row justify-between items-center px-10 h-16 bg-green-700 text-white shadow-md">
      <div className='font-bold text-xl'>Appalachian Hikes</div>
      <nav>
        <ul className="flex flex-row justify-between items-center gap-6 ">
          <li>
            <Link href='/'>Find Hikes</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
