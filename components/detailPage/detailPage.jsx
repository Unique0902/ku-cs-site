import React from 'react';
import DetailTitle from '../detailTitle/detailTitle';
import Image from 'next/image';
import DetailHistory from '../detailHistory/detailHistory';
export default function DetailPage({ data, beforeData, nextData }) {
  return (
    <>
      <DetailTitle data={data} />
      <section className='pb-56 border-b border-gray-300'>
        {data &&
          data.img.map((im) => (
            <Image
              src={im}
              alt={'img'}
              width={500}
              height={500}
              className='w-3/4 mt-6'
            />
          ))}
      </section>

      <section className='py-6 flex flex-row justify-end'>
        <button className='py-4 px-10 font-sans text-white bg-gray-400 font-bold text-2xl'>
          목록
        </button>
      </section>
      <DetailHistory beforeData={beforeData} nextData={nextData} />
    </>
  );
}
