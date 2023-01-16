import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { BsListStars, BsBellSlash } from 'react-icons/bs';
export default function PostTableBtnBar({
  totalNum,
  searchOption,
  setSearchOption,
}) {
  return (
    <section className='flex flex-row font-sans items-center h-10 justify-end'>
      <button
        className={`text-black font-medium text-lg flex flex-row items-center px-4 border-l gap-3 border-black ${
          searchOption.viewType === 'album' && 'text-orange-500'
        }`}
        onClick={() => {
          setSearchOption({ ...searchOption, viewType: 'album' });
        }}
      >
        <RxDashboard />
        앨범형
      </button>
      <button
        className={`text-black font-medium text-lg flex flex-row items-center px-4 border-l gap-3 border-black ${
          searchOption.viewType === 'dashboard' && 'text-orange-500'
        }`}
        onClick={() => {
          setSearchOption({ ...searchOption, viewType: 'dashboard' });
        }}
      >
        <BsListStars />
        게시판형
      </button>
      {searchOption.viewType === 'dashboard' && (
        <button
          className={`text-black font-medium text-lg flex flex-row items-center px-4 border-l gap-3 border-black ${
            !searchOption.isShowNotice && 'text-orange-500'
          }`}
          onClick={() => {
            setSearchOption({
              ...searchOption,
              isShowNotice: !searchOption.isShowNotice,
            });
          }}
        >
          <BsBellSlash />
          공지숨기기
        </button>
      )}
      <p className='text-black font-medium text-xl px-4 border-l border-black'>
        총 <span className='font-semibold'>{totalNum}</span>건
      </p>
      <select
        name='showNum'
        className='text-black font-medium text-xl border border-black h-full px-2'
        value={searchOption.showNum}
        onChange={(e) => {
          setSearchOption({
            ...searchOption,
            showNum: parseInt(e.currentTarget.value),
          });
        }}
      >
        <option value={4}>4개씩 보기</option>
        <option value={8}>8개씩 보기</option>
        <option value={12}>12개씩 보기</option>
        <option value={16}>16개씩 보기</option>
        <option value={20}>20개씩 보기</option>
        <option value={40}>40개씩 보기</option>
        <option value={60}>60개씩 보기</option>
      </select>
    </section>
  );
}
