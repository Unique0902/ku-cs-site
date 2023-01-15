import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import Image from 'next/image';
import { CgShapeCircle } from 'react-icons/cg';
import Professor from '../../../components/professor';

export default function Index() {
  return (
    <>
      <Image
        src={'/imgs/professorBanner.jpg'}
        alt='professorBanner'
        width={500}
        height={500}
        className='w-3/5 h-auto py-5'
      />
      <div className='flex flex-row gap-1 items-center border-b-4 border-gray-600 pb-2'>
        <CgShapeCircle className='text-yellow-400 text-3xl' />
        <p className='font-sans font-bold text-gray-600 text-xl'>교수소개</p>
      </div>

      <Professor name={'홍길동'} engName={'Hong Gil Dong'} job={'교수'} />
      <Professor name={'홍길동'} engName={'Hong Gil Dong'} job={'교수'} />
      <Professor name={'홍길동'} engName={'Hong Gil Dong'} job={'교수'} />
    </>
  );
}
getMainLayOut(Index);
