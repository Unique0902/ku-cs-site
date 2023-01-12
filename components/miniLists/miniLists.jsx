import React from 'react';
import MiniList from '../miniList/miniList';

export default function MiniLists({ dataArr }) {
  return (
    <ul className=' flex flex-col'>
      {dataArr.map((data) => (
        <MiniList data={data} />
      ))}
    </ul>
  );
}
