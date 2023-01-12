import React from 'react';
import MainSide from '../../components/mainSide/mainSide';
import MainTitle from '../../components/mainTitle/mainTitle';
import { useRouter } from 'next/router';
export default function index() {
  const router = useRouter();
  return (
    <main className='px-40 flex flex-row gap-8'>
      <MainSide />
      <MainTitle />
    </main>
  );
}
