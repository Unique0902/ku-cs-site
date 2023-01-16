import React, { useState } from 'react';

export default function PostTableSearchBar({
  data,
  setData,
  searchOption,
  setSearchOption,
  originData,
}) {
  const [searchWord, setSearchWord] = useState({ type: '제목+내용', name: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchOption({ ...searchOption, isShowNotice: false });
    if (searchWord.type === '제목+내용') {
      setData(
        originData.filter(
          (dt) =>
            dt.title.includes(searchWord.name) ||
            dt.content.includes(searchWord.name)
        )
      );
    } else if (searchWord.type === '제목') {
      setData(originData.filter((dt) => dt.title.includes(searchWord.name)));
    } else if (searchWord.type === '내용') {
      setData(originData.filter((dt) => dt.content.includes(searchWord.name)));
    }
  };
  const handleChange = (e) => {
    setSearchWord({
      ...searchWord,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form
      className='font-sans flex flex-row justify-end items-center h-10 gap-2'
      onSubmit={handleSubmit}
    >
      <select
        name='type'
        value={searchWord.type}
        onChange={handleChange}
        className='text-xl font-normal text-black border border-black h-full'
      >
        <option value='제목+내용'>제목+내용</option>
        <option value='제목'>제목</option>
        <option value='내용'>내용</option>
      </select>
      <input
        type='text'
        name='name'
        value={searchWord.name}
        onChange={handleChange}
        placeholder='검색어 입력'
        className='text-xl font-normal text-black border border-black h-full px-2'
      />
      <button className='px-10 h-full bg-gray-800 font-semibold text-xl text-white'>
        검색
      </button>
    </form>
  );
}
