import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainSide from '../mainSide/mainSide';
import MainTitle from '../mainTitle/mainTitle';
import { navMenuData } from '../../data/navMenuData';

export default function MainLayout({ children }) {
  const [firstLocation, setFirstLocation] = useState();
  const [secondLocation, setSecondLocation] = useState();
  const router = useRouter();
  const checkLocation = () => {
    const pathArr = router.pathname.split('/');
    setFirstLocation(pathArr[1]);
    setSecondLocation(pathArr[2]);
  };
  useEffect(() => {
    checkLocation();
  }, [router]);
  return (
    <main className='px-40 flex flex-row gap-8'>
      <MainSide
        firstName={
          navMenuData[firstLocation] ? navMenuData[firstLocation].name : ''
        }
        firstLocation={firstLocation}
        secondLocation={secondLocation}
        data={navMenuData[firstLocation] ? navMenuData[firstLocation].data : []}
      />
      <section className='flex-1'>
        <MainTitle
          firstName={
            navMenuData[firstLocation] ? navMenuData[firstLocation].name : ''
          }
          secondLocation={secondLocation}
          data={
            navMenuData[firstLocation] ? navMenuData[firstLocation].data : []
          }
        />
        {children}
      </section>
    </main>
  );
}
