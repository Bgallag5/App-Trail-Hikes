import React, { useRef, useEffect } from "react";

import headerImg from "../assets/images/trail-pic-2.jpeg";
import headerImg2 from "../public/trail-pic-1.jpeg";
import PageHeader from "../components/UI/PageHeader";
import Image from "next/image";
import discoverImg from "../assets/images/app-map3.png";
import dayHikeImg from '../assets/images/trail-pic-8.jpeg'; 
import backpackingImg from '../assets/images/trail-pic-6.jpeg';

export default function home() {
  return (
    <div className="page-container flex-col">
      <PageHeader
        imgSrc={headerImg}
        imgSrc2={headerImg2}
        title="Appalachian Trail"
        subtitle="Find the Outdoors"
      />
      <div className="content">
        <div className="flex flex-row w-full h-[40vh] mt-[3rem] justify-center gap-5 items-center">
          <div className="w-1/2 h-full flex flex-col items-start">
            <h2 className="content__title">Discover the Trail</h2>
            <p className="w-11/12">
              The Appalachian Trail is an intimidating 2,000 mile long
              wilderness hiking trail that traverses the culturally resonant
              lands of the United State's East Coast. Spanning from Georgia in
              the South to Maine in the North, the App Trail winds it's way
              through scenic, wooded, pastoral, wild, and sometimes wet
              landscapes. Each year the trail hosts thousands of outdoor
              enthusiasts who come for hiking, camping, backpacking, and
              geocaching. Conceived in 1921, built by private citizens, and
              completed in 1937, today the trail is managed by the National Park
              Service, US Forest Service, Appalachian Trail Conservancy,
              numerous state agencies and thousands of volunteers.
            </p>
          </div>
          <div className="relative flex h-full w-2/5 object-cover shadow-sm shadow-black">
            <Image src={discoverImg} alt="woods" layout="fill" />
          </div>
        </div>
        <div className="flex flex-row-reverse h-[40vh] mt-[5rem] w-full justify-center gap-10 items-center">
          <div className="w-1/2 h-full flex flex-col items-start ">
            <h2 className="content__title">Guided Hikes</h2>
            <p className="w-full ">
           The Appalachian trail offers a variety of activities, but most people come for the hiking. Both Day Hiking and Muli-Day Hiking, also called Backpacking, are the two most popular uses for the trail. 
          Our Day Hike program is the perfect place to start for new or inexperienced hikers. Guided Day hikes are between 3-6 hours long with one or more of our guides. The minimun age for participants is 10 years old, but all parents are urged to consider their child's abilities, as the hikes can be challenging.  
            </p>
          </div>

          <div className="relative flex h-full w-2/5 object-cover shadow-sm shadow-black">
            <Image src={dayHikeImg} alt="woods" layout="fill" />
          </div>
        </div>
        <div className="flex flex-row h-[40vh] mt-[5rem] w-full justify-center gap-5 items-center">
          <div className="w-1/2 h-full flex flex-col items-start">
            <h2 className="content__title">Backpacking Expeditions</h2>
            <p className="w-full ">
           A big step up from day hiking. Guided Backpacking expeditions are the newest offering from the App Trail Hikes team! Join two of our expert wilderness guides for multiple days and nights on the Appalachian Trail. 
           Recommened only for experienced hikers and outdoors persons, or those looking for a challenging experience they will remember the rest of their lives. Most gear is provided by our team, (see our Packing List), so all you need to do is show up ready to rough it. Each Expedition is between 5 and 14 days, and participants can expect to hike between 6-10 miles each day. 
            </p>
          </div>

          <div className="relative flex h-full w-2/5 object-cover shadow-sm shadow-black">
            <Image src={backpackingImg} alt="woods" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
