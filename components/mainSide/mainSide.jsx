import React from 'react';
import MainSideBtn from '../mainSideBtn/mainSideBtn';

export default function MainSide() {
  return (
    <aside className='pt-8'>
      <div className='font-sans border-b border-gray-300 text-green-600 font-bold text-3xl flex justify-center  h-36 w-56 bg-cover bg-circleLogo relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-white bg-opacity-75'></div>
        <p className='z-10 mt-8'>열린마당</p>
      </div>
      <ul className='flex flex-col'>
        <MainSideBtn text={'학과공지'} />
        <MainSideBtn text={'채용정보'} />
        <MainSideBtn text={'학과소식'} />
      </ul>
    </aside>
  );
}
