import React, { useEffect, useState } from 'react';
import {
  announcementData,
  noticeAnnouncementData,
} from '../../data/announcement';
import PostTable from '../postTable/postTable';
import PostTableBtnBar from '../postTableBtnBar/postTableBtnBar';
import PostTablePageBar from '../postTablePageBar/postTablePageBar';
import PostTableSearchBar from '../postTableSearchBar/postTableSearchBar';

export default function PostTableLayout() {
  const [data, setData] = useState(announcementData);
  const [noticeData, setNoticeData] = useState(noticeAnnouncementData);
  const [searchOption, setSearchOption] = useState({
    viewType: 'dashboard',
    isShowNotice: true,
    showNum: 12,
  });
  const [pageNum, setPageNum] = useState({
    now: 1,
    total: parseInt(data.length / searchOption.showNum) + 1,
  });
  useEffect(() => {
    setPageNum({
      now: 1,
      total:
        parseInt(
          (data.length === 0 ? 0 : data.length - 1) / searchOption.showNum
        ) + 1,
    });
  }, [data, searchOption.showNum]);
  return (
    <section className='py-4 flex flex-col gap-4'>
      <PostTableSearchBar
        data={data}
        setData={setData}
        searchOption={searchOption}
        setSearchOption={setSearchOption}
      />
      <PostTableBtnBar
        totalNum={data.length}
        searchOption={searchOption}
        setSearchOption={setSearchOption}
      />
      <PostTable
        noticeData={noticeData}
        data={data}
        searchOption={searchOption}
        pageNum={pageNum}
      />
      <PostTablePageBar pageNum={pageNum} setPageNum={setPageNum} />
    </section>
  );
}
