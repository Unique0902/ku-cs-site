import React from 'react';
import { HiX } from 'react-icons/hi';
import Image from 'next/image';
import { navMenuData } from '../../data/navMenuData';
import ResponsiveMenuType from '../responsiveMenuType/responsiveMenuType';
export default function ResponsiveMenu({ setIsShowMenu }) {
  return (
    <nav className='absolute h-full w-4/5 top-0 right-0 py-4 px-6 z-50 bg-white'>
      <div className='flex flex-row justify-between items-center font-sans pb-6 border-b border-gray-300'>
        <div className='flex flex-row items-center gap-4'>
          <Image
            src={'/imgs/circleLogo.jpg'}
            alt={'circleLogo'}
            width={500}
            height={500}
            className={'w-12 h-auto max-md:w-8'}
          />
          <h1 className='font-bold text-3xl max-md:text-xl'>컴퓨터공학부</h1>
        </div>
        <HiX
          className='text-4xl max-md:text-3xl cursor-pointer'
          onClick={() => {
            setIsShowMenu(false);
          }}
        />
      </div>
      <section className='py-4'>
        <ul className='flex flex-col gap-6 max-md:gap-3'>
          {Object.values(navMenuData).map((data) => (
            <ResponsiveMenuType
              key={data.name}
              data={data}
              setIsShowMenu={setIsShowMenu}
            />
          ))}
        </ul>
      </section>
    </nav>
  );
}
