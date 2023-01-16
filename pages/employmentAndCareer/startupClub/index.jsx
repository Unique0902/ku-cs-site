import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import SubTitle from '../../../components/subTitle';
export default function Index() {
  return (
    <>
      <section className='pt-10 flex flex-col gap-4'>
        <SubTitle
          text={
            '자신의 관심 분야에서 문제 해결 아이디어를 함께 실현 및 검증에 도전하는 스타트업 클럽 활동은 실제 사회에서의 다양한 경험을 통한 역량 향상 뿐만 아니라 자신의 적성을 검증할 수 있는 좋은 기회입니다.'
          }
        />
        <ul className='list-disc list-inside font-sans font-normal text-gray-600 text-xl flex flex-col gap-2'>
          <li>
            스타트업 클럽 관련 상담: 김재군 교수 (
            <a href='jaygkim@konkuk.ac.kr' className='text-blue-500'>
              jaygkim@konkuk.ac.kr
            </a>
            , 새천년관 1007호)
          </li>
          <li>
            페이스북 스타트업할건대 그룹(
            <a
              href='https://www.facebook.com/groups/kudostartup'
              className='text-blue-500'
            >
              https://www.facebook.com/groups/kudostartup
            </a>
            ) : 김재군 교수가 운영하는 본교 재학생/졸업생을 위한 정보제공
            커뮤니티(비공개 그룹, 가입 신청 후 승인 필요)
          </li>
        </ul>
      </section>
    </>
  );
}
getMainLayOut(Index);
