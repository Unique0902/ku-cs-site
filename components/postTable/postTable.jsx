import React from 'react';
import Link from 'next/link';
import { FiPaperclip } from 'react-icons/fi';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function PostTable({ noticeData, data, searchOption, pageNum }) {
  const router = useRouter();
  if (searchOption.viewType === 'dashboard') {
    return (
      <table className='w-full'>
        <thead className='text-center bg-gray-200 border-t-4 border-b border-t-black border-b-gray-400 h-12 font-semibold text-lg'>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회</td>
          </tr>
        </thead>
        <tbody>
          {searchOption.isShowNotice &&
            noticeData.map((data, index) => (
              <tr
                key={index}
                className='text-center bg-yellow-100 border-t border-b  border-gray-400 h-12 font-normal text-lg'
              >
                <td className='font-semibold text-red-500'>[공지]</td>
                <td className='text-left font-semibold '>
                  <Link
                    href={`${router.pathname}/${data.id}`}
                    className='flex flex-row items-center gap-2'
                  >
                    {data.title.length > 32
                      ? `${data.title.slice(0, 32)}...`
                      : data.title}
                    {data.file && <FiPaperclip className='text-2xl' />}
                  </Link>
                </td>
                <td>{data.author}</td>
                <td>{data.time}</td>
                <td>{data.view}</td>
              </tr>
            ))}
          {data
            .slice(
              searchOption.showNum * (pageNum.now - 1),
              searchOption.showNum * pageNum.now
            )
            .map((dt, index) => (
              <tr
                key={index}
                className='text-center bg-white border-t border-b  border-gray-400 h-12 font-normal text-lg'
              >
                <td className=''>
                  {data.length -
                    index -
                    searchOption.showNum * (pageNum.now - 1)}
                </td>
                <td className='text-left'>
                  <Link
                    href={`${router.pathname}/${dt.id}`}
                    className='flex flex-row items-center gap-2 hover:text-green-600'
                  >
                    {dt.title.length > 32
                      ? `${dt.title.slice(0, 32)}...`
                      : dt.title}
                    {dt.file && <FiPaperclip className='text-2xl' />}
                  </Link>
                </td>
                <td>{dt.author}</td>
                <td>{dt.time}</td>
                <td>{dt.view}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }

  if (searchOption.viewType === 'album') {
    return (
      <ul className='w-full flex flex-row flex-wrap'>
        {data
          .slice(
            searchOption.showNum * (pageNum.now - 1),
            searchOption.showNum * pageNum.now
          )
          .map((dt) => (
            <li className='w-1/4 p-3 mb-12 '>
              <Link
                href={`${router.pathname}/${dt.id}`}
                className='flex flex-col gap-2'
              >
                <Image
                  src={dt.img.length > 0 ? dt.img[0] : '/imgs/ready.jpg'}
                  alt={dt.title}
                  width={500}
                  height={500}
                  className='w-full h-64 border border-gray-400'
                />
                <p className='font-sans font-semibold text-black text-lg'>
                  {dt.title.length > 11
                    ? `${dt.title.slice(0, 11)}...`
                    : dt.title}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}
