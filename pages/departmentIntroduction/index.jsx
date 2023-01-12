import React from 'react';
import MainSide from '../../components/mainSide/mainSide';
import Image from 'next/image';
import MainTitle from '../../components/mainTitle/mainTitle';
export default function index() {
  return (
    <main className='px-40 flex flex-row gap-8'>
      <MainSide />
      <MainTitle />
    </main>
  );
}
