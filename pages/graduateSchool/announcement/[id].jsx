import React from 'react';
import DetailLayout from '../../../components/detailLayout/detailLayout';
import {
  announcementData,
  noticeAnnouncementData,
} from '../../../data/announcement';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Detail() {
  return (
    <DetailLayout
      originData={announcementData}
      originNoticeData={noticeAnnouncementData}
    />
  );
}
getMainLayOut(Detail);
