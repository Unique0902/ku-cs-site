import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import SubTitle from '../../../components/subTitle';
export default function Index() {
  return (
    <>
      <section className='pt-6 flex flex-col gap-4 w-full'>
        <SubTitle
          text={
            '학교의 현장실습(인턴) 프로그램에 참여하는 경우, 기업에서 현장 실무를 배우고, 학점을 취득하며, 소정의 실습 지원비 수령이 가능합니다.'
          }
        />
        <ul className='list-disc list-inside font-sans font-normal text-gray-600 text-xl flex flex-col gap-2 max-md:text-sm'>
          <li>4학기 수료 이상 학생 참여 가능</li>
          <li>
            하루 8시간, 주 5일 full-time 근무 필요하므로, 학교 교과목 수강과
            병행 불가(단, e러닝 가능)
          </li>
          <li>
            학기 참여시 최대 15학점 신청 가능 (단, 우리 학부 기준에 따라
            전공으로 최대 6학점 신청 가능)
          </li>
          <li>
            계절학기 참여시 최대 6학점 신청 가능 (단, 우리 학부 기준에 따라
            전공으로 최대 3학점 신청 가능)
          </li>
          <li>
            현장실습 관련 상담: 김재군 교수 (
            <span className='text-blue-500'>jaygkim@konkuk.ac.kr</span>,
            새천년관 1007호)
          </li>
          <li>
            페이스북 취업할건대 그룹(
            <a
              href='https://www.facebook.com/groups/kudojob'
              className='text-blue-500'
            >
              https://www.facebook.com/groups/kudojob
            </a>
            ) : 김재군 교수가 운영하는 재학생/졸업생을 위한 정보제공
            커뮤니티(비공개 그룹, 가입 신청 후 승인 필요)
          </li>
        </ul>
      </section>
      <section className='pt-10 flex flex-col gap-4'>
        <SubTitle text={'1.교내 현장실습(인턴)'} />
        <ul className='list-disc list-inside font-sans font-normal text-gray-600 text-xl flex flex-col gap-2 max-md:text-sm'>
          <li>
            현장실습지원센터(
            <a href='http://field.konkuk.ac.kr' className='text-blue-500'>
              http://field.konkuk.ac.kr
            </a>
            )의 현장실습 프로그램 참가
          </li>
          <li>
            학기 최대 16주, 계절학기 최대 8주간 현장실습 참여 가능(연속 참여
            가능하지만, 별도 선발 과정은 필요
          </li>
          <li>
            20년 기준으로, 참여 학생에게 학교에서는 월 30~40만원, 참여 기업은
            최소 월 60만원 이상 실습비 지급 (기업별 지원금은 상이하며, 정확한
            금액은 기업별 모집 계획서에 명시됨)
          </li>
          <li>
            바람직한 참여 기업 선택 방법으로는, 자신의 진로 목표에 맞는 분야에서
            교과 이수를 통한 전공 지식과 함께 비교과 활동을 통한 역량을 키우고,
            그 분야의 가능성있는 스타트업에서의 인턴 활동을 추천
          </li>
          <li>
            원하는 스타트업에서의 인턴 참여 방법에 대해서는 상담을 통해 미리
            준비 필요(지도교수: 김재군 교수)
          </li>
        </ul>
      </section>
      <section className='pt-10 flex flex-col gap-4'>
        <SubTitle text={'2.과기부 ICT 학점연계 프로젝트 인턴십(ICT 인턴십)'} />
        <ul className='list-disc list-inside font-sans font-normal text-gray-600 text-xl flex flex-col gap-2 max-md:text-sm'>
          <li>
            과기부 ICT 인턴십(
            <a href='http://internnet.hanium.or.kr' className='text-blue-500'>
              http://internnet.hanium.or.kr
            </a>
            )의 현장실습 프로그램 참가
          </li>
          <li>
            정규 학기(16주)만 운영되며, 선발되는 경우 교내 현장실습 프로그램
            등록을 통해 운영됨
          </li>
          <li>
            20년 기준으로, 참여 학생에서 학교에서는 월 30~40만원, 참여 기업은 월
            30만원, 정부에서 월 100만원의 실습비 지급
          </li>
          <li>40여 대학교 학생들이 함께 지원하기 때문에, 경쟁률은 더 높음</li>
          <li>
            본교에서는 2019년부터 현장실습지원센터에서 김재군 교수와 함께 매
            학기 국내 과정에 참여 중
          </li>
        </ul>
      </section>
      <section className='pt-10 flex flex-col gap-4'>
        <SubTitle text={'3.(재)산학협동재단의 "스타트업 대학생 인턴 장학생"'} />
        <ul className='list-disc list-inside font-sans font-normal text-gray-600 text-xl flex flex-col gap-2 max-md:text-sm'>
          <li>
            (재)산학협동재단(
            <a href='http://sanhakfund.or.kr' className='text-blue-500'>
              http://sanhakfund.or.kr
            </a>
            )은 한국무역협회가 출연한 장학재단으로서, 대학생들을 위한 장학금,
            교육 등 다양한 프로그램을 지원함
          </li>
          <li>
            {`산학협동재단은 캠퍼스 내 스타트업 문화 확산 지원을 위해 건국대학교
            김재군 교수와 함께 "스타트업 대학생 인턴 장학금 지원 사업"을
            2019년부터 시작해, 건국대학교 학생들 대상으로 시험 운영 중`}
          </li>
          <li>
            매년 30명(각 학기당 15명)의 스타트업 인턴 참여 학생들을 장학생으로
            선발해, 장학증서와 함께 4개월간 매월 40만원씩 총 160만원의 장학금을
            지급함
          </li>
          <li>
            1학기 또는 2학기의 교내 현장실습에서 김재군 교수가 섭외교수로 등록된
            스타트업에 인턴으로 선발되면 자동으로 장학생 후보가 되며, 일정
            기준에 따라 장학생을 최종 선발함.
          </li>
        </ul>
      </section>
    </>
  );
}
getMainLayOut(Index);
