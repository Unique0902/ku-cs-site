import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function ResponsiveMenuType({ data, setIsShowMenu }) {
  const [isShowDetailMenu, setIsShowDetailMenu] = useState(false);
  const [isFirstLoc, setIsFirstLoc] = useState(false);
  const router = useRouter();
  const locArr = router.pathname.split('/');
  useEffect(() => {
    if (data.engName === locArr[1]) {
      setIsFirstLoc(true);
      setIsShowDetailMenu(true);
    }
  }, []);

  return (
    <li className='px-8 '>
      <button
        onClick={() => {
          setIsShowDetailMenu(!isShowDetailMenu);
        }}
        className={`cursor-pointer font-sans text-2xl max-md:text-xl font-bold w-full text-left py-2 ${
          isFirstLoc && 'text-green-600'
        }`}
      >
        {data.name}
      </button>

      {isShowDetailMenu && (
        <ul className='flex flex-col gap-4 py-2'>
          {data.data.map((dt) => (
            <li>
              <Link
                href={`/${data.engName}/${dt.url}`}
                onClick={() => {
                  setIsShowMenu(false);
                }}
                key={dt.url}
                className={`font-sans font-semibold text-xl max-md:text-lg pl-2 text-gray-600 ${
                  dt.url === locArr[2] && 'text-blue-500'
                }`}
              >
                {`- ${dt.name}`}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
