import React from 'react';
import { FiPaperclip } from 'react-icons/fi';

export default function DetailTitle({ data }) {
  const titleTdStyle = 'bg-gray-200 pl-3 text-xl font-semibold';
  const tdStyle = 'pl-3';
  const trStyle = 'h-16 border-t border-b border-gray-300';
  if (data) {
    return (
      <table className='w-full font-sans text-lg text-black border-t-4 border-black'>
        <tbody>
          <tr className={trStyle}>
            <td className={titleTdStyle}>제목</td>
            <td className={`${tdStyle} font-bold`}>{data.title}</td>
            <td className={titleTdStyle}>조회</td>
            <td className={tdStyle}>{data.view}</td>
          </tr>
          <tr className={trStyle}>
            <td className={titleTdStyle}>작성자</td>
            <td className={tdStyle}>{data.author}</td>
            <td className={titleTdStyle}>작성일</td>
            <td className={tdStyle}>{data.time}</td>
          </tr>
          <tr className={trStyle}>
            <td className={titleTdStyle}>첨부파일</td>
            <td
              colSpan={3}
              className={`${tdStyle} flex flex-col justify-center h-16`}
            >
              {data.file.map((fl) => (
                <a
                  href={fl.url}
                  key={fl.name}
                  className='underline text-green-600 flex flex-row items-center gap-2'
                >
                  {fl.name}
                  <FiPaperclip className='text-2xl' />
                </a>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return <h1>nodata..</h1>;
  }
}
