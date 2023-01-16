import React from 'react';
import PostTableLayout from '../../../components/postTableLayout/postTableLayout';
import {
  recruitmentInformationData,
  noticeRecruitmentInformationData,
} from '../../../data/recruitmentInformation';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  return (
    <section>
      <PostTableLayout
        originData={recruitmentInformationData}
        originNoticeData={noticeRecruitmentInformationData}
      />
    </section>
  );
}
getMainLayOut(Index);
