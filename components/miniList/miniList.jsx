import { BsDot } from 'react-icons/bs';
import Link from 'next/link';
export default function MiniList({ data, firstLocation, secondLocation }) {
  return (
    <li>
      <div className='flex flex-row items-center justify-between h-8'>
        <div className='flex flex-row items-center'>
          <BsDot className='text-black text-xl' />
          <Link
            href={`${firstLocation}/${secondLocation}/${data.id}`}
            className='font-sans font-semibold text-black text-lg max-sm:text-xs hover:text-blue-400'
          >
            {data.title.length > 21
              ? `${data.title.substr(0, 21)} ...`
              : data.title}
          </Link>
        </div>

        <p className='font-sans font-medium text-gray-400 text-sm'>
          {data.time}
        </p>
      </div>
    </li>
  );
}
