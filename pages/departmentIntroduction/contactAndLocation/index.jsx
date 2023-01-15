import React from 'react';
import MainLayout from '../../../components/mainLayout/mainLayout';
import Image from 'next/image';
export default function Index() {
  return (
    <MainLayout>
      <Image
        src={'/imgs/csMap.png'}
        alt={'csMap'}
        width={600}
        height={300}
        className='w-full h-auto'
      />
      <section className='pt-12'>
        <h2 className='pl-2 pb-5 font-sans text-green-700 text-4xl font-bold'>
          컴퓨터공학부
        </h2>
        <ul className=' list-disc list-inside px-3 font-sans font-normal text-xl'>
          <li>
            {
              '학과 사무실 : (우) (05029) 서울특별시 광진구 능동로 120 (화양동 1번지) 건국대학교 공과대학 A동 1층 1105호'
            }
          </li>
          <li>{'학과 연락처 : 02) 450 – 4071,3534'}</li>
          <li>{'학과 공학인증 담당 연락처 : 02-2049-6104'}</li>
        </ul>
        <Image
          src={'/imgs/csMap2.png'}
          alt={'csMap2'}
          width={600}
          height={300}
          className='w-3/4 mt-2 h-auto'
        />
      </section>
      <section className='pt-12'>
        <h2 className='pl-2 pb-5 font-sans text-green-700 text-4xl font-bold'>
          지하철 이용시
        </h2>
        <table
          border={'1'}
          bordercolor={'blue'}
          className='w-full border-t-2 border-black font-sans text-2xl text-center'
        >
          <tbody>
            <tr>
              <td className='w-1/4 bg-gray-100 font-semibold border border-gray-500 py-5'>
                2호선
              </td>
              <td className='w-3/4 font-medium border border-gray-500 py-5'>
                건대입구역 2번 출구
              </td>
            </tr>
            <tr>
              <td className='w-1/4 bg-gray-100 font-semibold border border-gray-500 py-5'>
                7호선
              </td>
              <td className='w-3/4 font-medium border border-gray-500 py-5'>
                건대입구역 4번 출구 / 어린이대공원역 3번 출구
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='pt-12'>
        <h2 className='pl-2 pb-5 font-sans text-green-700 text-4xl font-bold'>
          버스 이용시
        </h2>
        <table
          border={'1'}
          bordercolor={'blue'}
          className='w-full border-t-2 border-black font-sans text-2xl text-center'
        >
          <tbody>
            <tr>
              <td className='w-1/4 bg-gray-100 font-semibold border border-gray-500 py-5'>
                건대역
              </td>
              <td className='w-3/4 font-medium border border-gray-500 py-5'>
                240, 721, 2222, 2223, 2224
              </td>
            </tr>
            <tr>
              <td className='w-1/4 bg-gray-100 font-semibold border border-gray-500 py-5'>
                건국대학교병원 (청담대교 방향)
              </td>
              <td className='w-3/4 font-medium border border-gray-500 py-5'>
                240, 721, 2222, 3220, 4212
              </td>
            </tr>
            <tr>
              <td className='w-1/4 bg-gray-100 font-semibold border border-gray-500 py-5'>
                건국대학교앞
              </td>
              <td className='w-3/4 font-medium border border-gray-500 py-5'>
                2223, 2224, 3220
              </td>
            </tr>
            <tr>
              <td className='w-1/4 bg-gray-100 font-semibold border border-gray-500 py-5'>
                건대앞
              </td>
              <td className='w-3/4 font-medium border border-gray-500 py-5'>
                302, 3216
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='pt-12'>
        <h2 className='pl-2 pb-5 font-sans text-green-700 text-4xl font-bold'>
          차량 이용시
        </h2>
        <ul className=' list-disc list-inside px-3 font-sans font-normal text-xl'>
          <li className=' font-semibold pb-2'>{'경부고속도로'}</li>
          <p>
            {
              '서울 톨게이트를 지나 구리-판교간 고속도로를 이용, 서하남에서 나오거나 올림픽 대로를 이용, 잠실대교나 올림픽대교를 건너 구의사거리에서 지하철 2호선 방향으로 직진하면 건국대학교 상허문이 있습니다.'
            }
          </p>
          <li className=' font-semibold py-2'>{'중부고속도로'}</li>
          <p>
            {
              '상일,하일 또는 서하남에서 나와 올림픽 대교를 건너 직진하면 오른쪽에 어린이 대공원이 있고 맞은편에 건국대학교 정문이 있습니다.'
            }
          </p>
        </ul>
      </section>
    </MainLayout>
  );
}
