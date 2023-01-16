import React from 'react';
import DetailTitle from '../detailTitle/detailTitle';
import Image from 'next/image';
import DetailHistory from '../detailHistory/detailHistory';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function DetailPage({ data, beforeData, nextData }) {
  const router = useRouter();
  const arr = router.pathname.split('/');
  return (
    <>
      <DetailTitle data={data} />
      <section className='pb-56 border-b border-gray-300'>
        {data &&
          data.img.map((im) => (
            <Image
              key={im}
              src={im}
              alt={'img'}
              width={500}
              height={500}
              className='w-3/4 mt-6'
            />
          ))}
      </section>

      <section className='py-6 flex flex-row justify-end'>
        <Link
          href={`/${arr[1]}/${arr[2]}`}
          className='py-4 px-10 font-sans text-white bg-gray-400 font-bold text-2xl'
        >
          목록
        </Link>
      </section>
      <DetailHistory beforeData={beforeData} nextData={nextData} />
    </>
  );
}
