import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import Image from 'next/image';
export default function Index() {
  return (
    <div>
      <section className='pt-4'>
        <Image
          src={'/imgs/loadmap1.png'}
          alt={'loadmap1'}
          width={500}
          height={500}
          className='w-full'
        />

        <Image
          src={'/imgs/loadmap2.png'}
          alt={'loadmap2'}
          width={500}
          height={500}
          className='w-full mt-4'
        />
      </section>
    </div>
  );
}
getMainLayOut(Index);
