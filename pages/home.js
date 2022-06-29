import React, { useRef, useEffect } from "react";
import homeVid from "../assets/vids/forestmov.mp4";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar/Sidebar";

export default function home() {
  const vidRef = useRef();

  const setPlaybackRate = () => {
    console.log(vidRef.current);
    // return (vidRef.current.playbackRate = .9);
  };

  return (
    <div className="page-container p-5 flex-col">
      <div className="text-center w-full test">
        <div className="text-xl bg-gradient-to-r from-green-700 to-green-300 bg-clip-text">
          <h2 className="text-transparent text-5xl">Appalachian Hikes</h2>
        </div>
        <h4 className="text-slate-900 font-medium text-lg">
          Find the outdoors
        </h4>
      </div>
      <div className="w-1/2 p-2">
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
      </div>
    </div>
  );
}

