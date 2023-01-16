import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function HomeBanner() {
  const [bannerNum, setBannerNum] = useState(1);
  const [intv, setIntv] = useState();
  const [imageStyleArr, setImageStyleArr] = useState({
    0: 'opacity-100',
    1: 'opacity-0',
    2: 'opacity-0',
    3: 'opacity-0',
  });
  const handleMinusBanner = () => {
    const newBannerNum = bannerNum - 1 < 1 ? 4 : bannerNum - 1;
    setImageStyleArr({
      ...imageStyleArr,
      [bannerNum - 1]: 'opacity-0',
      [newBannerNum - 1]: 'opacity-100',
    });
    setBannerNum(newBannerNum);
  };
  const handleClickMinusBanner = () => {
    handleMinusBanner();
    if (intv) {
      clearInterval(intv);
      setIntv(null);
    }
  };
  const handlePlusBanner = () => {
    setBannerNum((bannerNum) => {
      const newBannerNum = bannerNum + 1 > 4 ? 1 : bannerNum + 1;
      setImageStyleArr((imageStyleArr) => {
        return {
          ...imageStyleArr,
          [bannerNum - 1]: 'opacity-0',
          [newBannerNum - 1]: 'opacity-100',
        };
      });
      return newBannerNum;
    });
  };
  const handleClickPlusBanner = () => {
    handlePlusBanner();
    if (intv) {
      clearInterval(intv);
      setIntv(null);
    }
  };
  useEffect(() => {
    setIntv(
      setInterval(() => {
        handlePlusBanner();
      }, 4000)
    );
  }, []);

  return (
    <section className='bg-gray-300'>
      <div className='relative mx-40 max-xl:mx-16 max-md:mx-0'>
        <Image
          src={`/imgs/banner1.jpg`}
          alt={`banner1`}
          width={3200}
          height={2400}
          className={` w-full h-auto ease-in duration-500 transition-all ${imageStyleArr[0]}`}
        />
        <Image
          src={`/imgs/banner2.jpg`}
          alt={`banner2`}
          width={3200}
          height={2400}
          className={`absolute top-0 w-full h-auto ease-in duration-500 transition-all ${imageStyleArr[1]}`}
        />
        <Image
          src={`/imgs/banner3.jpg`}
          alt={`banner3`}
          width={3200}
          height={2400}
          className={`absolute top-0 w-full h-auto ease-in duration-500 transition-all ${imageStyleArr[2]}`}
        />
        <Image
          src={`/imgs/banner4.jpg`}
          alt={`banner4`}
          width={3200}
          height={2400}
          className={`absolute top-0 w-full h-auto ease-in duration-500 transition-all ${imageStyleArr[3]}`}
        />
        <div className='absolute top-4 right-6 flex flex-row gap-2'>
          <button
            onClick={handleClickMinusBanner}
            className=' bg-black px-2 py-2 text-white rounded-xl'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleClickPlusBanner}
            className=' bg-black px-2 py-2 text-white  rounded-xl'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
