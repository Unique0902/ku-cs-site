import React from 'react';
import SubTitle from '../../../components/subTitle';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  return (
    <>
      <section className='pt-6'>
        <SubTitle text={'■ 석인호 동문 장학'} />
        <div className='flex flex-col gap-4 ml-4'>
          <div>
            <p className='font-sans text-black font-normal text-xl'>
              1. 장학 설명
            </p>
            <p className='font-sans text-black font-normal text-xl'>
              우리 컴퓨터공학부 80학번 석인호 졸업생께서 동문에게 기부한
              기금으로 선발하는 장학입니다.
            </p>
          </div>
          <div>
            <p className='font-sans text-black font-normal text-xl'>
              2. 선발 대상
            </p>
            <p className='font-sans text-black font-normal text-xl'>
              3학년 2학기 재학생 중 직전학기까지의 총 평점평균이 3.0 이상이며,
              교내·외 장학금을 받고 있지 않은 학생 (중복수혜 금지)
            </p>
          </div>
        </div>
      </section>
      <section className='pt-6 ml-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-sans text-black font-semibold text-2xl'>
            ▶ 제 1회 석인호 동문 장학 선발
          </h3>
          <p className='font-sans text-black font-normal text-xl'>
            선발일자: 2022년 10월 5일
          </p>
          <p className='font-sans text-black font-normal text-xl'>
            선발자: 공과대학 컴퓨터공학부 소속 3학년 박** 학생
          </p>
          <p className='font-sans text-black font-normal text-xl'>
            장학금액: 의조에 해당하는 장학으로 총 1,860,000원 지급
          </p>
        </div>
      </section>
    </>
  );
}
getMainLayOut(Index);
