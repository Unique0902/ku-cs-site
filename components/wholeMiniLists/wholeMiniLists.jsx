import Link from 'next/link';
import React from 'react';
import LinkList from '../linkList/linkList';
import MiniLists from '../miniLists/miniLists';

export default function WholeMiniLists({
  frontTitle,
  backTitle,
  dataArr,
  isLink,
  firstLocation,
  secondLocation,
}) {
  return (
    <div className=' flex-1'>
      <section className='flex flex-row justify-between pb-4 border-b border-b-gray-300 mb-3'>
        <div className='flex font-sans font-semibold text-xl text-black flex-row items-center mb-1'>
          <p className=' text-blue-400 border-t-4 border-t-blue-400 box-content font-sans text-2xl font-semibold'>
            {frontTitle}
          </p>
          <p className='border-t-4 border-t-transparent font-sans text-2xl font-semibold'>
            {backTitle}
          </p>
        </div>
        {!isLink && (
          <Link
            href={`${firstLocation}/${secondLocation}`}
            className='text-gray-400 font-semibold text-sm mt-5'
          >
            +더보기
          </Link>
        )}
      </section>
      {!isLink && (
        <MiniLists
          dataArr={dataArr}
          firstLocation={firstLocation}
          secondLocation={secondLocation}
        />
      )}
      {isLink && <LinkList />}
    </div>
  );
}
