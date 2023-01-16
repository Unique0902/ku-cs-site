import React from 'react';
import DetailLayout from '../../../components/detailLayout/detailLayout';
import {
  departmentNewsData,
  noticeDepartmentNewsData,
} from '../../../data/departmentNews';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Detail() {
  return (
    <DetailLayout
      originData={departmentNewsData}
      originNoticeData={noticeDepartmentNewsData}
    />
  );
}
getMainLayOut(Detail);
