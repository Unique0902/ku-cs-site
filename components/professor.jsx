import React from 'react';
import Image from 'next/image';

export default function Professor({
  name,
  engName,
  job,
  type,
  lab,
  phoneNum,
  email,
  homePage,
}) {
  return (
    <section className='flex flex-row max-md:flex-col p-4 gap-6 border-b border-gray-300'>
      <Image
        src={'/imgs/person.jpg'}
        alt={'person'}
        width={500}
        height={500}
        className='w-48 h-48 p-2'
      />
      <ul className='flex flex-col font-sans text-base font-normal'>
        <li className='flex flex-row gap-2'>
          <p className='text-gray-400 font-semibold'>{'교수명 :'}</p>
          <p className=' text-black font-semibold'>
            {`${name} ( ${engName} )`}
          </p>
        </li>
        <li className='flex flex-row gap-2'>
          <p className='text-gray-400 font-semibold'>{'직위 :'}</p>
          <p className=' text-gray-500'>{job}</p>
        </li>
        <li className='flex flex-row gap-2'>
          <p className='text-gray-400 font-semibold'>{'연구분야 :'}</p>
          <p className=' text-gray-500'>{type}</p>
        </li>
        <li className='flex flex-row gap-2'>
          <p className='text-gray-400 font-semibold'>{'연구실 :'}</p>
          <p className=' text-gray-500'>{lab}</p>
        </li>
        <li className='flex flex-row gap-2'>
          <p className='text-gray-400 font-semibold'>{'연락처 :'}</p>
          <p className=' text-gray-500'>{phoneNum}</p>
        </li>
        <li className='flex flex-row gap-2'>
          <p className='text-gray-400 font-semibold'>{'이메일 :'}</p>
          <p className=' text-gray-500'>{email}</p>
        </li>
        <li className='flex flex-row gap-2'>
          <p className='text-gray-400 font-semibold'>{'홈페이지 :'}</p>
          <p className=' text-gray-500'>{homePage}</p>
        </li>
      </ul>
    </section>
  );
}
