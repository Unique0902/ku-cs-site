import Link from 'next/link';
import { useState } from 'react';
import HomeBanner from '../components/homeBanner';
import MiniLists from '../components/miniLists/miniLists';
import WholeMiniLists from '../components/wholeMiniLists/wholeMiniLists';
import { departmentNoticeData } from '../data/departmentNotice';
import { recruitmentInformationData } from '../data/recruitmentInformation';
export default function Home() {
  const [clickedBtn, setClickedBtn] = useState('학과공지');
  const activatedBtnStyle =
    'text-lg border-l border-r bg-white text-black border-t-blue-500';
  const unactivatedBtnStyle = 'text-mg text-gray-700 bg-gray-200';
  return (
    <main>
      <HomeBanner />
      <section className='max-2xl:px-16 max-md:px-4 px-40 py-8 flex flex-row max-2xl:flex-col gap-6'>
        <div className=' flex-1 h-full'>
          <section ion className='flex flex-row justify-between mb-2 mt-2'>
            <div className=''>
              <button
                onClick={() => {
                  setClickedBtn('학과공지');
                }}
                className={`w-24 h-12 border-gray-200 border-t-4 border-t-transparent ${
                  clickedBtn == '학과공지'
                    ? activatedBtnStyle
                    : unactivatedBtnStyle
                }   font-sans font-semibold hover:border-t-blue-500 hover:border-l hover:border-r hover:text-black hover:bg-white hover:text-lg`}
              >
                학과공지
              </button>
              <button
                onClick={() => {
                  setClickedBtn('채용정보');
                }}
                className={`w-24 h-12 border-gray-200 border-t-4 border-t-transparent ${
                  clickedBtn == '채용정보'
                    ? activatedBtnStyle
                    : unactivatedBtnStyle
                } font-sans font-semibold hover:border-t-blue-500 hover:border-l hover:border-r hover:bg-white hover:text-black hover:text-lg`}
              >
                채용정보
              </button>
            </div>
            <div className='flex-1 flex flex-row justify-end items-center border-b border-gray-200'>
              <Link
                href={'openYard/recruitmentInformation'}
                className='text-gray-400 font-semibold text-sm'
              >
                +더보기
              </Link>
            </div>
          </section>
          {clickedBtn === '학과공지' && (
            <MiniLists
              dataArr={departmentNoticeData.slice(0, 5)}
              firstLocation={'openYard'}
              secondLocation={'departmentNotice'}
            />
          )}
          {clickedBtn === '채용정보' && (
            <MiniLists
              dataArr={recruitmentInformationData.slice(0, 5)}
              firstLocation={'openYard'}
              secondLocation={'recruitmentInformation'}
            />
          )}
        </div>
        <WholeMiniLists
          frontTitle={'학과'}
          backTitle={'소식'}
          dataArr={departmentNoticeData.slice(0, 5)}
          isLink={false}
          firstLocation={'openYard'}
          secondLocation={'departmentNews'}
        />
        <WholeMiniLists
          dataArr={departmentNoticeData.slice(0, 5)}
          backTitle={'가기'}
          frontTitle={'바로'}
          isLink={true}
        />
      </section>
    </main>
  );
}
