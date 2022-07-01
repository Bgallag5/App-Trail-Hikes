import React from "react";
import PageHeader from "../components/UI/PageHeader";
import imgSrc1 from "../assets/images/trail-pic-3.jpeg";
import imgSrc2 from "../assets/images/trail-pic-9.jpg";

export default function about() {
  return (
    <div className="page-container flex-col">
      <PageHeader
        imgSrc={imgSrc1}
        imgSrc2={imgSrc2}
        title="Appalachian Trail"
        subtitle="Find the Outdoors"
      />
      <div className="content test flex flex-col">
        <div className=" w-full h-64">
          <h2 className="content__title">Page Nav</h2>
          <nav>
            <ul className="flex flex-row w-full gap-5">
              <li>Wildlife</li>
              <li>Packing List</li>
              <li>Directions</li>
            </ul>
          </nav>
        </div>
        <div className="content test">
            <h2 className="content__title">Wildlife</h2>
            <div>

            </div>
        </div>
      </div>
    </div>
  );
}

//Nature
//Gear
//Trail Itself
