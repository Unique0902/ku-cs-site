import React from 'react';

export default function SubTitle({ text }) {
  return (
    <h2 className='pl-2 pb-5 font-sans text-green-700 text-4xl font-bold max-xl:text-3xl max-md:text-2xl'>
      {text}
    </h2>
  );
}
