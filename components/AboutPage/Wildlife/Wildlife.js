import React from "react";
import WildlifeTabs from "./WildlifeTabs";

import Image from "next/image";
import wildlifeImg1 from "../../../assets/images/wildlife1.png";
import wildlifeImg2 from "../../../assets/images/wildlife2.jpeg";
import wildlifeImg3 from "../../../assets/images/wildlife5.jpeg";

export default function Wildlife(props) {

    const {activeTab, title} = props;

  return (
    <div className={activeTab === title ? '' : 'hidden'}>
      <div className="flex flex-row-reverse h-[40vh] w-10/12 justify-center  gap-1 items-center m-auto">
        <div className="w-1/2 h-full flex flex-col items-start">
          <h2 className="content__title">Wildlife</h2>
          <p className="w-full">
            GENERAL WILDLIFE BIO - The Appalachian trail offers a variety of
            activities, but most people come for the hiking. Both Day Hiking and
            Muli-Day Hiking, also called Backpacking, are the two most popular
            uses for the trail. Our Day Hike program is the perfect place to
            start for new or inexperienced hikers. Guided Day hikes are between
            3-6 hours long with one or more of our guides. The minimun age for
            participants is 10 years old, but all parents are urged to consider
            their child's abilities, as the hikes can be challenging.
          </p>
        </div>

        {/* <div className="flex relative flex-col h-full w-1/2 justify-center items-center"> */}
        <div className="relative h-full w-1/2 flex justify-center items-center wildlife__images">
          <img
            src={wildlifeImg2}
            alt="wildlife"
            className="wildlife-img wildlife-img--1 page-image"
          ></img>
          <img
            src={wildlifeImg1}
            alt="wildlife"
            className="wildlife-img wildlife-img--2 page-image"
          ></img>
          <img
            src={wildlifeImg3}
            alt="wildlife"
            className="wildlife-img wildlife-img--3 page-image"
          ></img>
        </div>
        {/* </div> */}
      </div>
      <WildlifeTabs />
    </div>
  );
}
