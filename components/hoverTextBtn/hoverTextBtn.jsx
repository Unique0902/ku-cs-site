import React, { useEffect, useState } from 'react';
import { navMenuData } from '../../data/navMenuData';
import { useRouter } from 'next/router';
const HoverTextBtn = ({ btnText, location }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState();
  const router = useRouter();
  const checkSelectedBtn = () => {
    const pathArr = router.pathname.split('/');
    setSelectedBtn(pathArr[1]);
  };
  useEffect(() => {
    checkSelectedBtn();
  }, [router]);
  const btnStyle = `h-16 hover:bg-slate-700 w-64 text-center flex flex-row justify-center items-center z-50 ${
    selectedBtn === location && 'bg-gray-800'
  }`;
  const smallBtnStyle =
    'text-black font-sans font-light text-lg py-1 hover:text-green-400 w-full';
  return (
    <button
      className={`relative ${btnStyle}`}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      onClick={() => {
        router.push(`/${location}/${navMenuData[location].data[0].url}`);
      }}
    >
      {btnText}
      {isHovering && (
        <ul className='absolute flex flex-col items-center top-full left-0 bg-white w-full px-6 border border-black pb-1 rounded-b-xl'>
          {navMenuData[location].data.map((data) => (
            <li
              key={data.name}
              className={smallBtnStyle}
              onClick={() => {
                router.push(`/${location}/${data.url}`);
              }}
            >
              {data.name}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default HoverTextBtn;
