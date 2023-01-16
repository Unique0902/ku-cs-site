import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import Image from 'next/image';
export default function Index() {
  return (
    <div>
      <section className='pt-6'>
        <Image
          src={'/imgs/ready.jpg'}
          alt={'ready'}
          width={500}
          height={500}
          className='w-3/4 m-auto'
        />
      </section>
    </div>
  );
}
getMainLayOut(Index);
