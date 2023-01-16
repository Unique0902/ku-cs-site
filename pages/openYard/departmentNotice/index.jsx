import React from 'react';
import PostTableLayout from '../../../components/postTableLayout/postTableLayout';
import {
  departmentNoticeData,
  noticeDepartmentNoticeData,
} from '../../../data/departmentNotice';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  return (
    <section>
      <PostTableLayout
        originData={departmentNoticeData}
        originNoticeData={noticeDepartmentNoticeData}
      />
    </section>
  );
}
getMainLayOut(Index);
