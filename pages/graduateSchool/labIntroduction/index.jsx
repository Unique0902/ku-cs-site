import React, { useReducer, useRef } from 'react';
import SubTitle from '../../../components/subTitle';
import { labData } from '../../../data/lap';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  let refArr = [];
  const tableRef1 = useRef();
  const tableRef2 = useRef();
  const tableRef3 = useRef();
  const tableRef4 = useRef();
  const tableRef5 = useRef();
  const tableRef6 = useRef();
  const tableRef7 = useRef();
  const tableRef8 = useRef();
  const tableRef9 = useRef();
  const tableRef10 = useRef();
  const tableRef11 = useRef();
  const tableRef12 = useRef();
  const tableRef13 = useRef();
  const tableRef14 = useRef();
  const tableRef15 = useRef();
  const tableRef16 = useRef();
  const tableRef17 = useRef();
  const tableRef18 = useRef();
  const tableRef19 = useRef();
  const tableRef20 = useRef();
  refArr = [
    tableRef1,
    tableRef2,
    tableRef3,
    tableRef4,
    tableRef5,
    tableRef6,
    tableRef7,
    tableRef8,
    tableRef9,
    tableRef10,
    tableRef11,
    tableRef12,
    tableRef13,
    tableRef14,
    tableRef15,
    tableRef16,
    tableRef17,
    tableRef18,
    tableRef19,
    tableRef20,
  ];
  const liStyle = 'hover:text-blue-400 cursor-pointer';
  const basicStyle =
    'border border-black py-4 font-sans text-black text-lg font-normal px-2 max-lg:text-sm';
  const leftStyle =
    'border border-black py-4 font-sans text-black text-lg font-semibold w-1/3 bg-gray-100 text-center max-lg:text-sm';
  return (
    <div>
      <section className='pt-6'>
        <SubTitle text={'대학원 컴퓨터공학과 연구실'} />
      </section>
      <section className='pt-6 flex flex-col gap-2'>
        <h3 className='font-sans text-2xl text-black font-semibold'>
          연구실 목록
        </h3>
        <ul className='font-sans text-xl max-lg:text-lg  text-black font-normal flex flex-col gap-2 list-inside list-disc'>
          {labData.map((data, index) => (
            <li
              key={index}
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
        <section key={index} className='pt-10 flex flex-col gap-2'>
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
                      <li key={field}>{field}</li>
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
