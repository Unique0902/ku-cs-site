import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import SubTitle from '../../../components/subTitle';

export default function Index() {
  return (
    <div>
      <section className='pt-6'>
        <SubTitle text={'컴퓨터공학부 졸업요건 (2020학번 기준)'} />
        <div className='flex flex-col gap-2'>
          <h3 className='font-sans text-black font-semibold text-2xl'>
            - 지정교양
          </h3>
          <p className='font-sans text-black font-normal text-xl'>
            C프로그래밍, Java프로그래밍, 미적분학, 확률과통계, 선형대수학,
            이산수학 필수 수강
          </p>
          <p className='font-sans text-black font-normal text-xl'>
            수치해석 및 기타 과목 선택 수강
          </p>
        </div>
      </section>
      <section className='pt-6'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-sans text-black font-semibold text-2xl'>
            - 전공학점
          </h3>
          <p className='font-sans text-black font-normal text-xl'>
            72학점 이수 (전공필수 없음)
          </p>
        </div>
      </section>
      <section className='pt-6'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-sans text-black font-semibold text-2xl'>
            - 프로젝트과목
          </h3>
          <p className='font-sans text-black font-normal text-xl'>
            오픈소스SW입문, 전공기초프로젝트1/2, 산학협력프로젝트1/2,
            K-Lab프로젝트1/2, 오픈소스SW프로젝트1/2 중 4 과목 이상 수강
          </p>
        </div>
      </section>
      <section className='pt-6'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-sans text-black font-semibold text-2xl'>
            - 졸업작품
          </h3>
          <p className='font-sans text-black font-normal text-xl'>
            졸업프로젝트1(시작반)과 졸업프로젝트2(계속반)를 통해 졸업작품 수행
          </p>
        </div>
      </section>
      <section className='pt-6'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-sans text-black font-semibold text-2xl'>
            - 테크니컬 영어 과목
          </h3>
          <p className='font-sans text-black font-normal text-xl'>
            테크니컬영어발표, 테크니컬영어말하기, 테크니컬영어논문독해,
            테크니컬영어글쓰기 중 1과목 이상 수강
          </p>
        </div>
      </section>
      <section className='pt-6'>
        <div className='flex flex-col gap-2'>
          <p className='font-sans text-black font-normal text-xl'>
            *기타 학번별 자세한 사항은 본인의 학번에 해당하는 요람 참고
          </p>
        </div>
      </section>
    </div>
  );
}
getMainLayOut(Index);
