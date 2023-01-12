import { BsDot } from 'react-icons/bs';
export default function MiniList({ data }) {
  return (
    <li>
      <div className='flex flex-row items-center justify-between h-8'>
        <div className='flex flex-row items-center'>
          <BsDot className='text-black text-xl' />
          <button className='font-sans font-semibold text-black text-lg hover:text-blue-400'>
            {data.title.length > 21
              ? `${data.title.substr(0, 21)} ...`
              : data.title}
          </button>
        </div>

        <p className='font-sans font-medium text-gray-400 text-sm'>
          {data.time}
        </p>
      </div>
    </li>
  );
}
