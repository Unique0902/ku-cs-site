import React, { useState } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { BsDashLg } from 'react-icons/bs';
import { useRouter } from 'next/router';
export default function MainSideBtn({ text, isSelected, url, firstLocation }) {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${firstLocation}/${url}`);
  };
  return (
    <li
      onMouseOver={() => {
        setIsHovering(true);
      }}
      onMouseOut={() => {
        setIsHovering(false);
      }}
      onClick={handleClick}
      className={`py-2 px-2 border-b  border-gray-300 flex flex-row items-center justify-between cursor-pointer ${
        (isHovering || isSelected) && 'bg-lime-500'
      }`}
    >
      <p className={`font-sans font-semibold text-black text-lg`}>{text}</p>
      {!isHovering && !isSelected && <SlArrowRight className='text-gray-600' />}
      {(isHovering || isSelected) && <BsDashLg className='text-gray-600' />}
    </li>
  );
}
