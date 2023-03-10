import React from 'react';
import MainSideBtn from '../mainSideBtn/mainSideBtn';

export default function MainSide({
  data,
  secondLocation,
  firstName,
  firstLocation,
}) {
  return (
    <aside className='pt-8 max-lg:hidden'>
      <div className='font-sans border-b border-gray-300 text-green-600 font-bold text-3xl flex justify-center  h-48 w-72 bg-cover bg-circleLogo relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-white bg-opacity-75'></div>
        <p className='z-10 mt-8 font-sans text-3xl'>{firstName}</p>
      </div>
      <ul className='flex flex-col'>
        {data.map((data) => (
          <MainSideBtn
            key={data.url}
            firstLocation={firstLocation}
            text={data.name}
            url={data.url}
            isSelected={secondLocation === data.url}
          />
        ))}
      </ul>
    </aside>
  );
}
