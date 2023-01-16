import React from 'react';
import PostTableLayout from '../../../components/postTableLayout/postTableLayout';
import {
  departmentNewsData,
  noticeDepartmentNewsData,
} from '../../../data/departmentNews';

import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  return (
    <section>
      <PostTableLayout
        originData={departmentNewsData}
        originNoticeData={noticeDepartmentNewsData}
      />
    </section>
  );
}
getMainLayOut(Index);
