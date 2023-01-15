import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import { CgShapeCircle } from 'react-icons/cg';
import Professor from '../../../components/professor';

export default function Index() {
  return (
    <>
      <div className='flex flex-row gap-1 items-center border-b-4 border-gray-600 pb-2 pt-8'>
        <CgShapeCircle className='text-yellow-400 text-3xl' />
        <p className='font-sans font-bold text-gray-600 text-xl'>직원소개</p>
      </div>
      <Professor name={'홍길동'} engName={'Hong Gil Dong'} />
      <Professor name={'홍길동'} engName={'Hong Gil Dong'} />
      <Professor name={'홍길동'} engName={'Hong Gil Dong'} />
    </>
  );
}
getMainLayOut(Index);
