import React from 'react';
import PostTableLayout from '../../../components/postTableLayout/postTableLayout';
import { getMainLayOut } from '../../../layouts/appLayout';

export default function Index() {
  return (
    <div>
      <PostTableLayout />
    </div>
  );
}
getMainLayOut(Index);
