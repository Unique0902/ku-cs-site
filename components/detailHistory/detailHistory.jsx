import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DetailHistory({ beforeData, nextData }) {
  const router = useRouter();
  return (
    <section className='mt-4 flex flex-col'>
      {beforeData && (
        <table className='w-full border-t border-b font-sans text-lg text-black border-gray-300 text-center'>
          <tr className='h-16'>
            <td className='w-10'>
              <MdKeyboardArrowUp className='text-4xl' />
            </td>
            <td className='text-xl font-semibold'>이전글</td>
            <td className='text-left'>
              <Link
                href={`${beforeData.id}`}
                className='flex flex-row items-center gap-2 hover:text-green-500'
              >
                {beforeData.title.length > 32
                  ? `${beforeData.title.slice(0, 32)}...`
                  : beforeData.title}
              </Link>
            </td>
            <td>{beforeData.author}</td>
            <td className='text-gray-600'>{beforeData.time}</td>
            <td></td>
          </tr>
        </table>
      )}
      {nextData && (
        <table className='w-full border-t border-b font-sans text-lg text-black border-gray-300 text-center'>
          <tr className='h-16'>
            <td className='w-10'>
              <MdKeyboardArrowDown className='text-4xl' />
            </td>
            <td className='text-xl font-semibold'>다음글</td>
            <td className='text-left'>
              <Link
                href={`${nextData.id}`}
                className='flex flex-row items-center gap-2 hover:text-green-500'
              >
                {nextData.title.length > 32
                  ? `${nextData.title.slice(0, 32)}...`
                  : nextData.title}
              </Link>
            </td>
            <td>{nextData.author}</td>
            <td className='text-gray-600'>{nextData.time}</td>
            <td></td>
          </tr>
        </table>
      )}
    </section>
  );
}
