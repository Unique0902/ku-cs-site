import React from 'react';
import FacultyHisoryRow from '../../../components/facultyHisoryRow';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  return (
    <>
      <FacultyHisoryRow
        year={'2020'}
        firstRow={'학부: 컴퓨터공학부로 통합'}
        secondRow={'대학원: 컴퓨터공학과로 통합'}
      />
      <FacultyHisoryRow
        year={'2018'}
        firstRow={'공과대학 소프트웨어융합학부 컴퓨터공학과로 소속변경'}
        secondRow={'공과대학 소프트웨어융합학부 소프트웨어학과로 소속변경'}
      />
      <FacultyHisoryRow
        year={'2008'}
        firstRow={'인터넷미디어공학부 대학원 설립'}
      />
      <FacultyHisoryRow
        year={'2005'}
        firstRow={'인터넷미디어공학부 1회 졸업생 배출'}
      />
      <FacultyHisoryRow
        year={'2003'}
        firstRow={'학과명칭 변경: 인터넷미디어학부 ⇒ 인터넷미디어공학부'}
      />
      <FacultyHisoryRow
        year={'2001'}
        firstRow={'인터넷미디어학부 1회 신입생 입학'}
      />
      <FacultyHisoryRow
        year={'2000'}
        firstRow={'정보통신대학 신설학과명칭 변경: 컴퓨터공학과 ⇒ 컴퓨터공학부'}
        secondRow={'정보통신대학 내 인터넷미디어학부 설립'}
      />
      <FacultyHisoryRow
        year={'1996'}
        firstRow={'대학원 학과명칭 변경: 전자계산학과 ⇒ 컴퓨터정보통신공학과'}
      />
      <FacultyHisoryRow
        year={'1995'}
        firstRow={'학과명칭 변경: 전자계산학과 ⇒ 컴퓨터공학과'}
      />
      <FacultyHisoryRow
        year={'1991'}
        firstRow={'대학원 전자계산학과 박사과정 신설'}
      />
      <FacultyHisoryRow
        year={'1985'}
        firstRow={'대학원 전자계산학과 석사과정 신설'}
      />
      <FacultyHisoryRow
        year={'1984'}
        firstRow={'전자계산학과 1회 졸업생 배출'}
      />
      <FacultyHisoryRow year={'1979'} firstRow={'전자계산학과 신설'} />
    </>
  );
}
getMainLayOut(Index);
