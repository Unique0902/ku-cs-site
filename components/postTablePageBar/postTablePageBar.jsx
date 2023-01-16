import React, { useEffect, useState } from 'react';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { RiArrowRightSLine } from 'react-icons/ri';
export default function PostTablePageBar({ pageNum, setPageNum }) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < pageNum.total; i++) {
      tempArr = [...tempArr, i + 1];
    }
    setArr([...tempArr]);
  }, [pageNum]);

  return (
    <section className='flex flex-row justify-center gap-3 h-10 mt-12'>
      {arr.map((data) => (
        <button
          key={data}
          className={`w-10 h-full text-xl border border-gray-400  hover:bg-white hover:text-black ${
            data === pageNum.now
              ? 'bg-white text-black'
              : 'text-gray-700 bg-gray-200'
          }`}
          onClick={() => {
            setPageNum({ ...pageNum, now: data });
          }}
        >
          {data}
        </button>
      ))}
      <button className='px-2 h-full text-xl border border-gray-400'>
        <RiArrowRightSLine />
      </button>
      <button className='px-2 h-full text-xl border border-gray-400'>
        <RxDoubleArrowRight />
      </button>
    </section>
  );
}
