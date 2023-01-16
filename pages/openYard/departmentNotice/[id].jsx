import React from 'react';
import DetailLayout from '../../../components/detailLayout/detailLayout';
import {
  departmentNoticeData,
  noticeDepartmentNoticeData,
} from '../../../data/departmentNotice';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Detail() {
  return (
    <DetailLayout
      originData={departmentNoticeData}
      originNoticeData={noticeDepartmentNoticeData}
    />
  );
}
getMainLayOut(Detail);
