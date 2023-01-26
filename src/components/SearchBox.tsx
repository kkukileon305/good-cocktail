import { BsSearch } from 'react-icons/bs';

const SearchBox = () => {
  return (
    <form onSubmit={e => e.preventDefault()} className='flex p-2 items-center border rounded border-red-300 absolute left-[calc(50%-167px)] top-[calc(50%-21px)]'>
      <input type='text' placeholder='검색...' className='w-[300px]' />
      <button>
        <BsSearch color='red' />
      </button>
    </form>
  );
};
export default SearchBox;
