import React from 'react';
import { getMainLayOut } from '../../../layouts/appLayout';
import SubTitle from '../../../components/subTitle';

export default function Index() {
  const basicStyle =
    'border border-black py-4 font-sans text-black text-lg font-normal';
  const headStyle =
    'border border-black py-4 font-sans text-black text-lg font-semibold bg-gray-100';
  return (
    <div>
      <section className='pt-6'>
        <p className='font-sans font-semibold text-lg text-red-500'>
          {'*본 교과과정은 2022학년도 입학생 기준이며,'}
        </p>
        <p className='font-sans font-semibold text-lg text-red-500 pl-1'>
          {
            '이전 학번은 건국대학교 홈페이지 온라인 요람 페이지에서 본인 학번 요람 확인 바람.'
          }
        </p>
        <p className='font-sans font-semibold text-lg text-black'>
          {'*졸업요건은 열린마당>학과공지>'}
          <u>{'컴퓨터공학부 학과별 졸업요건'}</u> {'정리게시글 확인바람'}
        </p>
      </section>
      <section className='pt-6'>
        <SubTitle text={'컴퓨터공학부 지교'} />
        <table className='w-full text-center '>
          <thead>
            <tr>
              <td className={headStyle}>학년 학기</td>
              <td className={headStyle}>이수구분</td>
              <td className={headStyle}>학수번호</td>
              <td className={headStyle}>교과목명</td>
              <td className={headStyle}>학점(시간)</td>
              <td className={headStyle}>이전 교육과정 동일 교과목</td>
              <td className={headStyle}>비고</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={basicStyle}>1-1</td>
              <td className={basicStyle}>지필</td>
              <td className={basicStyle}>COAA83717</td>
              <td className={basicStyle}>CSP진로탐색</td>
              <td className={basicStyle}>2(2)</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>P/N</td>
            </tr>
            <tr>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>소계</td>
              <td className={basicStyle}>1과목</td>
              <td className={basicStyle}>2(2)</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>1-1</td>
              <td className={basicStyle}>지필</td>
              <td className={basicStyle}>COAA83910</td>
              <td className={basicStyle}>C프로그래밍</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>컴퓨터공학프로그래밍2</td>
              <td className={basicStyle}>필수</td>
            </tr>
            <tr>
              <td className={basicStyle}>1-1</td>
              <td className={basicStyle}>지필</td>
              <td className={basicStyle}>BBAA62222</td>
              <td className={basicStyle}>미적분학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>수학및연습1</td>
              <td className={basicStyle}>필수</td>
            </tr>
            <tr>
              <td className={basicStyle}>1-2</td>
              <td className={basicStyle}>지교</td>
              <td className={basicStyle}>BBAA11972</td>
              <td className={basicStyle}>이산수학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>전산수학</td>
              <td className={basicStyle}>필수</td>
            </tr>
            <tr>
              <td className={basicStyle}>1-2</td>
              <td className={basicStyle}>지교</td>
              <td className={basicStyle}>COAA83911</td>
              <td className={basicStyle}>JAVA프로그래밍</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>
                컴퓨터공학프로그래밍1, Java프로그래밍
              </td>
              <td className={basicStyle}>필수</td>
            </tr>
            <tr>
              <td className={basicStyle}>1-2</td>
              <td className={basicStyle}>지교</td>
              <td className={basicStyle}>BBAA04972</td>
              <td className={basicStyle}>선형대수학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>선형대수</td>
              <td className={basicStyle}>필수</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>지교</td>
              <td className={basicStyle}>COAA83619</td>
              <td className={basicStyle}>확률과통계</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>확률과통계학</td>
              <td className={basicStyle}>필수</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>지교</td>
              <td className={basicStyle}>COAA81504</td>
              <td className={basicStyle}>수치해석</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>선택</td>
            </tr>
            <tr>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>소계</td>
              <td className={basicStyle}>7과목</td>
              <td className={basicStyle}>21(23)</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>1-1,2</td>
              <td className={basicStyle}>지교B</td>
              <td className={basicStyle}>COAA81308</td>
              <td className={basicStyle}>기초통계학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>사회과학대학</td>
            </tr>
            <tr>
              <td className={basicStyle}>1-1,2</td>
              <td className={basicStyle}>지교B</td>
              <td className={basicStyle}>BBAA62288</td>
              <td className={basicStyle}>백터미적분학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>수학및연습2</td>
              <td className={basicStyle}>공과대학</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1,2</td>
              <td className={basicStyle}>지교B</td>
              <td className={basicStyle}>BBAA62220</td>
              <td className={basicStyle}>공학수학1</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>공학수학및연습1</td>
              <td className={basicStyle}>공과대학</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1,2</td>
              <td className={basicStyle}>지교B</td>
              <td className={basicStyle}>BBAA62221</td>
              <td className={basicStyle}>공학수학2</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>공학수학및연습2</td>
              <td className={basicStyle}>공과대학</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>지교B</td>
              <td className={basicStyle}>BBAA59238</td>
              <td className={basicStyle}>공업확률과통계</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>공과대학</td>
            </tr>
            <tr>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>소계</td>
              <td className={basicStyle}>5과목</td>
              <td className={basicStyle}>15(15)</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>계</td>
              <td className={basicStyle}>13과목</td>
              <td className={basicStyle}>38(40)</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='pt-6 font-sans text-gray-600 font-normal text-lg'>
        <p>
          ※ CSP진로탐색, C프로그래밍, 미적분학, 확률과통계, JAVA프로그래밍,
          선형대수학, 이산수학은 필수 수강이고, 나머지는 선택
        </p>
        <p>
          ※ 미적분학, 확률과통계, 선형대수학은 본인 소속 단과대학의 지정교양
          과목을 우선적으로 수강하여야 하나, 타 단과대학의 동일한 교과목명을
          가진 지정교양을 수강하여도 지교로 인정 가능
        </p>
        <p>
          ※ 다전공지정교양필수과목: 미적분학, 선형대수학, 이산수학, C프로그래밍,
          JAVA프로그래밍
        </p>
        <p>
          ※ 2020년도 교육과정개편으로 (수학및연습1, 수학및연습2,
          공학수학및연습1, 공학수학및연습2)는 (미적분학, 벡터미적분학,
          공학수학1, 공학수학2)로 교과목명이 변경되었음. ‘기 취득한 교과목의
          중복수강 신청에 관한 학칙’에 따라 중복이수과목으로 간주되어 이중으로
          학점인정이 불가함
        </p>
      </section>
      <section className='pt-6'>
        <SubTitle text={'학과소개'} />
        <p className='font-sans text-black font-normal text-xl px-3 '>
          컴퓨터공학부는 소프트웨어, 시스템 및 서비스의 창의적 설계, 개발,
          응용이 가능한 전문인력 양성을 목표로 하고, 탄탄한 이론 교육과 알찬
          실험 실습 교육을 병행하고 있다. 본 학과에 입학한 학생들은 IoT
          클라우드, 미디어 SW, 시스템 SW, 지능형 융합 SW 관련 다양한 첨단 학문과
          기술을 배우게 된다. 또한 많은 실습과목과 프로젝트과목을 통해
          창의적이고 융합적 사고를 기를 수 있도록 하고 있으며, 해외단기교육,
          해외대학교환학생, 소프트웨어경진대회, 수업멘토 등의 다양한 프로그램을
          통해 우수한 학생을 배출하고 있다.
        </p>
      </section>
      <section className='pt-6'>
        <SubTitle text={'교육목표'} />
        <p className='font-sans text-black font-normal text-xl px-3 '>
          {
            '컴퓨터공학부는 첨단 컴퓨터공학 지식을 이용하여 소프트웨어, 시스템 및 서비스를 창의적으로 기획, 개발 및 운영할 수 있는 전문인력 양성을 교육 프로그램의 목적으로 하고 있다. 이러한 목표를 달성하기에 필요한 세부 목표들을 아래와 같이 수립하였다.'
          }
        </p>
        <ul className='px-6 flex flex-col gap-1 pt-2'>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            1) 컴퓨터공학 분야의 기초 지식과 이론을 교육하여 IT산업의 제반
            문제점을 해결할 수 있으며 신기술을 효과적으로 습득할 수 있는 능력을
            갖춘 공학도 양성 (기본능력 배양)
          </li>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            2) 컴퓨터공학 분야의 첨단 학문과 기술을 교육하여 산업체에서 바로
            활용 가능한 소프트웨어 분야의 핵심 기술 인력 양성 (산업체 수요에
            부응)
          </li>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            3) 빅데이터, 인공지능, 시스템/미디어 소프트웨어, IoT 클라우드 등의
            교육을 통하여 차세대 성장 동력 핵심 인력 양성(국가 성장동력에 부응)
          </li>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            4) 글로벌화 하면서 급변하는 IT 환경 속에서 핵심적인 역할을 담당할 수
            있는 국제 감각을 갖춘 공학도 양성 (국제화에 부응)
          </li>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            5) 산업체와의 긴밀한 협력을 통한 수요자 중심의 교육을 실시하여 고급
            전문 기술 인력 양성 (고급 전문능력 배양)
          </li>
        </ul>
      </section>
      <section className='pt-6'>
        <SubTitle text={'이수내규'} />
        <p className='font-sans text-black font-normal text-xl px-3 '>
          학사졸업요건
        </p>
        <ul className='px-6 flex flex-col gap-1 pt-2'>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            1) 교양학점(기초, 심화, 지정교양), 전공학점 및 총 이수학점 조건을
            포함한 학사졸업요건을 만족하여야 한다.
          </li>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            2) ‘졸업프로젝트 1(시작반)’과 ‘졸업프로젝트 2(계속반)’ 수강을 통해
            졸업작품을 개발하여 심사에 통과하여야 졸업이 가능하다.
          </li>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            3) 프로젝트과목인 오픈소스SW입문, 전공기초프로젝트1/2,
            산학협력프로젝트1/2, K-Lab프로젝트1/2, 오픈소스SW프로젝트1/2 중
            4과목 이상을 수강하여야 한다.
          </li>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            4) 테크니컬영어발표/말하기/논문독해/글쓰기 중 1과목 이상 수강하여야
            한다.
          </li>
          <li className='font-sans text-gray-600 font-normal text-lg'>
            5) 테크니컬영어발표/말하기/논문독해/글쓰기 중 1과목 이상 수강하여야
            한다. 인턴십 의무 이수제 졸업요건을 충족하여야 한다. (2021학번부터
            적용)
          </li>
        </ul>
      </section>
      <section className='pt-6'>
        <SubTitle text={'졸업 후 진로'} />
        <p className='font-sans text-black font-normal text-xl px-3 '>
          본 프로그램을 이수한 졸업생들은 IoT 클라우드, 미디어 SW, 시스템 SW,
          지능형 융합 SW 분야에서 소프트웨어 및 시스템 전문가로 활동할 수 있다.
          이러한 기술은 최근 사회에서 수요가 높은 분야로 컴퓨터 관련 분야뿐만이
          아니라, 다양한 학문 및 산업분야와의 융합을 위한 핵심 분야이기 때문에,
          컴퓨터공학부 졸업자는 대기업, 벤처기업, 국가연구소, 대학원 등의 다양한
          분야로의 진출이 가능하다.
        </p>
      </section>
      <section className='pt-6'>
        <SubTitle text={'컴퓨터공학부 전공교육과정'} />
        <table className='w-full text-center '>
          <thead>
            <tr>
              <td className={headStyle}>학년 학기</td>
              <td className={headStyle}>이수구분</td>
              <td className={headStyle}>학수번호</td>
              <td className={headStyle}>교과목명</td>
              <td className={headStyle}>학점(시간)</td>
              <td className={headStyle}>이전 교육과정 동일 교과목</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={basicStyle}>1-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB05021</td>
              <td className={basicStyle}>컴퓨터공학개론</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>정보통신기초</td>
            </tr>
            <tr>
              <td className={basicStyle}>1-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61097</td>
              <td className={basicStyle}>테크니컬영어발표</td>
              <td className={basicStyle}>1(1)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>1-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61224</td>
              <td className={basicStyle}>테크니컬영어말하기</td>
              <td className={basicStyle}>1(1)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB11792</td>
              <td className={basicStyle}>객체지향프로그래밍</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>C++프로그래밍, 컴퓨터응용및실습2</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61096</td>
              <td className={basicStyle}>오픈소스SW입문</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB54724</td>
              <td className={basicStyle}>웹프로그래밍</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>인터넷프로그래밍</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12042</td>
              <td className={basicStyle}>자료구조</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62244</td>
              <td className={basicStyle}>전공기초프로젝트1(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61225</td>
              <td className={basicStyle}>테크니컬영어논문독해</td>
              <td className={basicStyle}>1(1)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB59361</td>
              <td className={basicStyle}>데이터통신</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB51983</td>
              <td className={basicStyle}>랜덤프로세스개론</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12016</td>
              <td className={basicStyle}>소프트웨어공학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>소프트웨어공학개론</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12022</td>
              <td className={basicStyle}>시스템프로그래밍</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12023</td>
              <td className={basicStyle}>알고리즘</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62735</td>
              <td className={basicStyle}>인공지능</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>인공지능개론</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62247</td>
              <td className={basicStyle}>전공기초프로젝트2(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12158</td>
              <td className={basicStyle}>컴퓨터회로</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB53292</td>
              <td className={basicStyle}>컴퓨테이션이론</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61213</td>
              <td className={basicStyle}>K-Lab프로젝트1(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62251</td>
              <td className={basicStyle}>객체지향개발방법론</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>소프트웨어모델링및분석</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12001</td>
              <td className={basicStyle}>데이터베이스</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12070</td>
              <td className={basicStyle}>디지털영상처리</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB51979</td>
              <td className={basicStyle}>모바일프로그래밍</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB55836</td>
              <td className={basicStyle}>산학협력프로젝트1(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB15630</td>
              <td className={basicStyle}>신호처리</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB54725</td>
              <td className={basicStyle}>알고리즘연습</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61098</td>
              <td className={basicStyle}>오픈소스SW프로젝트1(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12190</td>
              <td className={basicStyle}>운영체제</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB59453</td>
              <td className={basicStyle}>컴퓨터구조</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>컴퓨터구조론1</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12053</td>
              <td className={basicStyle}>컴퓨터그래픽스</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12111</td>
              <td className={basicStyle}>프로그래밍언어론</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB57573</td>
              <td className={basicStyle}>컴퓨터네트워크</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>네트워크와데이터통신</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB59363</td>
              <td className={basicStyle}>네트워크프로그래밍</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61223</td>
              <td className={basicStyle}>K-Lab프로젝트2(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62250</td>
              <td className={basicStyle}>고급컴퓨터그래픽스</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62866</td>
              <td className={basicStyle}>기계학습</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>인공지능</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61087</td>
              <td className={basicStyle}>데이터사이언스</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>데이터사이언스개론, 데이터마이닝</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB63052</td>
              <td className={basicStyle}>멀티미디어공학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>멀티미디어공학개론</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB49715</td>
              <td className={basicStyle}>병렬프로그래밍</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>병렬프로그래밍기초, 컴퓨터구조론2</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB55842</td>
              <td className={basicStyle}>산학협력프로젝트2(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12017</td>
              <td className={basicStyle}>소프트웨어아키텍처</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>소프트웨어설계방법론</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB23792</td>
              <td className={basicStyle}>암호학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>암호학이론</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61212</td>
              <td className={basicStyle}>오픈소스SW프로젝트2(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61100</td>
              <td className={basicStyle}>임베디드컴퓨팅</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>임베디드소프트웨어</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12050</td>
              <td className={basicStyle}>컴파일러</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>3-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB59068</td>
              <td className={basicStyle}>클라우드웹서비스</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>웹서비스</td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB56575</td>
              <td className={basicStyle}>컴퓨터비전</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12112</td>
              <td className={basicStyle}>HCI</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB57399</td>
              <td className={basicStyle}>가상현실</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB12012</td>
              <td className={basicStyle}>분산시스템및컴퓨팅</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62249</td>
              <td className={basicStyle}>소프트웨어V&V</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>소프트웨어검증</td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62246</td>
              <td className={basicStyle}>임베디드시스템소프트웨어</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB50085</td>
              <td className={basicStyle}>임베디드시스템하드웨어</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB59069</td>
              <td className={basicStyle}>클라우드IOT서비스</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}>시멘틱웹</td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB61211</td>
              <td className={basicStyle}>테크니컬영어글쓰기</td>
              <td className={basicStyle}>1(1)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB51992</td>
              <td className={basicStyle}>협동분산시스템</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1,2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB55840</td>
              <td className={basicStyle}>졸업프로젝트1(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1,2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB55841</td>
              <td className={basicStyle}>졸업프로젝트2(종합설계)</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62243</td>
              <td className={basicStyle}>UX디자인</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB39602</td>
              <td className={basicStyle}>게임프로그래밍</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62254</td>
              <td className={basicStyle}>무선및이동네트워크</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>무선네트워크</td>
            </tr>
            <tr>
              <td className={basicStyle}>4-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB54782</td>
              <td className={basicStyle}>웹기술및응용</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB54855</td>
              <td className={basicStyle}>차세대분산시스템</td>
              <td className={basicStyle}>3(4)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}>4-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62242</td>
              <td className={basicStyle}>컴퓨터공학세미나</td>
              <td className={basicStyle}>1(2)</td>
              <td className={basicStyle}>소프트웨어학과세미나, 신기술세미나</td>
            </tr>
            <tr>
              <td className={basicStyle}>4-2</td>
              <td className={basicStyle}>전선</td>
              <td className={basicStyle}>BBAB62245</td>
              <td className={basicStyle}>컴퓨터정보보안</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>소계</td>
              <td className={basicStyle}>65과목</td>
              <td className={basicStyle}>185(218)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}></td>
              <td className={basicStyle}>전선B</td>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>개설학과</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-1</td>
              <td className={basicStyle}>전선B</td>
              <td className={basicStyle}>BJFA61066</td>
              <td className={basicStyle}>수론</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>수학과</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선B</td>
              <td className={basicStyle}>BLDA57572</td>
              <td className={basicStyle}>데이터베이스</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>스마트ICT융합공학과</td>
            </tr>
            <tr>
              <td className={basicStyle}>2-2</td>
              <td className={basicStyle}>전선B</td>
              <td className={basicStyle}>BSFA55805</td>
              <td className={basicStyle}>행렬대수학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>응용통계학과</td>
            </tr>
            <tr>
              <td className={basicStyle}>3-1</td>
              <td className={basicStyle}>전선B</td>
              <td className={basicStyle}>BBLA59033</td>
              <td className={basicStyle}>데이터애널리틱스</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>산업공학부</td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선B</td>
              <td className={basicStyle}>BBPA51020</td>
              <td className={basicStyle}>로봇공학</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>전기전자공학부</td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선B</td>
              <td className={basicStyle}>BBPA12243</td>
              <td className={basicStyle}>영상신호처리</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>전기전자공학부</td>
            </tr>
            <tr>
              <td className={basicStyle}>4-1</td>
              <td className={basicStyle}>전선B</td>
              <td className={basicStyle}>BBPA59378</td>
              <td className={basicStyle}>차세대이동통신표준</td>
              <td className={basicStyle}>3(3)</td>
              <td className={basicStyle}>전기전자공학부</td>
            </tr>
            <tr>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>소계</td>
              <td className={basicStyle}>7과목</td>
              <td className={basicStyle}>21(21)</td>
              <td className={basicStyle}></td>
            </tr>
            <tr>
              <td className={basicStyle}></td>
              <td className={basicStyle}></td>
              <td className={basicStyle}>계</td>
              <td className={basicStyle}>72과목</td>
              <td className={basicStyle}>206(239)</td>
              <td className={basicStyle}></td>
            </tr>
          </tbody>
        </table>
        <p className='font-sans text-black font-normal text-xl px-3 pt-6'>
          ※ 원전공의 과목과 동일한 과목이 다(부)전공의 전선B로 지정된 경우 해당
          과목은 다(부)전공의 이수학점으로 인정 불가
        </p>
      </section>
    </div>
  );
}
getMainLayOut(Index);
