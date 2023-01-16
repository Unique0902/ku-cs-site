import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import Image from 'next/image';
import SubTitle from '../../../components/subTitle';
export default function Index() {
  return (
    <>
      <section className='pt-6 flex flex-col gap-4'>
        <Image
          src={'/imgs/possibleCareer.jpg'}
          alt={'possibleCareer'}
          width={500}
          height={500}
          className='w-full'
        />
        <div className='font-sans font-semibold text-xl text-black'>
          <p className='flex flex-row justify-end'>
            진로/현장실습 상담 : 김재군 교수(산학협력중점교수)
          </p>
          <p className='flex flex-row justify-end'>
            <span className='text-blue-500 cursor-pointer'>
              jaygkim@konkuk.ac.kr
            </span>
            / 새천년관 1007호
          </p>
        </div>
      </section>
      <section className='pt-6 flex flex-col gap-4'>
        <SubTitle text={'1.진학'} />
        <ul className='list-disc list-inside font-sans font-normal text-gray-600 text-xl flex flex-col gap-2'>
          <li>
            학부연구생으로 연구실에 소속되어 연구를 수행하고 해당 분야의 대학원
            진학
          </li>
          <li>
            학위수료 후 IT 관련 대기업/중소기업, 국가연구소 또는 대학교 교수로
            취업 가능
          </li>
        </ul>
      </section>
      <section className='pt-6 flex flex-col gap-4'>
        <SubTitle text={'2.취업'} />
        <ul className='list-disc list-inside font-sans font-normal text-gray-600 text-xl flex flex-col gap-2'>
          <li>
            현장실습을 통해 실무경험을 쌓은 후 해당 기업 또는 IT 관련
            대기업/스타트업 취업 가능
          </li>
        </ul>
      </section>
      <section className='pt-6 flex flex-col gap-4'>
        <SubTitle text={'3.창업'} />
        <ul className='list-disc list-inside font-sans font-normal text-gray-600 text-xl flex flex-col gap-2'>
          <li>
            팀 기반의 스타트업 활동을 통해 자신의 아이디어 실현 과정에서 진로
            적성을 찾고, 관심 분야에서의 역량을 키우며, 향후 창업의 꿈을 키울 수
            있음
          </li>
          <li>
            스타트업 관련 문의: 김재군 교수 (
            <span className='text-blue-500 cursor-pointer'>
              jaygkim@konkuk.ac.kr
            </span>
            , 새천년관 1007호)
          </li>
        </ul>
      </section>
    </>
  );
}
getMainLayOut(Index);
