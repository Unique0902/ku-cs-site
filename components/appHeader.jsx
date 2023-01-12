import React from 'react';
import Image from 'next/image';
import HoverTextBtn from './hoverTextBtn/hoverTextBtn';
export default function AppHeader() {
  const btnStyle = 'py-4 hover:bg-slate-700 w-64 text-center';
  return (
    <header className=''>
      <section className='flex flex-row items-center justify-between px-20 py-8'>
        <div className='flex flex-row items-center gap-6'>
          <Image
            src={'/imgs/logo.png'}
            alt={'logo'}
            width={500}
            height={500}
            className={' h-20 w-52'}
          />
          <button className='flex flex-col gap-1'>
            <h2 className='font-sans font-bold text-black text-3xl hover:text-blue-300'>
              컴퓨터공학부
            </h2>
            <h3 className='font-sans font-semibold text-gray-400 text-xl'>
              Computer Science and Engineering
            </h3>
          </button>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <button className=' bg-slate-400 text-white text-2xl font-sans font-semibold rounded-xl px-4 py-3 hover:scale-105'>
            로그인
          </button>
          <button className=' bg-green-800 text-white text-2xl font-sans font-semibold rounded-xl px-4 py-3 hover:scale-105'>
            건국대학교
          </button>
        </div>
      </section>
      <nav className=' flex flex-row justify-center bg-gray-500 text-white font-sans font-semibold text-2xl border-b-2 border-b-white border-t-4 border-black'>
        <HoverTextBtn btnText={'학과소개'} />
        <HoverTextBtn btnText={'구성원'} />
        <HoverTextBtn btnText={'학부'} />
        <HoverTextBtn btnText={'대학원'} />
        <HoverTextBtn btnText={'취업및진로'} />
        <HoverTextBtn btnText={'열린마당'} />
      </nav>
    </header>
  );
}
