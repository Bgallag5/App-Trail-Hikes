import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative flex flex-row gap-5 !h-96 my-12 border-grey border-t-[2px]">
      <div className=" w-1/2 mt-12 pl-12 flex justify-center">
        <a href="#" aria-label="home page">
          {/* <Image
            width={75}
            height={40}
            alt="logo"
            src={require("../assets/images/logo.svg")}
          /> */}
          <h1 className="font-lg text-green-500">App Trail Hikes</h1>
        </a>
      </div>

      <div className=" w-1/2 mt-12 font-bold border-slate-900 border-l-[1px] pl-24 flex flex-row gap-24 justify-start">
        <ul className="flex flex-col gap-4">
          <p className="text-slate-500 font-md">More</p>
          <li>Blog</li>
          <li>Privacy</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <p className="!text-light">Resources</p>
          <li>Courses</li>
          <li>Hacks</li>
          <li>Free Stuff</li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 flex flex-row  justify-between w-full">
          <p className="text-sm font-extralight m-auto">@copywrite 2020 All rights reserved</p>
          <div className="flex flex-row gap-6 text-gray-600 m-auto">
              <p>Li</p>
              <p>Fb</p>
              <p>Tw</p>
          </div>
      </div>
    </div>
  );
}
