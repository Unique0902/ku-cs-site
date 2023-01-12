import React from 'react';
import Image from 'next/image';

export default function AppFooter() {
  const textStyle = 'font-sans text-gray-600 font-normal text-base';
  return (
    <footer className='relative flex flex-row gap-8 mx-40 py-8 border-t border-gray-300 mt-12'>
      <Image
        src={'/imgs/logo.png'}
        alt={'logo'}
        width={500}
        height={500}
        className={' h-20 w-52'}
      />
      <div className='flex flex-col justify-between'>
        <p className={textStyle}>
          서울시 광진구 능동로 120 건국대학교 (120 Neungdong-ro, Gwangjin-gu,
          Seoul 05029. KOREA)
          <br /> 학기중 근무시간 09:00~17:30(점심시간 12시~13시)
        </p>
        <p className={textStyle}>
          COPYRIGHT 2020 KONKUK UNIVERSITY. ALL RIGHTS RESERVED.
        </p>
      </div>
      <a
        href={'http://www.konkuk.ac.kr/jsp/Plaza/plaza_01_13.jsp'}
        target='_blank'
        className='absolute right-0 text-green-600 font-normal text-lg font-sans'
      >
        개인정보처리방침
      </a>
    </footer>
  );
}
