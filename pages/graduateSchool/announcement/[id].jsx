import { useRouter } from 'next/router';
import React from 'react';
import DetailPage from '../../../components/detailPage/detailPage';
import {
  announcementData,
  noticeAnnouncementData,
} from '../../../data/announcement';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Detail() {
  const router = useRouter();
  const id = router.query.id;
  let data = null;
  let beforeData = null;
  let nextData = null;
  if (announcementData.find((dt) => dt.id == id)) {
    data = announcementData.find((dt) => dt.id == id);
    beforeData = announcementData[announcementData.indexOf(data) + 1];
    nextData = announcementData[announcementData.indexOf(data) - 1];
  } else if (noticeAnnouncementData.find((dt) => dt.id == id)) {
    data = noticeAnnouncementData.find((dt) => dt.id == id);
    beforeData = noticeAnnouncementData[announcementData.indexOf(data) + 1];
    nextData = noticeAnnouncementData[announcementData.indexOf(data) - 1];
  }
  return (
    <section className='pt-6'>
      <DetailPage data={data} beforeData={beforeData} nextData={nextData} />
    </section>
  );
}
getMainLayOut(Detail);
