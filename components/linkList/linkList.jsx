import React from 'react';

export default function LinkList() {
  const btnStyle =
    'font-sans font-normal h-12 text-gray-600 text-base border border-gray-400 hover:bg-blue-600 hover:text-white';
  return (
    <section className='grid grid-cols-2 gap-2'>
      <button className={btnStyle}>건국대학교포탈시스템</button>
      <button className={btnStyle}>대학원홈페이지</button>
      <button className={btnStyle}>(구)소프트웨어학과</button>
      <button className={btnStyle}>(구)컴퓨터공학과</button>
      <button className={btnStyle}>상허기념도서관</button>
      <button className={btnStyle}>
        건국대학교 서울특별시 빅데이터 캠퍼스 분원
      </button>
    </section>
  );
}
