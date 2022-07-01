import React from "react";
import PageHeader from "../components/UI/PageHeader";
import imgSrc1 from "../assets/images/trail-pic-3.jpeg";
import imgSrc2 from "../assets/images/trail-pic-9.jpg";

import Image from "next/image";
import wildlifeImg1 from "../assets/images/wildlife1.png";
import wildlifeImg2 from "../assets/images/wildlife2.jpeg";
import wildlifeImg3 from "../assets/images/wildlife5.jpeg";

export default function about() {
  // const arrangePics = () => {

  // };

  // const wildlifePics = document.querySelectorAll('.wildlife-img').forEach(pic => {

  // })

  return (
    <div className="page-container flex-col">
      <PageHeader
        imgSrc={imgSrc1}
        imgSrc2={imgSrc2}
        title="About the Trail"
        subtitle="What to Expect"
      />
      <div className="content  flex flex-col">
        <div className=" w-full h-32">
          <h2 className="content__title">Page Nav</h2>
          <nav>
            <ul className="flex flex-row w-full gap-5">
              <li>Wildlife</li>
              <li>Packing List</li>
              <li>Directions</li>
              <li>Leave No Trace</li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row-reverse h-[40vh] w-full justify-center gap-10 items-center">
          <div className="w-1/2 h-full flex flex-col items-start ">
            <h2 className="content__title">Wildlife</h2>
            <p className="w-full ">
              GENERAL WILDLIFE BIO - The Appalachian trail offers a variety of
              activities, but most people come for the hiking. Both Day Hiking
              and Muli-Day Hiking, also called Backpacking, are the two most
              popular uses for the trail. Our Day Hike program is the perfect
              place to start for new or inexperienced hikers. Guided Day hikes
              are between 3-6 hours long with one or more of our guides. The
              minimun age for participants is 10 years old, but all parents are
              urged to consider their child's abilities, as the hikes can be
              challenging.
            </p>
          </div>

          <div className="relative flex h-full w-1/2 object-cover">
            <div className="relative h-full w-full">
              <img
                src={wildlifeImg2}
                alt="wildlife"
                className="wildlife-img wildlife-img--1"
              ></img>
              <img
                src={wildlifeImg1}
                alt="wildlife"
                className="wildlife-img wildlife-img--2"
              ></img>
              <img
                src={wildlifeImg3}
                alt="wildlife"
                className="wildlife-img wildlife-img--3"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 content mt-[8rem]">
          <div className="flex flex-row gap-6">
            <h2 className="text-lg text-black w-1/12  flex-0 flex uppercase">Bears:</h2>
            <p className="w-1/2 justify-start ">
            There ARE black bears on the Appalachian Trail. Black bears are the
              only bears found in the east. They are smaller and less aggressive
              than the Grizzly but still can be 400 to 500 pounds, and in certain situations are known to attack humans. Like all bears they are attracted to the smell food, and will come if you leave leftover food at your campsite.
              For this reason, shelters in the Smokies have chain-link fencing to ward off the bears, and Shenandoah National Park has steel poles with prongs at the top for hikers to lift packs high off the ground. 
            </p>
            <ul className="w-4/12 ">
                <h1 className="bold font-bold text-2xl mb-3">Rules to Follow</h1>
                <li>1. ALWAYS store food properly. </li>
                <li>2. Invest in a bear bag.</li>
            </ul>
          </div>
          <div className="flex flex-row gap-6">
            <h2 className="text-lg text-black w-1/12  flex-0 flex uppercase">Snakes:</h2>
            <p className="w-1/2 justify-start ">
            On the East Coast of the United States there are 4 species of venomous snakes, all of which can be found along the App Trail. The Eastern Copperhead, Eastern Diamondback Rattlesnake, Northern Cottonmouth, and the Timber Rattlesnake live in the woods, streams, and plains of the East Coast. While most snake bits are not fatal to adults, a bite out on the App Trail can potentially lead to disaster.  
            If not quickly treated, a bit from any of these serpents can leave a grown adult dead within a matter of hours. For this reason hikers are urged to take a few precausions. 
            </p>
            <ul className="w-4/12 ">
                <h1 className="bold font-bold text-2xl mb-3">Rules to Follow</h1>
                <li>1. Wear tall, sturdy boots. </li>
                <li>2. Avoid walking anywhere but the designated trail.  </li>
                <li>3. Stay vigilent and listen to your surroundings as you hike.</li>
            </ul>
          </div>
          <div className="flex flex-row gap-6">
            <h2 className="text-lg text-black w-1/12  flex-0 flex uppercase">Other Wildlife:</h2>
            <p className="w-1/2 justify-start ">
            There are literally thousands of animal species that can be found on the Appalchian Trail, but other than Bears and Snakes the wildlife on the trail is mostly harmless. Commonly seen animals include: deer, owls, lizards, racoons, mice, spiders, skunks, bats, foxes, and many more. None of these animals are threatening to humans, and they tend to keep their distance, and so should you!
            If you see any of these animals while hiking do not try to bother or interact with them. The principle of Leave No Trace doesn't just apply to trash, it applies to the entire ecosystem of the trail. Keep in mind that the woods is THEIR home, not yours. You can watch and take picture, but please be respectful to the forest and leave the animals alone. 
            </p>
            <ul className="w-4/12 ">
                <h1 className="bold font-bold text-2xl mb-3">Rules to Follow</h1>
                <li>1. Leave no trace. </li>
                <li>2. Observe animals from a distance; be respectful</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//Nature
//Gear
//Trail Itself
//Leave no tracce
