import React, { useState } from 'react';
import { navMenuData } from '../../data/navMenuData';
const HoverTextBtn = ({ btnText }) => {
  const [isHovering, setIsHovering] = useState(false);
  const btnStyle =
    'h-16 hover:bg-slate-700 w-64 text-center flex flex-row justify-center items-center z-50';
  const smallBtnStyle =
    'text-black font-sans font-light text-lg py-1 hover:text-green-400 w-full';
  return (
    <button
      className={`relative ${btnStyle}`}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {btnText}
      {isHovering && (
        <ul className='absolute flex flex-col items-center top-full left-0 bg-white w-full px-6 border border-black pb-1 rounded-b-xl'>
          {navMenuData[btnText].map((data) => (
            <li className={smallBtnStyle}>{data.name}</li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default HoverTextBtn;
