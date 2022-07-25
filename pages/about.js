import React, {useEffect, useState, useRef} from "react";
import imgSrc1 from "../assets/images/trail-pic-3.jpeg";
import imgSrc2 from "../assets/images/trail-pic-9.jpg";

import Image from "next/image";
import wildlifeImg1 from "../assets/images/wildlife1.png";
import wildlifeImg2 from "../assets/images/wildlife2.jpeg";
import wildlifeImg3 from "../assets/images/wildlife5.jpeg";

//components
import PageHeader from "../components/UI/PageHeader";
import Wildlife from "../components/AboutPage/Wildlife/Wildlife";
import Packing from "../components/AboutPage/Packing/Packing";

export default function about() {
  const popupRef = useRef();
  const [popupImg, setPopupImg] = useState(undefined);
  const [activeTab, setActiveTab] = useState('wildlife');

  useEffect(() => {
    const wildlifePics = document.querySelectorAll('.page-image')
    console.log(wildlifePics);
    wildlifePics.forEach(pic => {
      pic.addEventListener('click', () => {

        setPopupImg(pic.src);
        popupRef.current.style.background = 'rgba(0, 0, 0, .5)';
        popupRef.current.classList.remove('hidden')
      })
    })

  }, [])

  const handleNavClick = (e) => {
    console.log(e.target.dataset.tab);
    setActiveTab(e.target.dataset.tab)

  }

  const handleClosePopup = () => {
    popupRef.current.style.background = 'rgba(0, 0, 0, 0)';
    popupRef.current.classList.add('hidden');
  }


  return (
    <div className="page-container flex-col">
      <div ref={popupRef} className="hidden fixed top-0 left-0 h-full w-full bg-[rbga(0, 0, 0, .5)]  z-30 flex z- flex-col items-center justify-center">
        <div onClick={handleClosePopup} className="w-8 h-8 top-0 relative translate-x-[675%] translate-y-[125%] cursor-pointer z-50 bg-black text-white rounded-full flex justify-center items-center">X</div>
        <img className="w-1/3 h-auto relative opacity-100 inline-block z-40 border-2 border-green-500 " src={popupImg}></img>
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
              <li data-tab="wildlife" className="about__tab" onClick={(e) => handleNavClick(e)}>Wildlife</li>
              <li data-tab="packing" className="about__tab" onClick={(e) => handleNavClick(e)}>Packing List</li>
              <li data-tab="directions" className="about__tab" onClick={(e) => handleNavClick(e)}>Directions</li>
              <li data-tab="notrace" className="about__tab" onClick={(e) => handleNavClick(e)}>Leave No Trace</li>
            </ul>
          </nav>
        </div>
        <div>
        <Wildlife title={`wildlife`}  activeTab={activeTab}  />
        <Packing title={`packing`} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

//Nature
//Gear
//Trail Itself
//Leave no tracce
