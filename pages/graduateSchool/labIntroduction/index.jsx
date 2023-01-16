import React, { useReducer, useRef } from 'react';
import SubTitle from '../../../components/subTitle';
import { labData } from '../../../data/lap';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  let refArr = [];
  for (let i = 0; i < labData.length; i++) {
    const tableRef = useRef();
    refArr = [...refArr, tableRef];
  }
  const liStyle = 'hover:text-blue-400 cursor-pointer';
  const basicStyle =
    'border border-black py-4 font-sans text-black text-lg font-normal px-2';
  const leftStyle =
    'border border-black py-4 font-sans text-black text-lg font-semibold w-1/3 bg-gray-100 text-center';
  return (
    <div>
      <section className='pt-6'>
        <SubTitle text={'대학원 컴퓨터공학과 연구실'} />
      </section>
      <section className='pt-6 flex flex-col gap-2'>
        <h3 className='font-sans text-2xl text-black font-semibold'>
          연구실 목록
        </h3>
        <ul className='font-sans text-xl text-black font-normal flex flex-col gap-2 list-inside list-disc'>
          {labData.map((data, index) => (
            <li
              onClick={() => {
                refArr[index].current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
              className={liStyle}
            >
              {data.name}
            </li>
          ))}
        </ul>
      </section>
      {labData.map((data, index) => (
        <section className='pt-10 flex flex-col gap-2'>
          <SubTitle text={data.name} />
          <table ref={refArr[index]}>
            <tbody>
              <tr>
                <td className={leftStyle}>지도교수</td>
                <td className={basicStyle}>{data.professor}</td>
              </tr>
              <tr>
                <td className={leftStyle}>연락처</td>
                <td className={basicStyle}>
                  <p>{`E-mail: ${data.contact.email}`}</p>
                  <p>{`전 화: ${data.contact.phoneNum}`}</p>
                </td>
              </tr>
              <tr>
                <td className={leftStyle}>연구실 소개</td>
                <td className={basicStyle}>{data.description}</td>
              </tr>
              <tr>
                <td className={leftStyle}>주요 연구 분야</td>
                <td className={basicStyle}>
                  <ul className=' list-inside list-disc'>
                    {data.fields.map((field) => (
                      <li>{field}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td className={leftStyle}>연구실 위치</td>
                <td className={basicStyle}>{data.location}</td>
              </tr>
              <tr>
                <td className={leftStyle}>연구실 홈페이지</td>
                <td className={basicStyle}>{data.url}</td>
              </tr>
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
getMainLayOut(Index);
