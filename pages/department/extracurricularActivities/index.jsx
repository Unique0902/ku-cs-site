import React from 'react';
import SubTitle from '../../../components/subTitle';
import { getMainLayOut } from '../../../layouts/appLayout';
import Image from 'next/image';

export default function Index() {
  return (
    <div>
      <section className='pt-6'>
        <SubTitle text={'졸업작품전시회 및 SW경진대회'} />
        <div className='flex flex-col gap-4 ml-4'>
          <p className='font-sans text-black font-normal text-xl'>
            1년간 졸업작품을 수행한 결과물이나 자유 프로젝트 결과물을 전시하고,
            산업체 전문가 심사를 바탕으로 우수팀을 시상하여, 창의적인 아이디어를
            구현하고 검증하는 경험을 통해 실무감각을 향상하기 위한 프로그램
          </p>
          <p className='font-sans text-black font-normal text-xl'>
            최우수 작품은 SW인재 페스티벌 참가 기회 제공
          </p>
        </div>
      </section>
      <section className='pt-6'>
        <Image
          src={'/imgs/extraCurriculam1.jpg'}
          alt={'extraCurriculam1'}
          width={500}
          height={500}
          className='w-full'
        />
      </section>
      <section className='pt-6'>
        <SubTitle text={'학술대회 논문발표'} />
        <div className='flex flex-col gap-4 ml-4'>
          <p className='font-sans text-black font-normal text-xl'>
            학부연구생이 관심있는 분야 연구실에 소속되어 하나의 주제를 심도있게
            연구하고 이를 학술대회발표로 마무리하여 학부교육의 고도화를
            달성하고자 하는 활동
          </p>
          <p className='font-sans text-black font-normal text-xl'>
            논문발표 뿐만 아니라 분야별 최신 기술 세미나 및 튜토리얼 참석 기회
            제공
          </p>
        </div>
      </section>
      <section className='pt-6'>
        <Image
          src={'/imgs/extraCurriculam2.jpg'}
          alt={'extraCurriculam2'}
          width={500}
          height={500}
          className='w-full'
        />
      </section>
      <section className='pt-6'>
        <SubTitle text={'리빙랩'} />
        <div className='flex flex-col gap-4 ml-4'>
          <p className='font-sans text-black font-normal text-xl'>
            유럽 대학/연구소와 협력하여 실생활에서 발생하는 수요를 조사하고
            해결하기 위해 해커톤을 개최하고 결과물을 창업으로 발전시키는
            프로그램
          </p>
          <p className='font-sans text-black font-normal text-xl'>
            네덜란드 Fontys, Windersheim과 건국대학교 상호 방문
          </p>
        </div>
      </section>
      <section className='pt-6'>
        <Image
          src={'/imgs/extraCurriculam3.jpg'}
          alt={'extraCurriculam3'}
          width={500}
          height={500}
          className='w-full'
        />
      </section>
    </div>
  );
}
getMainLayOut(Index);
