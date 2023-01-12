import React from 'react';
import LinkList from '../linkList/linkList';
import MiniLists from '../miniLists/miniLists';

export default function WholeMiniLists({
  frontTitle,
  backTitle,
  dataArr,
  isLink,
}) {
  return (
    <div className=' flex-1'>
      <section className='flex flex-row justify-between pb-4 border-b border-b-gray-300 mb-2'>
        <div className='flex font-sans font-semibold text-xl text-black flex-row items-center mb-2'>
          <p className=' text-blue-400 border-t-4 border-t-blue-400 box-content'>
            {frontTitle}
          </p>
          <p className='border-t-4 border-t-transparent'>{backTitle}</p>
        </div>
        {!isLink && (
          <button className='text-gray-400 font-semibold text-sm mt-5'>
            +더보기
          </button>
        )}
      </section>
      {!isLink && <MiniLists dataArr={dataArr} />}
      {isLink && <LinkList />}
    </div>
  );
}