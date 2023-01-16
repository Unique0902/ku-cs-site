import React from 'react';
import PostTableLayout from '../../../components/postTableLayout/postTableLayout';
import {
  announcementData,
  noticeAnnouncementData,
} from '../../../data/announcement';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  return (
    <div>
      <PostTableLayout
        originData={announcementData}
        originNoticeData={noticeAnnouncementData}
      />
    </div>
  );
}
getMainLayOut(Index);
