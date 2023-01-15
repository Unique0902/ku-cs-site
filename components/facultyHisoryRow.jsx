import React from 'react';

export default function FacultyHisoryRow({ year, firstRow, secondRow }) {
  return (
    <div className='flex flex-row px-6 gap-48 py-5 items-center border-b border-gray-300'>
      <h2 className='font-sans text-green-700 text-4xl font-bold'>{year}</h2>
      <div className='flex flex-col gap-2 font-sans text-gray-500'>
        <p>{firstRow}</p>
        {secondRow && <p>{secondRow}</p>}
      </div>
    </div>
  );
}
