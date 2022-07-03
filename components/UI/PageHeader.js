import React from 'react';
import PageHeaderImage from './PageHeaderImage';

export default function PageHeader(props) {
    const {imgSrc, imgSrc2, title, subtitle} = props;

    
  return (
    <div className="relative flex flex-row w-full h-[15rem] object-cover shadow-sm shadow-neutral-800">
    <PageHeaderImage imgSrc={imgSrc} />
    <div className="text-center py-10 self-center w-1/3 h-full bg-green-700  border-black border-4">
      <div className="text-xl bg-gradient-to-r from-slate-100 to-white bg-clip-text">
        <h2 className="text-transparent text-5xl">{title}</h2>
      </div>
      <h4 className="text-slate-900 font-medium text-lg mt-4">
        {subtitle}
      </h4>
    </div>
    <PageHeaderImage imgSrc={imgSrc2} />
  </div>
  )
}
