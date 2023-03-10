import React from 'react';
import Image from 'next/image';

export default function MainTitle({ firstName, data, secondLocation }) {
  const nowPageInform = data.find((dt) => dt.url === secondLocation);
  return (
    <section className=' flex flex-row justify-between border-b border-gray-300 h-48 max-xl:h-auto max-md:justify-center'>
      <section className='flex flex-col justify-end pb-4'>
        <div className='flex flex-row'>
          <pre className='font-sans font-medium text-base text-gray-600 max-lg:hidden'>
            {`컴퓨터 공학부 > ${firstName} > `}
          </pre>
          <p className='font-sans font-semibold text-base text-black max-lg:hidden'>
            {nowPageInform && nowPageInform.name}
          </p>
        </div>
        <section className='mt-4 py-2 max-xl:py-6'>
          <h1 className='font-sans font-bold text-black text-3xl max-md:text-3xl max-md:text-center'>
            {nowPageInform && nowPageInform.name}
          </h1>
        </section>
      </section>
      <Image
        src='/imgs/cowLogo.png'
        alt='cowLogo'
        width={300}
        height={300}
        className=' h-48 w-56 border-b border-gray-300 max-md:hidden'
      />
    </section>
  );
}
