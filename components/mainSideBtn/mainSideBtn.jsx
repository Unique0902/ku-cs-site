import React, { useState } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { BsDashLg } from 'react-icons/bs';

export default function MainSideBtn({ text }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <li
      onMouseOver={() => {
        setIsHovering(true);
      }}
      onMouseOut={() => {
        setIsHovering(false);
      }}
      className={`py-2 px-2 border-b  border-gray-300 flex flex-row items-center justify-between cursor-pointer ${
        isHovering && 'bg-lime-500'
      }`}
    >
      <p className={`font-sans font-semibold text-black text-lg`}>{text}</p>
      {!isHovering && <SlArrowRight className='text-gray-600' />}
      {isHovering && <BsDashLg className='text-gray-600' />}
    </li>
  );
}
