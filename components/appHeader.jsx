import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import HoverTextBtn from './hoverTextBtn/hoverTextBtn';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function AppHeader() {
  const router = useRouter();
  const handleClick = () => router.push('/');
  return (
    <header className=''>
      <section className='flex flex-row items-center justify-between px-40 py-8 max-xl:px-8 max-md:py-4 max-xl:border-b'>
        <div className='flex flex-row items-center gap-6'>
          <Image
            src={'/imgs/logo.png'}
            alt={'logo'}
            width={500}
            height={500}
            className={' h-auto w-52 cursor-pointer max-xl:w-1/4'}
            onClick={handleClick}
          />
          <button className='flex flex-col gap-1' onClick={handleClick}>
            <h2 className='font-sans font-bold text-black text-3xl max-xl:text-2xl max-md:text-xl hover:text-blue-300'>
              컴퓨터공학부
            </h2>
            <h3 className='font-sans font-semibold max-xl:text-lg text-gray-400 text-xl max-md:hidden'>
              Computer Science and Engineering
            </h3>
          </button>
        </div>
        <button className='xl:hidden '>
          <GiHamburgerMenu className='text-4xl' />
        </button>
        <div className='max-xl:hidden flex flex-row items-center gap-4'>
          <button className=' bg-slate-400 text-white text-2xl font-sans font-semibold rounded-xl px-4 py-3 hover:scale-105'>
            로그인
          </button>
          <a
            href='https://www.konkuk.ac.kr/do/Index.do'
            target='_blank'
            className=' bg-green-800 flex justify-center items-center text-white text-2xl font-sans font-semibold rounded-xl px-4 py-3 hover:scale-105'
          >
            건국대학교
          </a>
        </div>
      </section>
      <nav className='max-xl:hidden flex flex-row justify-center bg-gray-500 text-white font-sans font-semibold text-2xl border-b-2 border-b-gray-300 border-t-4 border-black'>
        <HoverTextBtn
          btnText={'학과소개'}
          location={'departmentIntroduction'}
        />
        <HoverTextBtn btnText={'구성원'} location={'member'} />
        <HoverTextBtn btnText={'학부'} location={'department'} />
        <HoverTextBtn btnText={'대학원'} location={'graduateSchool'} />
        <HoverTextBtn btnText={'취업및진로'} location={'employmentAndCareer'} />
        <HoverTextBtn btnText={'열린마당'} location={'openYard'} />
      </nav>
    </header>
  );
}
