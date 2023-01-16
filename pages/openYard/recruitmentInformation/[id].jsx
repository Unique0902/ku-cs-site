import React from 'react';
import DetailLayout from '../../../components/detailLayout/detailLayout';
import {
  recruitmentInformationData,
  noticeRecruitmentInformationData,
} from '../../../data/recruitmentInformation';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Detail() {
  return (
    <DetailLayout
      originData={recruitmentInformationData}
      originNoticeData={noticeRecruitmentInformationData}
    />
  );
}
getMainLayOut(Detail);
