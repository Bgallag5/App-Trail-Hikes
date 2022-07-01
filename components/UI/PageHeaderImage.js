import React from 'react';
import Image from 'next/image';

export default function PageHeaderImage(props) {
    console.log(props);
    const {imgSrc} = props;
  return (
    <div className="w-1/3 h-full relative object-cover">
    <Image className="" src={imgSrc} alt='forest' layout="fill" />
    </div>
  )
}
