import React from 'react';
import Image from 'next/image';

export default function MainTitle() {
  return (
    <section className='flex-1 flex flex-row justify-between border-b border-gray-300 h-48'>
      <section className='flex flex-col justify-end pb-4'>
        <div className='flex flex-row'>
          <pre className='font-sans font-medium text-base text-gray-600'>
            {'컴퓨터 공학부 > 열린마당 > '}
          </pre>
          <p className='font-sans font-semibold text-base text-black'>
            학과공지
          </p>
        </div>
        <section className='mt-4 py-2  '>
          <h1 className='font-sans font-bold text-black text-3xl'>학과공지</h1>
        </section>
      </section>
      <Image
        src='/imgs/cowLogo.png'
        alt='cowLogo'
        width={300}
        height={300}
        className=' h-48 w-56 border-b border-gray-300'
      />
    </section>
  );
}
