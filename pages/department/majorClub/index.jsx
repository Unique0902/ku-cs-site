import React from 'react';
import SubTitle from '../../../components/subTitle';
import { getMainLayOut } from '../../../layouts/appLayout';
import Image from 'next/image';
export default function Index() {
  return (
    <>
      <section className='pt-6 flex flex-col gap-2'>
        <SubTitle text={'SecurityFACT'} />
        <Image
          src={'/imgs/majorClub/majorClub1.png'}
          alt={'majorClub1'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub2.png'}
          alt={'majorClub2'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub3.png'}
          alt={'majorClub3'}
          width={500}
          height={500}
          className='w-full'
        />

        <Image
          src={'/imgs/majorClub/majorClub4.png'}
          alt={'majorClub4'}
          width={500}
          height={500}
          className='w-full'
        />
      </section>
      <section className='pt-6 flex flex-col gap-2'>
        <SubTitle text={'반바지(Banbaji)'} />
        <Image
          src={'/imgs/majorClub/majorClub5.png'}
          alt={'majorClub5'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub6.png'}
          alt={'majorClub6'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub7.png'}
          alt={'majorClub7'}
          width={500}
          height={500}
          className='w-full'
        />

        <Image
          src={'/imgs/majorClub/majorClub8.png'}
          alt={'majorClub8'}
          width={500}
          height={500}
          className='w-full'
        />
      </section>
      <section className='pt-6 flex flex-col gap-2'>
        <SubTitle text={'알고이뜸'} />
        <Image
          src={'/imgs/majorClub/majorClub9.png'}
          alt={'majorClub9'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub10.png'}
          alt={'majorClub10'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub11.png'}
          alt={'majorClub11'}
          width={500}
          height={500}
          className='w-full'
        />

        <Image
          src={'/imgs/majorClub/majorClub12.png'}
          alt={'majorClub12'}
          width={500}
          height={500}
          className='w-full'
        />
      </section>
      <section className='pt-6 flex flex-col gap-2'>
        <SubTitle text={'엣지(EDGE)'} />
        <Image
          src={'/imgs/majorClub/majorClub13.png'}
          alt={'majorClub13'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub14.png'}
          alt={'majorClub14'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub15.png'}
          alt={'majorClub15'}
          width={500}
          height={500}
          className='w-full'
        />

        <Image
          src={'/imgs/majorClub/majorClub16.png'}
          alt={'majorClub16'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub17.png'}
          alt={'majorClub17'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub18.png'}
          alt={'majorClub18'}
          width={500}
          height={500}
          className='w-full'
        />
      </section>
      <section className='pt-6 flex flex-col gap-2'>
        <SubTitle text={'비빔밥'} />
        <Image
          src={'/imgs/majorClub/majorClub19.jfif'}
          alt={'majorClub19'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub20.jfif'}
          alt={'majorClub20'}
          width={500}
          height={500}
          className='w-full'
        />
        <Image
          src={'/imgs/majorClub/majorClub21.jfif'}
          alt={'majorClub21'}
          width={500}
          height={500}
          className='w-full'
        />

        <Image
          src={'/imgs/majorClub/majorClub22.jfif'}
          alt={'majorClub22'}
          width={500}
          height={500}
          className='w-full'
        />
      </section>
    </>
  );
}
getMainLayOut(Index);
