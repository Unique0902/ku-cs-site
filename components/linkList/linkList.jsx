import Link from 'next/link';
import React from 'react';

export default function LinkList() {
  const btnStyle =
    'font-sans font-normal h-12 text-gray-600 text-base max-md:text-sm border border-gray-400 hover:bg-blue-600 flex justify-center items-center hover:text-white font-semibold';
  return (
    <section className='grid grid-cols-2 gap-2'>
      <a
        href='https://portal.konkuk.ac.kr/'
        target='_blank'
        className={btnStyle}
      >
        건국대학교포탈시스템
      </a>
      <a
        href='http://www.konkuk.ac.kr/do/GradNew/Index.do'
        target='_blank'
        className={btnStyle}
      >
        대학원홈페이지
      </a>
      <a href='http://sw.konkuk.ac.kr/' target='_blank' className={btnStyle}>
        (구)소프트웨어학과
      </a>
      <a href='http://ce.konkuk.ac.kr/' target='_blank' className={btnStyle}>
        (구)컴퓨터공학과
      </a>
      <a
        href='https://library.konkuk.ac.kr/#/'
        target='_blank'
        className={btnStyle}
      >
        상허기념도서관
      </a>
      <a
        href='http://swedu.konkuk.ac.kr/html.do?siteId=SWEDU&menuSeq=10632'
        target='_blank'
        className={btnStyle}
      >
        건국대학교 서울특별시 빅데이터 캠퍼스 분원
      </a>
    </section>
  );
}
