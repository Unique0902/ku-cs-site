import React from 'react';
import MiniList from '../miniList/miniList';

export default function MiniLists({ dataArr, firstLocation, secondLocation }) {
  return (
    <ul className=' flex flex-col'>
      {dataArr.map((data) => (
        <MiniList
          key={data.id}
          data={data}
          firstLocation={firstLocation}
          secondLocation={secondLocation}
        />
      ))}
    </ul>
  );
}
