import React from 'react';
import SubTitle from '../../components/subTitle';

export default function index() {
  return (
    <div>
      <section className='pt-6'>
        <SubTitle text={'대학원 컴퓨터공학과 연구실'} />
      </section>
      <section className='pt-6'>
        <h3 className='font-sans text-2xl text-black font-semibold'>
          연구실 목록
        </h3>
      </section>
    </div>
  );
}
