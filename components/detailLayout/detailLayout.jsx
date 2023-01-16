import { useRouter } from 'next/router';
import React from 'react';
import DetailPage from '../detailPage/detailPage';
export default function DetailLayout({ originData, originNoticeData }) {
  const router = useRouter();
  const id = router.query.id;
  let data = null;
  let beforeData = null;
  let nextData = null;
  if (originData.find((dt) => dt.id == id)) {
    data = originData.find((dt) => dt.id == id);
    beforeData = originData[originData.indexOf(data) + 1];
    nextData = originData[originData.indexOf(data) - 1];
  } else if (originNoticeData.find((dt) => dt.id == id)) {
    data = originNoticeData.find((dt) => dt.id == id);
    beforeData = originNoticeData[originNoticeData.indexOf(data) + 1];
    nextData = originNoticeData[originNoticeData.indexOf(data) - 1];
  }
  return (
    <section className='pt-6'>
      <DetailPage data={data} beforeData={beforeData} nextData={nextData} />
    </section>
  );
}
