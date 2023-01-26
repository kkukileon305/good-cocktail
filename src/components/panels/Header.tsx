import { Link } from 'react-router-dom';
import { BsSearch, BsCart } from 'react-icons/bs';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {
  return (
    <header className='border-b border-red-400'>
      <div className='max-w-[1260px] mx-auto p-4 flex justify-between items-center relative'>
        <div className='flex items-center gap-8'>
          <h1 className='font-bold text-3xl py-1'>
            <Link to={'/'}>Good App</Link>
          </h1>
          <Link to={'/search'} className='flex gap-2 justify-start items-center border border-red-400 px-2 py-1 rounded '>
            <p className='w-[100px] text-left'>검색...</p>
            <BsSearch />
          </Link>
        </div>

        <div className='flex items-center gap-4'>
          <ThemeSwitcher />
          <button>
            <BsCart size={24} color='red' />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
