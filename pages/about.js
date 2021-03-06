import React, {useEffect, useState, useRef} from "react";
import imgSrc1 from "../assets/images/trail-pic-3.jpeg";
import imgSrc2 from "../assets/images/trail-pic-9.jpg";

import Image from "next/image";
import wildlifeImg1 from "../assets/images/wildlife1.png";
import wildlifeImg2 from "../assets/images/wildlife2.jpeg";
import wildlifeImg3 from "../assets/images/wildlife5.jpeg";

//components
import PageHeader from "../components/UI/PageHeader";
import WildlifeTabs from "../components/AboutPage/WildlifeTabs";

export default function about() {
  const popupRef = useRef();
  const [popupImg, setPopupImg] = useState(undefined);

  useEffect(() => {
    const wildlifePics = document.querySelectorAll('.page-image')
    console.log(wildlifePics);
    wildlifePics.forEach(pic => {
      pic.addEventListener('click', () => {
        console.log(pic);

        setPopupImg(pic.src);
        popupRef.current.style.visibility = 'visible';
        popupRef.current.style.background = 'rgba(0, 0, 0, .5)'
      })
    })

  }, [])


  return (
    <div className="page-container flex-col">
      <div ref={popupRef} className="fixed invisible top-0 left-0 h-full w-full bg-[rbga(0, 0, 0, .5)]  z-40 flex flex-col items-center justify-center">
        <img className="w-1/3 h-auto relative opacity-100 inline-block z-50 border-2 border-green-500 " src={popupImg}></img>
      </div>
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
        <div className="flex flex-row-reverse h-[40vh] w-10/12 justify-center  gap-1 items-center m-auto">
          <div className="w-1/2 h-full flex flex-col items-start">
            <h2 className="content__title">Wildlife</h2>
            <p className="w-full">
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
    </div>
  );
}

//Nature
//Gear
//Trail Itself
//Leave no tracce
