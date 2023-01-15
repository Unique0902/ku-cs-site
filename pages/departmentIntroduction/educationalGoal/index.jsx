import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  return (
    <p className='font-sans text-lg text-gray-700 pl-2'>
      <br />
      컴퓨터공학부는 컴퓨터 시스템 및 소프트웨어를 개발 및 운용할 수 있는 역량을
      갖춘 인재를 양성하는 것을 목표로 하고 있습니다.
      <br />
      <br />
      특히, 본 학부는 인공지능, 사물인터넷, 클라우드컴퓨팅, 빅데이터,
      멀티미디어, 시스템 소프트웨어, 컴퓨터보안 및 소프트웨어 공학 분야에서
      탄탄한 이론 교육과 알찬 실험 실습 교육을 병행하여 4차산업혁명을 이끌
      핵심분야의 역량을 갖춘 컴퓨터/SW 전문 인력을 배출하고 있습니다.
      <br />
      <br />
      또한, 컴퓨터/SW와 타산업의 융합을 주도할 수 있는 종합적 사고력을 배양하기
      위해 리빙랩, K-Lab 등 다양한 융합 프로그램을 운영하고 있습니다.
    </p>
  );
}
getMainLayOut(Index);
